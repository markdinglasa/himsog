import { useCallback, useEffect, useState } from "react";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { displayToast } from "../../../../utils";
import {
  NotificationInitial,
  NotificationTable,
  ToastType,
} from "../../../../types";
import { BASE_URL } from "../../../../shared";
import { useNetworkState } from "react-use";

export const useGetNotification = (Id: number = 0) => {
  const axios = useAxiosPrivate();
  const [records, setRecords] =
    useState<NotificationTable>(NotificationInitial);
  const [loading, setLoading] = useState<boolean>(true);
  const { online } = useNetworkState();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      if (online) {
        const response = await axios.get(
          `${BASE_URL}/utility/audit-trail/get/${Id}`,
        );
        setRecords(response.data.data);
      }
    } catch (error: any) {
      setRecords(NotificationInitial);
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    } finally {
      setLoading(false);
    }
  }, [Id, online, axios]);

  useEffect(() => {
    if (Id !== 0 && online) fetchData();
  }, [Id, online, fetchData]);

  return {
    records,
    loading,
    refetch: fetchData,
  };
};
