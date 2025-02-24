import { useEffect } from "react";
import * as echarts from "echarts";
import { SFC } from "../../../../types";
import * as S from "../../../../styles";
import { twMerge } from "tailwind-merge";

export const DoughnutChart: SFC = ({ ClassName }) => {
  const generateRandomData = () => {
    return [
      { name: "A Coin", value: Math.floor(Math.random() * 1000) },
      { name: "B Coin", value: Math.floor(Math.random() * 1000) },
      { name: "C Coin", value: Math.floor(Math.random() * 1000) },
      { name: "D Coin", value: Math.floor(Math.random() * 1000) },
      { name: "E Coin", value: Math.floor(Math.random() * 1000) },
    ];
  };

  const productData = generateRandomData();

  useEffect(() => {
    const chartDom = document.getElementById("doughnut-chart");
    const myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: "Most Subscribe",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      /*legend: {
        orient: 'vertical',
        left: 'left',
      },*/
      series: [
        {
          name: "Sales",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "outside",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "20",
              fontWeight: "bold",
            },
          },
          data: productData,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          animationType: "scale",
          animationEasing: "elasticOut",
        },
      ],
    };

    myChart.setOption(option);
    return () => {
      myChart.dispose();
    };
  }, [productData]);

  return (
    <S.Container
      className={twMerge("bg-white p-2 h-[400px] rounded-sm", ClassName)}
    >
      <S.Content
        id="doughnut-chart"
        className="w-full h-[400px] sm:h-[300px] md:h-[400px] text-sm"
        style={{ height: "100%", minHeight: "300px" }}
      ></S.Content>
    </S.Container>
  );
};
