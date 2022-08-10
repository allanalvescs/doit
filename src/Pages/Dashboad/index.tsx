import { Box, Button, Heading } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const { user, singOut } = useAuth();
  return (
    <Box>
      <Heading as="h1">Welcome {user.name}</Heading>
      <Button onClick={singOut}>Deslogar</Button>
    </Box>
  );
};

export default Dashboard;
