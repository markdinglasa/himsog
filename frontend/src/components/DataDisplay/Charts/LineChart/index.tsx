import { useEffect } from "react";
import * as echarts from "echarts";
import { ChartProps, SFC } from "../../../../types";
import * as S from "../../../../styles";
import { twMerge } from "tailwind-merge";

export const LineChart: SFC<ChartProps> = ({
  ClassName,
  title = "NA",
  data = [],
  category = "NA",
}) => {
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

  const salesData = Array(12).fill(0);

  data.forEach(({ Name, NameCount }) => {
    salesData[Name - 1] = NameCount;
  });

  useEffect(() => {
    const chartDom = document.getElementById("line-chart");
    const myChart = echarts.init(chartDom);

    const option = {
      title: {
        text: title,
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
          name: category,
          type: "line",
          data: salesData,
          smooth: true,
          itemStyle: {
            color: `${S.colors.primary}`,
          },
          lineStyle: {
            width: 2,
          },
        },
      ],

      grid: {
        top: "10%",
        bottom: "10%",
        left: "10%",
        right: "10%",
      },
    };

    myChart.setOption(option);

    const handleResize = () => {
      myChart.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      myChart.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, [salesData, title]);

  return (
    <S.Container
      className={twMerge("bg-white rounded-lg p-2 h-[410px]", ClassName)}
    >
      <S.Content
        id="line-chart"
        style={{ width: "100%", height: "400px" }}
        className="w-full"
      ></S.Content>
    </S.Container>
  );
};
