import { useEffect } from "react";
import * as echarts from "echarts";
import { ChartProps, SFC } from "../../../../types";
import * as S from "../../../../styles";
import { twMerge } from "tailwind-merge";
import { colors } from "../../../../styles";

export const DoughnutChart: SFC<ChartProps> = ({
  ClassName,
  id = "NA",
  title,
  data = [],
  category = "NA",
  isProgressReport = false,
}) => {
  const datalist = data.map((field) => ({
    name: field.Name,
    value: field.NameCount,
  }));

  useEffect(() => {
    const chartDom = document.getElementById(id);
    const myChart = echarts.init(chartDom);

    const option = {
      title: {
        text: title,
        left: "left",
      },
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          name: category,
          type: "pie",
          radius: ["80%", "60%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "outside",
          },
          emphasis: {
            label: {
              show: false,
              fontSize: "20",
              fontWeight: "bold",
            },
          },
          data: isProgressReport
            ? datalist.map((item) => ({
                ...item,
                itemStyle: {
                  color:
                    (item?.name ?? "NA") === "Completed"
                      ? colors.primary
                      : colors.palette.neutral[200],
                },
              }))
            : datalist,
          itemStyle: {
            backgroundColor: "red",
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
  }, [datalist, title]);

  return (
    <S.Container className={twMerge("bg-white rounded-lg p-2", ClassName)}>
      <S.Content
        id={id}
        className="w-full h-[400px] sm:h-[300px] md:h-[400px] text-sm"
        style={{ height: "100%", minHeight: "300px" }}
      />
    </S.Container>
  );
};
