import { ChakraProvider, theme } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { TasksProvider } from "./TasksContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AuthProvider>
      <TasksProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </TasksProvider>
    </AuthProvider>
  );
};
