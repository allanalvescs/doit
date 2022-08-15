import { useDisclosure } from "@chakra-ui/core";

import { useEffect, useState } from "react";
import ModalTaskDetail from "../../components/Modal/ModalTaskDetail";
import { useAuth } from "../../contexts/AuthContext";

import { useTasks } from "../../contexts/TasksContext";
import FirstTask from "./FirstTask";
import NotFound from "./NotFound";
import TaskList from "./TaskList";

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
  const { tasks, loadTasks, notFound, taskNotFound } = useTasks();

  const {
    isOpen: isTaskDetailOpen,
    onClose: onTaskDetailClose,
    onOpen: onTaskDetailOpen,
  } = useDisclosure();

  useEffect(() => {
    loadTasks(user.id, accessToken).then((_) => setLoading(false));
  }, []);

  const handleOpenCardTask = (task: Tasks) => {
    setSelectTask(task);
    onTaskDetailOpen();
  };

  if (notFound) {
    return (
      <NotFound
        selectTask={selectTask}
        taskNotFound={taskNotFound}
        onTaskDetailClose={onTaskDetailClose}
        isTaskDetailOpen={isTaskDetailOpen}
      />
    );
  }

  return (
    <>
      <ModalTaskDetail
        isOpen={isTaskDetailOpen}
        onClose={onTaskDetailClose}
        task={selectTask}
      />
      {!loading && !tasks.length ? (
        <FirstTask />
      ) : (
        <TaskList
          loading={loading}
          tasks={tasks}
          handleOpenCardTask={handleOpenCardTask}
        />
      )}
    </>
  );
};

export default Dashboard;
