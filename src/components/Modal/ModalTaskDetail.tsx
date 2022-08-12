import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Center,
  HStack,
  Heading,
  Flex,
  Box,
  Progress,
} from "@chakra-ui/react";
import { FaCheck, FaCube, FaTimes, FaTrash } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import { useTasks } from "../../contexts/TasksContext";

interface Tasks {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface ModalTaskDetailProps {
  isOpen: boolean;
  onClose(): void;
  task: Tasks;
}

const ModalTaskDetail = ({ isOpen, onClose, task }: ModalTaskDetailProps) => {
  const { user, accessToken } = useAuth();
  const { deleteTask, updateTask } = useTasks();

  const handleCompleted = () => {
    updateTask(task.id, user.id, accessToken);
    onClose();
  };

  const handleDelete = () => {
    deleteTask(task.id, accessToken);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex" justifyContent="space-between">
          <Flex>
            <Center bg="purple.800" w="30px" borderRadius="5px" mr="4">
              <FaCube color="white" size="15" />
            </Center>
            <Text>Visualizar</Text>
          </Flex>

          <HStack spacing="2">
            <Center
              as="button"
              w="30px"
              h="30px"
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="5px"
              bg="white"
              onClick={handleDelete}
            >
              <FaTrash color="gray.200" />
            </Center>
            <Center
              onClick={handleCompleted}
              as="button"
              w="30px"
              h="30px"
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="5px"
              bg="white"
            >
              <FaCheck color="gray.200" />
            </Center>

            <Center
              as="button"
              w="30px"
              h="30px"
              borderWidth="1px"
              borderRadius="5px"
              onClick={onClose}
              color="white"
              bg="red.500"
              _hover={{ bg: "red.700" }}
            >
              <FaTimes color="white" />
            </Center>
          </HStack>
        </ModalHeader>

        <ModalBody>
          <Heading as="h2" fontSize="2xl">
            {task.title}
          </Heading>
          <Text color="gray.400" mt="4">
            {task.description}
          </Text>
        </ModalBody>

        <Box padding="6">
          <Progress colorScheme="purple" value={task.completed ? 100 : 10} />
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default ModalTaskDetail;
