import { Error } from "../../../../shared";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useGetAllPayment = (UserId: number = 0) => {
  const axios = useAxiosPrivate();

  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.PAYMENT],
    queryFn: async () => {
      const response = await axios.get(
        `${APIChannel.PAYMENT_PARENT.replace(":Id", UserId.toString())}`,
      );
      //console.log("Response:", response);
      return response?.data?.data || [];
    },
    enabled: !!UserId,
  });
  // console.log("DATA:", data);
  if (error) displayToast(data?.message || Error.m00003, ToastType.error);
  return {
    data,
    isLoading,
    error,
  };
};
export default useGetAllPayment;
