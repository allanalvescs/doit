import { Box, Grid } from "@chakra-ui/react";
import Card from "../../components/Card";
import SearchBox from "../../components/Form/SearchBox";
import Header from "../../components/Header";
import CardSkeleton from "../../components/Skeleton/CardSkeleton";

interface Task {
  id: string;
  title: string;
  userId: string;
  description: string;
  completed: boolean;
}

interface TaskListProps {
  loading: boolean;
  tasks: Task[];
  handleOpenCardTask(task: Task): void;
}

const TaskList = ({ loading, tasks, handleOpenCardTask }: TaskListProps) => {
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
        {loading ? (
          <CardSkeleton repeatCount={6} />
        ) : (
          tasks.map((task) => (
            <Card tasks={task} key={task.id} onClick={handleOpenCardTask} />
          ))
        )}
      </Grid>
    </Box>
  );
};

export default TaskList;
