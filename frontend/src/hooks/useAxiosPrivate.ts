import { axiosPrivate } from "../shared";
import { useEffect } from "react";
import { useSignOut } from "."; // Only need sign-out for errors

export const useAxiosPrivate = () => {
  const { reSignOut } = useSignOut();

  useEffect(() => {
    // Request interceptor - No token handling needed
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        // Cookies are automatically attached via withCredentials
        return config;
      },
      (error) => Promise.reject(error),
    );

    // Response interceptor - Handle 403/401 errors
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error?.response?.status === 403 ||
          error?.response?.status === 401
        ) {
          // Token expired or invalid - force re-login
          console.error("Session expired - signing out");
          reSignOut();
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [reSignOut]);

  return axiosPrivate;
};
