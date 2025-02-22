import { useCallback, useEffect, useState } from "react";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { displayToast } from "../../../../utils";
import { NotificationTables, ToastType } from "../../../../types";
import { BASE_URL } from "../../../../shared";
import { useNetworkState } from "react-use";

export const useGetAllNofitication = (UserId: number = 0) => {
  const axios = useAxiosPrivate();
  const [records, setRecords] = useState<NotificationTables>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { online } = useNetworkState();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      if (online) {
        const response = await axios.get(
          `${BASE_URL}/utility/notification/get-all/${UserId}`,
        );
        setRecords(response.data.data);
      }
    } catch (error: any) {
      setRecords([]);
      if (error?.response?.data?.message !== "No record found")
        displayToast(
          error?.response?.data?.message || error.message,
          ToastType.error,
        );
    } finally {
      setLoading(false);
    }
  }, [online, axios]);

  useEffect(() => {
    if (UserId !== 0 && online) fetchData();
  }, [UserId, online, fetchData]);

  return {
    records,
    loading,
    refetch: fetchData,
  };
};
