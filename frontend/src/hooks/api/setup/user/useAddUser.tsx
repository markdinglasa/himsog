import { useCallback, useState } from "react";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { displayToast } from "../../../../utils";
import { RouteChannel, ToastType, UserTable } from "../../../../types";
import { BASE_URL, Success } from "../../../../shared";

export const useAddUser = () => {
  const axios = useAxiosPrivate();
  const [records, setRecords] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const add = useCallback(
    async (data: UserTable) => {
      if (!data) return;
      setLoading(true);
      try {
        const response = await axios.post(`${BASE_URL}/setup/user/add`, data);
        setRecords(response.data.data || true);
        displayToast(Success.m00002, ToastType.success);
        navigate(RouteChannel.USER);
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
