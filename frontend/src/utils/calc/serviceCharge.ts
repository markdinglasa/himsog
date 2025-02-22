import { SalesLineTables } from "../../types";

export function ServiceCharge({
  SalesLine = [],
  IsAutoServiceCharge = false,
  ServiceChargeRate = 0,
}: {
  SalesLine: SalesLineTables;
  IsAutoServiceCharge: boolean;
  ServiceChargeRate: number;
}): number {
  try {
    const amount = Object.values(SalesLine).reduce((sum, record) => {
      if (IsAutoServiceCharge) {
        const amount = Number(record?.Amount) || 0;
        const taxRate = Number(record?.TaxRate) || 0;
        const taxAmountNoRate = Number(record?.TaxAmountNoRate) || 0;
        if (record.TaxId === 1 || taxAmountNoRate > 0) {
          // Exclude the tax and apply the service charge rate
          // console.log({ amount, taxRate, ServiceChargeRate });
          return (
            sum +
            parseFloat(
              ((amount / (1 + taxRate / 100)) * ServiceChargeRate).toFixed(2),
            )
          );
        } else {
          return sum + parseFloat((amount * ServiceChargeRate).toFixed(2));
        }
      }
      return sum;
    }, 0);
    return amount;
  } catch (error: any) {
    return 0;
  }
}
