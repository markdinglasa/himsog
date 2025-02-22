import { useCallback, useEffect, useState } from "react";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { displayToast } from "../../../../utils";
import { ToastType, UserInitial, UserTable } from "../../../../types";
import { BASE_URL } from "../../../../shared";

export const useGetUser = (Id: number = 0) => {
  const axios = useAxiosPrivate();
  const [records, setRecords] = useState<UserTable>(UserInitial);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/setup/user/get/${Id}`);
      setRecords(response.data.data);
    } catch (error: any) {
      setRecords(UserInitial);
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    } finally {
      setLoading(false);
    }
  }, [Id, axios]);

  useEffect(() => {
    if (Id !== 0) {
      fetchData();
    }
  }, [Id, fetchData]);

  return {
    records,
    loading,
    refetch: fetchData,
  };
};
