import sys
import xml.etree.ElementTree as ET

import requests
from bs4 import BeautifulSoup
from reportlab.graphics import renderPDF, renderPM
from svglib.svglib import svg2rlg

GITHUB_URL: str = "https://github.com/himazin331/"


def _parser_html(url: str) -> BeautifulSoup:
    try:
        r: requests.models.Response = requests.get(url, timeout=(3, 5))
        soup: BeautifulSoup = BeautifulSoup(r.content, "html.parser")
    except (requests.exceptions.ConnectionError, requests.exceptions.ConnectTimeout):
        return None
    return soup


def main():
    # 草グラフの取得
    if (soup := _parser_html(GITHUB_URL)) is None:
        sys.exit()
    grass_graph = soup.find("svg", class_="js-calendar-graph-svg")
    if grass_graph is None:
        sys.exit()

    # SVG解析
    svg = ET.fromstring(str(grass_graph))

    # xmlns付与
    svg.attrib["xmlns"] = "http://www.w3.org/2000/svg"

    # GitHubユーザ情報削除
    first_g_attrib: dict = svg[0].attrib
    del first_g_attrib["data-hydro-click"], first_g_attrib["data-hydro-click-hmac"]

    # fill付与
    for rect in svg.iter("rect"):
        rect_attrib: dict = rect.attrib
        data_level: int = int(rect_attrib["data-level"])
        if data_level == 0:
            rect_attrib["fill"] = "#ebedf0"
        elif data_level == 1:
            rect_attrib["fill"] = "#9be9a8"
        elif data_level == 2:
            rect_attrib["fill"] = "#40c463"
        elif data_level == 3:
            rect_attrib["fill"] = "#30a14e"
        elif data_level == 4:
            rect_attrib["fill"] = "#216e39"
        del rect_attrib["data-level"]
        rect.attrib = rect_attrib

    # フォントサイズ指定
    for text in svg.iter("text"):
        text.attrib["font-size"] = "13"

    svg: bytes = ET.tostring(svg, encoding="utf-8", method="xml")

    # SVG保存
    svg_path: str = "/var/www/homepage-blog/public/images/grass_graph"
    with open(svg_path + ".svg", "wb") as f:
        f.write(svg)

    # PNG保存
    drawing = svg2rlg(svg_path + ".svg")
    renderPM.drawToFile(drawing, svg_path + ".png", fmt="PNG")


if __name__ == "__main__":
    main()
