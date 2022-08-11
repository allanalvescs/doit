import { Box, Button } from "@chakra-ui/react";
import Header from "../../components/Header";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const { user, singOut } = useAuth();
  return (
    <Box>
      <Header />
    </Box>
  );
};

export default Dashboard;
