import { useState, useCallback } from "react";
import { displayToast } from "../utils";
import { RouteChannel, ToastType } from "../types";
import { useNavigate } from "react-router-dom";
import { ContextType } from "../context";
import { BASE_URL, axiosPrivate } from "../shared";
import Cookies from "js-cookie";
import localforage from "localforage";

export const useSignOut = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const signOut = useCallback(async () => {
    setLoading(true);
    try {
      await axiosPrivate.get(`${BASE_URL}/auth/logout`);
      Cookies.remove("c_user");
      localforage.removeItem(ContextType.AUTH);
      localforage.removeItem(ContextType.PERSIST);
      navigate(RouteChannel.INDEX);
    } catch (error: any) {
      setRecords(false);
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    } finally {
      setLoading(false);
    }
  }, [axiosPrivate, navigate]);

  return {
    records,
    loading,
    reSignOut: signOut,
  };
};
