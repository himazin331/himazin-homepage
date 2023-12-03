/* コードブロック */

import { DefaultMantineColor } from "@mantine/core";
import { Prism } from "@mantine/prism";
import vsDark from "prism-react-renderer/themes/vsDark";
import style from "@/styles/blog.module.css";

interface colorScheme {
  color: DefaultMantineColor;
  label?: string;
}

// highlightLinesに行番号をセット
const setHighlightLines = (highlightlines: Record<number, colorScheme>, segments: string[], color: colorScheme): Record<number, colorScheme> => {
    segments.forEach((segment) => {
      if (segment !== "" && segment !== "-") {
        if (segment.includes("-")) {  // 複数行
          const [start, end] = segment.split("-").map(Number);
          for (let i = start; i <= end; i++) {
            highlightlines[i] = color;
          }
        } else {  // 単数行
          highlightlines[Number(segment)] = color;
        }
      }
    });
  return highlightlines;
};

// highlightLinesの作成
const createHighlightLines = (hlNum: string, diff: string): Record<number, colorScheme> => {
  let highlightlines: Record<number, colorScheme> = {};
  // 強調表示
  if (hlNum !== undefined) {
    const hlColor: colorScheme = {color: "slategray"};

    const hlNumSegments: string[] = hlNum.replace(/[{}]/g, "").split(/,|\s+/);
    highlightlines = setHighlightLines(highlightlines, hlNumSegments, hlColor);
  }

  // diff表示
  if (diff !== undefined) {
    const diffAdd: colorScheme = {color: "green", label: "+"};
    const diffDelete: colorScheme = {color: "red", label: "-"};

    const [diffAddSegments, diffDeleteSegments] = diff.split(/,|\s+/);
    if (diffAddSegments !== undefined) {
      highlightlines = setHighlightLines(highlightlines, diffAddSegments.replace(/[{}]/g, "").split(/,|\s+/), diffAdd);
    }
    if (diffDeleteSegments !== undefined) {
      highlightlines = setHighlightLines(highlightlines, diffDeleteSegments.replace(/[{}]/g, "").split(/,|\s+/), diffDelete);
    }
  }
  return highlightlines;
};

const CodeBlock = ({ className, children }) => {
  // inline-code
  if (className === undefined) {
    return (
      <code>{children}</code>
    );
  }

  const [language, filePath, sl, hlNum, diff] = className.split(":");
  return (
    <div className={style.relative_div}>
      <div className={style.code_title}>{filePath}</div>
      <Prism
        className={style.relative_div}
        colorScheme="dark"
        getPrismTheme={(_theme) => vsDark}
        withLineNumbers={sl === undefined || sl === "" ? false : true}
        highlightLines={createHighlightLines(hlNum, diff)}
        language={(language?.replace(/language-/, "") ?? "bash")}
        copyLabel="Copy to clipboard"
        copiedLabel="Copied!"
        scrollAreaComponent="div"
      >
        {children ?? ""}
      </Prism>
    </div>
  );
};
export default CodeBlock;