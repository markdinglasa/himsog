import { createContext, useState, useEffect, ReactNode } from "react";
import { Roles } from "../../types";
import { jwtDecode } from "jwt-decode";

export enum ContextType {
  AUTH = "CT26071B0B",
  PERSIST = "CT37171D100C010D",
}

interface AuthContextType {
  auth: {
    user?: any;
    roles?: Roles;
    accessToken?: string;
    refreshToken?: string;
  };
  setAuth: (auth: AuthContextType["auth"]) => void;
  persist: boolean;
  setPersist: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const isTokenExpired = (token: string): boolean => {
  const decoded: { exp: number } = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  return decoded.exp < currentTime;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = useState<AuthContextType["auth"]>(() => {
    const storedAuth = localStorage.getItem(ContextType.AUTH);
    return storedAuth ? JSON.parse(storedAuth) : {};
  });
  const [persist, setPersist] = useState<boolean>(() => {
    const storedPersist = localStorage.getItem(ContextType.PERSIST);
    return storedPersist ? JSON.parse(storedPersist) : false;
  });

  useEffect(() => {
    localStorage.setItem(ContextType.AUTH, JSON.stringify(auth));
  }, [auth]);

  useEffect(() => {
    localStorage.setItem(ContextType.PERSIST, JSON.stringify(persist));
  }, [persist]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
