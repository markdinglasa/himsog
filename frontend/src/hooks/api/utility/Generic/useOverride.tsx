import { useCallback, useState } from "react";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { displayToast } from "../../../../utils";
import { OverrideTable, ToastType } from "../../../../types";
import { BASE_URL, Success } from "../../../../shared";

export const useOverride = () => {
  const axios = useAxiosPrivate();
  const [records, setRecords] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const override = useCallback(
    async (data: OverrideTable) => {
      if (!data) return;
      setLoading(true);
      try {
        let FilteredData: any;
        if (data.IsCredential) {
          FilteredData = { Username: data.Username, Password: data.Password };
        } else FilteredData = { CardNumber: data.CardNumber };

        const response = await axios.post(
          `${BASE_URL}/utility/override`,
          FilteredData,
        );
        setRecords(response.data.data || true);
        displayToast(Success.m00002, ToastType.success);
      } catch (error: any) {
        setRecords(false);
        displayToast(
          error?.response?.data?.message || error.message,
          ToastType.error,
        );
      } finally {
        setLoading(false);
      }
    },
    [axios],
  );

  return {
    records,
    loading,
    override,
  };
};
