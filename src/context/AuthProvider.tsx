import { useState, type ReactNode } from "react";
import { AuthContext, type User } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [auth, setAuth] = useState<{ isAuthenticated: boolean; user: User | null }>({
    isAuthenticated: false,
    user: null,
  });

  const login = (email: string, password: string) => {
    console.log(email, password); // Use parameters to avoid warnings
    setAuth({
      isAuthenticated: true,
      user: {
        id: "1",
        email,
        name: "Demo User",
        company: "Acme Inc",
      },
    });
  };

  const logout = () => {
    setAuth({ isAuthenticated: false, user: null });
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
