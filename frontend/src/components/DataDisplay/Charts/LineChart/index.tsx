import { useEffect } from "react";
import * as echarts from "echarts";
import { SFC } from "../../../../types";
import * as S from "../../../../styles";
import { twMerge } from "tailwind-merge";

export const LineChart: SFC = ({ ClassName }) => {
  const generateRandomData = () => {
    return Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000));
  };

  const salesData = generateRandomData();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const chartDom = document.getElementById("line-chart");
    const myChart = echarts.init(chartDom);

    const option = {
      title: {
        text: "Monthly Sales",
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        data: months,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Sales",
          type: "line",
          data: salesData,
          smooth: true,
          itemStyle: {
            color: "#5470c6",
          },
          lineStyle: {
            width: 2,
          },
        },
      ],
      // Responsive settings
      responsive: true,
      grid: {
        top: "10%",
        bottom: "10%",
        left: "10%",
        right: "10%",
      },
    };

    myChart.setOption(option);

    // Resize chart on window resize
    const handleResize = () => {
      myChart.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      myChart.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, [salesData]);

  return (
    <>
      <S.Container
        className={twMerge("bg-white rounded-lg p-2 h-[400px] ", ClassName)}
      >
        <S.Content
          id="line-chart"
          style={{ width: "100%", height: "400px" }}
          className="w-full"
        ></S.Content>
      </S.Container>
    </>
  );
};
