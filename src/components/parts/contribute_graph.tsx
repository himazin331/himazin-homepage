/* コントリビューションカレンダー・グラフ */

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip as ChartTootip
} from "chart.js";
import { OverlayTrigger, Tooltip} from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import style from "@/styles/index.module.css";

interface ContributeProps {
  contributeData: any;
}

interface DayContributions {
  date: Date;
  contribute: number;
}

interface MonthsLabel {
  month: string;
  colSpan: number;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartTootip,
);

const ContributeGraph: React.FC<ContributeProps> = ({contributeData}): React.ReactElement => {
  const daysList: Array<string> = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsList: Array<string> = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // ContributionsCalender
  let dayData: Array<Array<DayContributions>> = [];  // 日毎データ
  let monthsLabels: Array<MonthsLabel> = [];       // 月ラベル
  // ContributionGraph
  let weeklyData: Array<number> = [];             // 週毎データ
  let weeklyContLabels: Array<string | Array<string>> = [];  // 週ラベル
  let backgroundColors: Array<string> = [];       // 背景色リスト

  let prevYear: number = 0;
  for (let i = 0; i < contributeData["weeks"].length; i++)
  {
    const weekly = contributeData["weeks"][i];
    const weeklyDays = weekly["contributionDays"];

    let dayContributions: Array<DayContributions> = [];
    let weeklyContributions: number = 0;

    for (let j = 0; j < weeklyDays.length; j++)
    {
      const date: Date = new Date(weeklyDays[j]["date"]);
      dayContributions.push({
        "date": date,
        "contribute": weeklyDays[j]["contributionCount"]
      });

      weeklyContributions += dayContributions[j]["contribute"];
    }

    dayData.push(dayContributions);
    weeklyData.push(weeklyContributions);

    // 週ラベル作成
    const firstDay: Date = new Date(weeklyDays[0]["date"]);
    const firstDayYear: number = firstDay.getFullYear();
    const lastDay: Date = new Date(weeklyDays[weeklyDays.length - 1]["date"]);

    let weeklyContLabel: string | Array<string> = `${firstDay.getMonth()+1}/${firstDay.getDate()}~${lastDay.getMonth()+1}/${lastDay.getDate()}`;
    // idx=0か前年と異なる年であれば年を追加
    if (weeklyContLabels.length === 0 || prevYear !== firstDayYear) {
      if (weeklyContLabels.length % 3 === 0) {
        weeklyContLabel = [String(firstDayYear), weeklyContLabel];
        prevYear = lastDay.getFullYear();
      }
    }
    weeklyContLabels.push(weeklyContLabel);
    
    // 背景色セット
    if (weeklyContributions >= 15) {
      backgroundColors.push("#39d353");
    } else if (weeklyContributions >= 10) {
      backgroundColors.push("#26a641");
    } else if (weeklyContributions >= 5) {
      backgroundColors.push("#006d32");
    } else {
      backgroundColors.push("#0e4429");
    }
  }

  // 月ラベル作成
  let firstDayMonth: number = dayData[0][0]["date"].getMonth();
  let monthsLabelColSpan: number = 0;
  for (let i = 0; i < dayData.length; i++) {
    let dayMonth: number = dayData[i][0]["date"].getMonth();
    if (firstDayMonth !== dayMonth)
    {
      monthsLabels.push({
        "month": monthsList[firstDayMonth],
        "colSpan": Math.ceil(monthsLabelColSpan / 7)
      });

      firstDayMonth = dayMonth;
      monthsLabelColSpan = 0;
    }
    
    for (let j = 0; j < dayData[i].length; j++) {
      if (firstDayMonth === dayData[i][j]["date"].getMonth()) monthsLabelColSpan += 1;
    }
  }
  monthsLabels.push({
    "month": monthsList[firstDayMonth],
    "colSpan": Math.ceil(monthsLabelColSpan / 7)
  });

  // 行・列の入れ替え
  dayData = dayData[0].map((_, index: number) => dayData.map(row => row[index]));

  // グラフ設定
  let dataMax: number = Math.max(...weeklyData);
  let remainder: number = dataMax % 5;
  if (remainder !== 0) dataMax += remainder;

  const Scale = {
    y: {
      min: 0,
      max: dataMax,
      ticks: {
        color: "rgb(209, 205, 199)",
        stepSize: 5,
      },
      grid: {
        color: "rgb(209, 205, 199)",
      },
    },
    x: {
      ticks: {
        color: "rgb(209, 205, 199)",
      },
      grid: {
        color: "rgb(89, 85, 79)",
      }
    },
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        color: "rgb(209, 205, 199)",
        text: "GitHub Contributions",
      },
    },
    scales: Scale,
  };
  const graphData = {
      labels: weeklyContLabels,
      datasets: [
        {
          label: "Contributions",
          data: weeklyData,
          backgroundColor: backgroundColors,
        },
      ],
  };


  return (
    <>
      <div style={{maxWidth: "100%", overflowY: "hidden", overflowX: "auto"}}>
        <p style={{margin: 0}}>{contributeData["totalContributions"]} contributions in the last year</p>
        <table className={style.ContributionCalendar_grid} style={{textAlign: "center"}}>
          <thead>
            <tr style={{height: 15}}>
              <td style={{width: 29}} />
              {monthsLabels.map((monthsLabel: MonthsLabel, idx: number) => (
                <td key={idx} className={style.ContributionCalendar_label} colSpan={monthsLabel["colSpan"]}>
                  <span style={{position: "absolute", top: 0}}>{monthsLabel["month"]}</span>
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {dayData.map((daysData: Array<DayContributions>, idx: number) => (
              <tr key={idx} style={{height: 11}}>
                <td className={style.ContributionCalendar_label} style={{position: "relative"}}>
                  <span style={{clipPath: "None", position: "absolute", bottom: -4}}>
                    {daysList[idx]}
                  </span>
                </td>
                {daysData.map((dayData: DayContributions, index: number) => (
                  dayData && 
                  <OverlayTrigger key={index} placement="top" overlay={<Tooltip>{dayData["contribute"]} contributions <br /> on {`${daysList[dayData["date"].getDay()]}, ${monthsList[dayData["date"].getMonth()]} ${dayData["date"].getDate()}, ${dayData["date"].getFullYear()}`}</Tooltip>}>
                    <td className={style.ContributionCalendar_day} data-level={dayData["contribute"] && Math.floor(dayData["contribute"] / 3) + 1} />
                  </OverlayTrigger>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={style.github_contributors_weekly}>
        <Bar options={options} data={graphData} style={{height: "300px", width: "100%"}}/>
      </div>
    </>
  );
};
export default ContributeGraph;