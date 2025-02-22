import { useEffect, useRef } from "react";
import { useNetworkState } from "react-use";
import { mdiWifi, mdiWifiOff } from "@mdi/js";
import { displayToast } from "../utils";
import { ToastType } from "../types";

export const useNetworkStatus = () => {
  const { online = false } = useNetworkState();
  const previousState = useRef<boolean | null>(null);

  useEffect(() => {
    if (previousState.current === null) {
      previousState.current = online;
      return;
    }

    if (online !== previousState.current) {
      if (online) {
        displayToast(
          "Your internet connection was restored.",
          ToastType.success,
          mdiWifi,
        );
      } else {
        displayToast("You are currently offline.", ToastType.error, mdiWifiOff);
      }
    }

    previousState.current = online;
  }, [online]);
};
