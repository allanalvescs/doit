import { Box, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Card from "../../components/Card";
import SearchBox from "../../components/Form/SearchBox";
import Header from "../../components/Header";
import { useAuth } from "../../contexts/AuthContext";

import { useTasks } from "../../contexts/TasksContext";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const { user, accessToken } = useAuth();
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks(user.id, accessToken).then((_) => setLoading(false));
  }, []);

  useEffect(() => {
    loadTasks(user.id, accessToken).then((_) => setLoading(false));
  }, [tasks]);
  return (
    <Box>
      <Header />
      <SearchBox />
      <Grid
        w="100%"
        templateColumns="repeat(auto-fill,minmax(420px,1fr))"
        gap={10}
        paddingX="8"
        mt="8"
      >
        {tasks.map((task) => (
          <Card tasks={task} key={task.id} />
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
