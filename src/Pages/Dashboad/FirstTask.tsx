import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaClipboard } from "react-icons/fa";
import Header from "../../components/Header";
import ModalCreateTask from "../../components/Modal/ModalCreateTask";

const FirstTask = () => {
  const {
    isOpen: isCreateTaskOpen,
    onClose: onCreateTaskClose,
    onOpen: onCreateTaskOpen,
  } = useDisclosure();
  return (
    <>
      <ModalCreateTask isOpen={isCreateTaskOpen} onClose={onCreateTaskClose} />
      <Header />
      <Box
        mt="4"
        w="90vw"
        paddingY="16"
        ml="5vw"
        justifyContent="center"
        textAlign="center"
        borderWidth="2px"
        borderColor="gray.200"
        borderStyle="dashed"
      >
        <Center fontSize="5xl">
          <FaClipboard color="#bdbdbd" />
        </Center>
        <Heading as="h1" fontSize="2xl" mt="4">
          Vamos criar sua primeira tarefa
        </Heading>
        <Text mt="4" color="gray.400">
          Insira sua meta e mostra a você mesmo <br />
          sua capacidade em cumprir{" "}
          <Text as="span" color="gray.900" fontWeight="semibold">
            {" "}
            suas atividades{" "}
          </Text>
          .
        </Text>
        <Button
          padding="6"
          mt="6"
          bg="purple.600"
          color="white"
          _hover={{ bg: "purple.900" }}
          onClick={onCreateTaskOpen}
        >
          Crie sua primeira tarefa
        </Button>
      </Box>
    </>
  );
};

export default FirstTask;
