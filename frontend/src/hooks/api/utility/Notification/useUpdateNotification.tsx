import { useCallback, useState } from "react";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { displayToast } from "../../../../utils";
import { NotificationTable, RouteChannel, ToastType } from "../../../../types";
import { BASE_URL, Success } from "../../../../shared";

export const useUpdateNotification = () => {
  const axios = useAxiosPrivate();
  const [records, setRecords] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const update = useCallback(
    async (Id: string, data: NotificationTable) => {
      if (!data || !Id) return;
      setLoading(true);
      try {
        const response = await axios.patch(
          `${BASE_URL}/utility/notification/update/${Id}`,
          data,
        );
        setRecords(response.data.data || true);
        displayToast(Success.m00004, ToastType.success);
        navigate(RouteChannel.NOTIFICATIONS);
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
    update,
  };
};
