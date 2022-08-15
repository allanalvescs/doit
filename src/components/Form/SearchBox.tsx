import { useDisclosure } from "@chakra-ui/core";
import { Button, Center, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import Input from ".";
import { useAuth } from "../../contexts/AuthContext";
import { useTasks } from "../../contexts/TasksContext";

import ModalCreateTask from "../Modal/ModalCreateTask";

interface SeachData {
  title: string;
}

const SearchBox = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { searchTasks, tasks, setTasks } = useTasks();
  const { accessToken } = useAuth();

  const { register, handleSubmit } = useForm<SeachData>();

  const handleSearch = async ({ title }: SeachData) => {
    searchTasks(title, accessToken);
  };

  return (
    <>
      <ModalCreateTask isOpen={isOpen} onClose={onClose} />
      <Flex
        mt="6"
        w="100%"
        paddingX={["4", "8"]}
        paddingY="2"
        paddingBottom="6"
        borderBottomWidth="1px"
        borderColor="gray.50"
        flexDir={["column", "column", "row", "row"]}
      >
        <Flex as="form" onSubmit={handleSubmit(handleSearch)}>
          <Input
            placeholder="Pesquisar por tarefa"
            w={["100%", "100%", "35vw"]}
            {...register("title")}
          />
          <Center
            as="button"
            type="submit"
            ml="2"
            w="64px"
            h="60px"
            fontSize="2xl"
            borderRadius="8px"
            bg="purple.600"
          >
            <FaSearch color="white" />
          </Center>
        </Flex>
        <Button
          bg="purple.500"
          color="white"
          padding="16px"
          h="60px"
          fontWeight="semibold"
          ml="4"
          mt={["4", "4", "0"]}
          onClick={onOpen}
          borderRadius="8px"
          _hover={{ bg: "purple.600" }}
        >
          Adicionar nova tarefa
        </Button>
      </Flex>
    </>
  );
};

export default SearchBox;
