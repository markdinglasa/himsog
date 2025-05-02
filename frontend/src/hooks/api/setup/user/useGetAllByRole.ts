import { Error } from "../../../../shared";
import { APIChannel, QueryKey, ToastType, UserRole } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useGetAllUserByRole = (
  Role: UserRole = UserRole.NUTRITIONIST,
  Expertise: string = "",
  Filter: string,
  Page: number = 1,
) => {
  const axios = useAxiosPrivate();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.USER, Role, Filter, Page],
    queryFn: async () => {
      const response = await axios.get(
        `${APIChannel.USER_ROLE.replace(":role", Role).replace(":expertise", Expertise).replace(":filter", Filter).replace(":page", Page.toString())}`,
      );
      //console.log("Response:", response);
      return response?.data?.data || [];
    },
    enabled: !!Filter && !!Role,
  });
  if (error) displayToast(data?.data?.message || Error.m00003, ToastType.error);
  return {
    data,
    isLoading,
    error,
    refetch,
  };
};
export default useGetAllUserByRole;
