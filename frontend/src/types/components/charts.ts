export interface ChartProps {
  id?: string;
  title?: string;
  data: Array<any>;
  category?: string;
}

export type EChartsOption = echarts.EChartsOption;
