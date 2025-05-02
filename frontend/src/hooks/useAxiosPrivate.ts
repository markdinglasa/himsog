import { axiosPrivate } from "../shared";
import { useEffect } from "react";
import { useRefreshToken, useAuth, useSignOut } from ".";
import { Roles } from "../types";

export interface AuthType {
  user?: any;
  roles?: Roles;
  currentDate?: string;
  branch?: string;
  accessToken?: string;
  refreshToken?: string;
  accessRights?: number[];
}

export const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth, setAuth } = useAuth();
  const { reSignOut } = useSignOut();

  useEffect(() => {
    let isRefreshing = false;
    let failedQueue: any[] = [];

    const processQueue = (error: any, token: string | null = null) => {
      failedQueue.forEach((prom: any) => {
        if (error) {
          prom.reject(error);
        } else {
          prom.resolve(token);
        }
      });
      failedQueue = [];
    };

    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config: any) => {
        if (!config.headers["Authorization"] && auth?.accessToken) {
          config.headers["Authorization"] = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (error: any) => Promise.reject(error),
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response: any) => response,
      async (error: any) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          if (isRefreshing) {
            return new Promise((resolve, reject) => {
              failedQueue.push({ resolve, reject });
            })
              .then((token) => {
                prevRequest.headers["Authorization"] = `Bearer ${token}`;
                return axiosPrivate(prevRequest);
              })
              .catch((err) => Promise.reject(err));
          }

          prevRequest.sent = true;
          isRefreshing = true;

          try {
            const newAccessToken = await refresh();
            setAuth({ accessToken: newAccessToken });
            processQueue(null, newAccessToken);
            isRefreshing = false;

            prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
            return axiosPrivate(prevRequest);
          } catch (refreshError: any) {
            console.log("=======================================");
            console.log(
              "[Hooks-useAxiosPrivate] Error: ",
              refreshError.response?.data?.message || error.message,
            );
            console.log("=======================================");
            processQueue(refreshError, null);
            reSignOut(); // Sign out if refresh fails
            isRefreshing = false;
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh, reSignOut, setAuth]);

  return axiosPrivate;
};
