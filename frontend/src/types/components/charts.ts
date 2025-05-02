export interface ChartProps {
  id?: string;
  title?: string;
  data: Array<any>;
  category?: string;
  isProgressReport?: boolean;
}

export type EChartsOption = echarts.EChartsOption;
