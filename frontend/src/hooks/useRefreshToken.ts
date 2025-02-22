import axios from "axios";
import { BASE_URL } from "../shared";
import { useAuth } from "./useAuth";
import { useSignOut } from "./useSignOut";

export const useRefreshToken = () => {
  const { setAuth, auth }: any = useAuth();
  const { reSignOut } = useSignOut();
  const refresh = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/auth/refresh`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${auth?.accessToken}` },
      });

      setAuth((prev: any) => {
        return {
          ...prev,
          accessToken: response.data.accessToken,
        };
      });

      return response.data.accessToken;
    } catch (error: any) {
      console.log("=======================================");
      console.log(
        "[Hooks-useRefreshToken] Error: ",
        error.response?.data?.message || error.message,
      );
      console.log("=======================================");
      await reSignOut();
    }
  };

  return refresh;
};
