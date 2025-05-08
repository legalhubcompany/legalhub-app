import * as SecureStore from "expo-secure-store";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

type User = {
  token: string;
} | null;

type AuthContextType = {
  user: User;
  isLoading: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync("token");
      if (token) setUser({ token });
      setIsLoading(false);
    };

    loadToken();
  }, []);

  const login = async (token: string) => {
    await SecureStore.setItemAsync("token", token);
    setUser({ token });
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
