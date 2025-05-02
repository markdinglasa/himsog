import { Error } from "../../../../shared";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useGetAllPayType = (UserId: number = 0) => {
  const axios = useAxiosPrivate();

  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.PAY_TYPE],
    queryFn: async () => {
      const response = await axios.get(
        `${APIChannel.PAY_TYPE_PARENT.replace(":Id", UserId.toString())}`,
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
export default useGetAllPayType;
