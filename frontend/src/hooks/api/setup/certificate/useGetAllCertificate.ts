import { Error } from "../../../../shared";
import {
  APIChannel,
  CertificateTables,
  QueryKey,
  ToastType,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useGetAllCertificate = (Id: string) => {
  const axios = useAxiosPrivate();
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.CERTIFICATE],
    queryFn: async () => {
      const response: CertificateTables = (
        await axios.get(
          `${APIChannel.CERTIFICATE_PARENT.replace(":Id", Id.toString())}`,
        )
      ).data?.data;
      //console.log("Response:", response);
      return response || [];
    },
    enabled: !!Id,
  });
  // console.log("DATA:", data);
  if (error) displayToast(Error.m00003, ToastType.error);
  return {
    data,
    isLoading,
    error,
  };
};
export default useGetAllCertificate;
