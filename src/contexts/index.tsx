import { ChakraProvider, theme } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </AuthProvider>
  );
};
