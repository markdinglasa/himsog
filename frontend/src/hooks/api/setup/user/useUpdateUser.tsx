import { useCallback, useState } from "react";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { displayToast } from "../../../../utils";
import { RouteChannel, ToastType, UserTable } from "../../../../types";
import { BASE_URL, Success } from "../../../../shared";

export const useUpdateUser = () => {
  const axios = useAxiosPrivate();
  const [records, setRecords] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const update = useCallback(
    async (Id: string, data: UserTable) => {
      if (!data || !Id) return;
      setLoading(true);
      try {
        const response = await axios.patch(
          `${BASE_URL}/setup/user/update/${Id}`,
          data,
        );
        setRecords(response.data.data || true);
        displayToast(Success.m00004, ToastType.success);
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
    update,
  };
};
