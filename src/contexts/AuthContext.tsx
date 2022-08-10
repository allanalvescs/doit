import {
  createContext,
  useContext,
  useCallback,
  useState,
  ReactNode,
} from "react";

import api from "../server/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  email: string;
  id: string;
  name: string;
}

interface AuthState {
  accessToken: string;
  user: User;
}

interface SingInCredentials {
  email: string;
  password: string;
}

interface AuthContextDatas {
  user: User;
  accesToken: string;
  singIn(credentials: SingInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextDatas>({} as AuthContextDatas);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@Doit:accessToken");
    const user = localStorage.getItem("@Doit:user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const singIn = useCallback(async ({ email, password }: SingInCredentials) => {
    const response = await api.post("/login", { email, password });

    const { accessToken, user } = response.data;

    localStorage.setItem("@Doit:accessToken", accessToken);
    localStorage.setItem("@Doit:user", JSON.stringify(user));

    setData({ accessToken, user });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        accesToken: data.accessToken,
        user: data.user,
        singIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
