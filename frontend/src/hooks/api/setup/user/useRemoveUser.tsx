import { useCallback, useState } from "react";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { displayToast } from "../../../../utils";
import { ToastType } from "../../../../types";
import { BASE_URL, Success } from "../../../../shared";

export const useRemoveUser = () => {
  const axios = useAxiosPrivate();
  const [records, setRecords] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const remove = useCallback(
    async (Id: number = 0) => {
      if (Id === 0) return;
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/setup/user/remove/${Id}`);
        setRecords(response.data.data || true);
        displayToast(Success.m00003, ToastType.success);
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
    remove,
  };
};
