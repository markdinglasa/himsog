import { SFC } from "../../../types";
import { Outlet } from "react-router-dom";
import {
  useAuth,
  useNetworkStatus,
  useSignOut,
  useToggle,
} from "../../../hooks";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isTokenExpired } from "../../../context";
import { useEffect, useState } from "react";
import { SessionExpiredModal } from "../../../modals";
import * as S from "../../../styles";
import { ipx } from "../../Inputs";
import { EXPIRY_DATE } from "../../../constants";

export const RootLayout: SFC = () => {
  const { reSignOut } = useSignOut();

  useNetworkStatus();

  const [modalIsOpen, toggleModal] = useToggle(false);
  const [hasModalOpened, setHasModalOpened] = useState(false);
  const { auth } = useAuth();
  const xp = ipx(new Date(EXPIRY_DATE ?? ""));
  const confirm = () => {
    toggleModal();
    reSignOut();
  };

  // LOGOUT USER WITH EXPIRED SESSIONS
  useEffect(() => {
    const handleTokenExpiration = () => {
      if (auth?.user && auth.accessToken && isTokenExpired(auth.accessToken)) {
        localStorage.removeItem("auth");
        if (!hasModalOpened) toggleModal();
        setHasModalOpened(true);
      }
    };
    handleTokenExpiration();
    const intervalId = setInterval(
      () => {
        handleTokenExpiration();
      },
      5 * 6 * 1000,
    );
    return () => clearInterval(intervalId);
  }, [auth.accessToken, auth?.user, hasModalOpened, toggleModal]);

  const renderMods = () => {
    if (xp.spx) return null;
    return null;
  };

  return (
    <>
      <S.Layout className="">
        <Outlet />
      </S.Layout>
      <ToastContainer
        autoClose={3000}
        closeOnClick
        draggable
        hideProgressBar
        newestOnTop
        pauseOnFocusLoss
        pauseOnHover
        position="bottom-left"
        rtl={false}
        transition={Bounce}
      />
      {renderMods()}
      <SessionExpiredModal
        ClassName="md:w-2/6 w-11/12"
        close={() => {}}
        title="Session Expired"
        confirm={confirm}
        open={modalIsOpen}
      />
    </>
  );
};
