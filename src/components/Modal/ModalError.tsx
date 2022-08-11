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
  theme,
  Center,
} from "@chakra-ui/react";
import { FaExclamation } from "react-icons/fa";

interface ModalErrorProps {
  isOpen: boolean;
  onClose(): void;
  message: string;
}

const ModalError = ({ isOpen, onClose, message }: ModalErrorProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent color="gray.800">
        <ModalHeader display="flex">
          <Center bg="red.500" w="30px" borderRadius="5px" mr="4">
            <FaExclamation color="white" size="15" />
          </Center>
          Oops!
        </ModalHeader>
        <ModalCloseButton
          color="white"
          bg="red.500"
          _hover={{ bg: "red.700" }}
        />
        <ModalBody>
          <Text w="100%" textAlign="center">
            Ocorreu algum erro !
          </Text>
          <Text
            mt="4"
            w="100%"
            bg="gray.100"
            h="60px"
            borderRadius="6px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
          >
            {message}
          </Text>
        </ModalBody>

        <ModalFooter display="column">
          <Button
            colorScheme="blue"
            w="100%"
            h="60px"
            bg="red.500"
            color="white"
            _hover={{ bg: "red.600" }}
            onClick={onClose}
          >
            Tentar Novamente
          </Button>

          <Text mt="1" textAlign="center">
            Você já pode tentar novamente, <b>clicando</b> no botão acima ou
            aguarde alguns minutos...
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalError;
