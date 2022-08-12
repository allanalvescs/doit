import { useDisclosure } from "@chakra-ui/core";
import { Button, Center, Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Input from ".";
import ModalCreateTask from "../Modal/ModalCreateTask";

const SearchBox = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <ModalCreateTask isOpen={isOpen} onClose={onClose} />
      <Flex mt="6" w="100%" paddingX={["4", "8"]} paddingY="2">
        <Flex as="form">
          <Input name="title" placeholder="Pesquisar por tarefa" w="35vw" />
          <Center
            as="button"
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
          w="252px"
          fontWeight="semibold"
          ml="4"
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
