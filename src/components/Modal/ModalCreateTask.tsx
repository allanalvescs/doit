import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  Text,
  Center,
  VStack,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { FaClipboard } from "react-icons/fa";
import Input from "../Form";
import TextArea from "../Form/TextArea";
import { useAuth } from "../../contexts/AuthContext";
import { useTasks } from "../../contexts/TasksContext";

interface ModalCreateProps {
  isOpen: boolean;
  onClose(): void;
}

interface FormValue {
  title: string;
  description: string;
}

const createTaskSchema = yup.object().shape({
  title: yup.string().required("Campo obrigatório *"),
  description: yup
    .string()
    .required("Campo obrigatório *")
    .max(100, "maximo de até 100 carácteres"),
});

const ModalCreateTask = ({ isOpen, onClose }: ModalCreateProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver(createTaskSchema),
  });

  const { user, accessToken } = useAuth();

  const { createdTasks, loadTasks } = useTasks();

  const handleCreateTask = (data: FormValue) => {
    const newData = { ...data, userId: user.id, completed: false };

    createdTasks(newData, accessToken).then((_) => onClose());

    loadTasks(user.id, accessToken);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handleSubmit(handleCreateTask)}>
        <ModalHeader display="flex">
          <Center bg="purple.800" w="30px" borderRadius="5px" mr="4">
            <FaClipboard color="white" size="15" />
          </Center>
          <Text color="gray.600">Crie uma Tarefa</Text>
        </ModalHeader>
        <ModalCloseButton
          color="white"
          bg="red.500"
          _hover={{ bg: "red.700" }}
        />
        <ModalBody textAlign="center">
          <VStack spacing="5" mt="4">
            <Input
              placeholder="Digite um titulo"
              label="Titulo"
              error={errors.title}
              {...register("title")}
            />

            <TextArea
              placeholder="Digite uma Descrição"
              label="Descrição"
              error={errors.description}
              {...register("description")}
            />
          </VStack>
        </ModalBody>

        <ModalFooter flexDirection="column">
          <Button
            type="submit"
            bg="purple.600"
            color="white"
            w="100%"
            h="60px"
            _hover={{ bg: "purple.800" }}
          >
            Adicionar tarefa
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCreateTask;
