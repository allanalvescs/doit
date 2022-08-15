import { Box, Center, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import SearchBox from "../../components/Form/SearchBox";
import Header from "../../components/Header";
import ModalTaskDetail from "../../components/Modal/ModalTaskDetail";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface NotFoundProps {
  isTaskDetailOpen: boolean;
  onTaskDetailClose(): void;
  selectTask: Task;
  taskNotFound: string;
}

const NotFound = ({
  isTaskDetailOpen,
  onTaskDetailClose,
  selectTask,
  taskNotFound,
}: NotFoundProps) => {
  return (
    <>
      <ModalTaskDetail
        isOpen={isTaskDetailOpen}
        onClose={onTaskDetailClose}
        task={selectTask}
      />
      <Box>
        <Header />
        <SearchBox />
        <Center mt="4" textAlign="center" display="flex" flexDir="column">
          <Heading size="lg">Não encontramos o resultado para:</Heading>
          <Text fontSize="xl" color="gray.300" fontWeight="bold">
            {taskNotFound}
          </Text>
          <Box
            mt="6"
            w={["80%", "40%"]}
            padding="6"
            boxShadow="base"
            bg="white"
          >
            <Stack>
              <Skeleton
                startColor="gray.100"
                endColor="gray.200"
                height="20px"
                borderRadius="20px"
                w="80%"
              />
              <Skeleton
                startColor="gray.100"
                endColor="gray.200"
                height="20px"
                borderRadius="20px"
                w="60%"
              />
            </Stack>

            <Stack mt="6">
              <Skeleton
                startColor="gray.100"
                endColor="gray.200"
                height="15px"
                borderRadius="20px"
              />
              <Skeleton
                startColor="gray.100"
                endColor="gray.200"
                height="15px"
                borderRadius="20px"
              />
            </Stack>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default NotFound;
