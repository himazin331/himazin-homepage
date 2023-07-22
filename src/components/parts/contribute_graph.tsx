import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
} from "chart.js";
import { Bar } from "react-chartjs-2";
import style from "@/styles/index.module.css";

interface ContributeProps {
  contributeData: any;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);

const ContributeGraph: React.FC<ContributeProps> = ({contributeData}): React.ReactElement => {
  let weeklyData: Array<number> = [];
  let labels: Array<string | Array<string>> = [];
  let backgroundColors: Array<string> = [];

  let prevYear = 0;
  for (let i = 0; i < contributeData["weeks"].length; i++)
  {
    const weekly = contributeData["weeks"][i];
    const weeklyDays = weekly["contributionDays"];
    let weeklyContribution: number = 0;
    for (let j = 0; j < weeklyDays.length; j++) weeklyContribution += weeklyDays[j]["contributionCount"];
    weeklyData.push(weeklyContribution);

    const firstDay: Date = new Date(weeklyDays[0]["date"]);
    const lastDay: Date = new Date(weeklyDays[weeklyDays.length - 1]["date"]);
    
    let label: string | Array<string> = `${firstDay.getMonth()+1}/${firstDay.getDate()}~${lastDay.getMonth()+1}/${lastDay.getDate()}`;
    if (i === 0 || prevYear !== firstDay.getFullYear()) label = [String(firstDay.getFullYear()), label];
    labels.push(label);
    
    if (weeklyContribution >= 15) {
      backgroundColors.push("#39d353");
    } else if (weeklyContribution >= 10) {
      backgroundColors.push("#26a641");
    } else if (weeklyContribution >= 5) {
      backgroundColors.push("#006d32");
    } else {
      backgroundColors.push("#0e4429");
    }

    prevYear = lastDay.getFullYear();
  }

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
      labels,
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
      {/* <div style={{maxWidth: "100%", overflowY: "hidden", overflowX: "auto"}}>
        <table style={{borderSpacing: 3, overflow: "hidden", position: "relative", borderCollapse: "separate"}}>
          <thead>
            <tr style={{height: 15}}>
              <td className={style.ContributionCalendar_label} colSpan={3} style={{position: "relative"}}>
                <span style={{position: "absolute", top: 0}}>Jul</span>
              </td>
              <td className={style.ContributionCalendar_label} colSpan={4} style={{position: "relative"}}>
                <span style={{position: "absolute", top: 0}}>Aug</span>
              </td>
              <td className={style.ContributionCalendar_label} colSpan={4} style={{position: "relative"}}>
                <span style={{position: "absolute", top: 0}}>Sep</span>
              </td>
              <td className={style.ContributionCalendar_label} colSpan={5} style={{position: "relative"}}>
                <span style={{position: "absolute", top: 0}}>Oct</span>
              </td>
              <td className={style.ContributionCalendar_label} colSpan={4} style={{position: "relative"}}>
                <span style={{position: "absolute", top: 0}}>Nov</span>
              </td>
              <td className={style.ContributionCalendar_label} colSpan={4} style={{position: "relative"}}>
                <span style={{position: "absolute", top: 0}}>Dec</span>
              </td>
              <td className={style.ContributionCalendar_label} colSpan={5} style={{position: "relative"}}>
                <span style={{position: "absolute", top: 0}}>Jan</span>
              </td>
              <td className={style.ContributionCalendar_label} colSpan={4} style={{position: "relative"}}>
                <span style={{position: "absolute", top: 0}}>Feb</span>
              </td>
              <td className={style.ContributionCalendar_label} colSpan={4} style={{position: "relative"}}>
                <span style={{position: "absolute", top: 0}}>Mar</span>
              </td>
              <td className={style.ContributionCalendar_label} colSpan={5} style={{position: "relative"}}>
                <span style={{position: "absolute", top: 0}}>Apr</span>
              </td>
              <td className={style.ContributionCalendar_label} colSpan={4} style={{position: "relative"}}>
                <span style={{position: "absolute", top: 0}}>May</span>
              </td>
              <td className={style.ContributionCalendar_label} colSpan={4} style={{position: "relative"}}>
                <span style={{position: "absolute", top: 0}}>Jun</span>
              </td>
              <td className={style.ContributionCalendar_label} colSpan={3} style={{position: "relative"}}>
                <span style={{position: "absolute", top: 0}}>Jul</span>
              </td>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 7 }, (_, idx) => (
              <tr key={idx} style={{height: 11}}>
                {contributeData["weeks"].map((weeks) => {
                  <td tabindex="0" data-ix="1" aria-selected="false" style="width: 11px" class="ContributionCalendar-day" data-date="2022-01-02" data-level="0"/>
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <div>
        <Bar options={options} data={graphData} style={{height: "300px", width: "100%"}}/>
      </div>
    </>
  );
};
export default ContributeGraph;