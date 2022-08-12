import { useDisclosure } from "@chakra-ui/core";
import { Box, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Card from "../../components/Card";
import SearchBox from "../../components/Form/SearchBox";
import Header from "../../components/Header";
import ModalTaskDetail from "../../components/Modal/ModalTaskDetail";
import { useAuth } from "../../contexts/AuthContext";

import { useTasks } from "../../contexts/TasksContext";

interface Tasks {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [selectTask, setSelectTask] = useState<Tasks>({} as Tasks);

  const { user, accessToken } = useAuth();
  const { tasks, loadTasks } = useTasks();

  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    loadTasks(user.id, accessToken).then((_) => setLoading(false));
  }, []);

  useEffect(() => {
    loadTasks(user.id, accessToken).then((_) => setLoading(false));
  }, [tasks]);

  const handleOpenCardTask = (task: Tasks) => {
    setSelectTask(task);
    onOpen();
  };

  return (
    <>
      <ModalTaskDetail isOpen={isOpen} onClose={onClose} task={selectTask} />
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
            <Card tasks={task} key={task.id} onClick={handleOpenCardTask} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
