import { useState, useCallback } from "react";
import { BASE_URL } from "../shared";
import { displayToast } from "../utils";
import { RouteChannel, ToastType } from "../types";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";
import { ContextType } from "../context";
import { axiosPrivate } from "../shared";

export const useSignOut = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const [records, setRecords] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const signOut = useCallback(async () => {
    setLoading(true);
    try {
      //const response = await axiosPrivate.get(`${BASE_URL}/auth/logout/`);
      setAuth({
        user: null,
        roles: undefined,
        accessToken: undefined,
        refreshToken: undefined,
      });
      localStorage.removeItem(ContextType.AUTH);
      localStorage.removeItem(ContextType.PERSIST);
      navigate(RouteChannel.INDEX);
      //setRecords(response.data.data);
    } catch (error: any) {
      setRecords(false);
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    } finally {
      setLoading(false);
    }
  }, [axiosPrivate, setAuth, navigate]);

  return {
    records,
    loading,
    reSignOut: signOut,
  };
};
