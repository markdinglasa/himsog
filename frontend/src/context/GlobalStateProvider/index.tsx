import { useState, useEffect, ReactNode } from "react";
import { GlobalStateContext, GlobalStateType } from "../../types";

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [record, setRecord] = useState<GlobalStateType["record"]>(() => {
    const storedAuth = localStorage.getItem("record");
    return storedAuth ? JSON.parse(storedAuth) : {};
  });

  useEffect(() => {
    localStorage.setItem("record", JSON.stringify(record));
  }, [record]);

  return (
    <GlobalStateContext.Provider value={{ record, setRecord }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
