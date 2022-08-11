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
} from "@chakra-ui/react";
import { FaExclamation } from "react-icons/fa";

interface ModalSuccessProps {
  isOpen: boolean;
  onClose(): void;
  buttonMessage: string;
  message: string;
  secondaryText: string;
  onClick(): void;
}

const ModalSuccess = ({
  isOpen,
  onClose,
  buttonMessage,
  message,
  secondaryText,
  onClick,
}: ModalSuccessProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex">
          <Center bg="purple.800" w="30px" borderRadius="5px" mr="4">
            <FaExclamation color="white" size="15" />
          </Center>
          Yeess...
        </ModalHeader>
        <ModalCloseButton
          color="white"
          bg="red.500"
          _hover={{ bg: "red.700" }}
        />
        <ModalBody textAlign="center">
          <Text>{message}</Text>
        </ModalBody>

        <ModalFooter flexDirection="column">
          <Button
            bg="purple.600"
            color="white"
            w="100%"
            h="60px"
            onClick={onClick}
            _hover={{ bg: "purple.800" }}
          >
            {buttonMessage}
          </Button>
          <Text textAlign="center">{secondaryText}</Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalSuccess;
