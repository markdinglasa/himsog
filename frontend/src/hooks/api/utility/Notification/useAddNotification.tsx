import { useCallback, useState } from "react";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { displayToast } from "../../../../utils";
import { NotificationTable, ToastType } from "../../../../types";
import { BASE_URL, Success } from "../../../../shared";

export const useAddNotification = () => {
  const axios = useAxiosPrivate();
  const [records, setRecords] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const add = useCallback(
    async (
      data: NotificationTable,
      isEmail: boolean = false,
      subject: string = "",
      html: any = null,
    ) => {
      if (!data) return;
      setLoading(true);
      try {
        if (isEmail) {
          data.Subject = subject;
          data.IsEmail = isEmail;
          data.HTML = html;
        }
        //console.log("Notification Data:", data);
        const response = await axios.post(
          `${BASE_URL}/utility/notification/add`,
          data,
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
    add,
  };
};
