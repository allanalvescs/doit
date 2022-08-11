import { Center, theme } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

interface GoBackButtonProps {
  top: string;
  left: string;
}

const GoBackButton = ({ top, left }: GoBackButtonProps) => {
  const history = useHistory();
  return (
    <Center
      as="button"
      position="absolute"
      top={top}
      left={left}
      w={["60px", "84px"]}
      h="62px"
      bg="purple.500"
      fontSize="2xl"
      borderRadius="md"
      onClick={() => history.push("/")}
    >
      <FaArrowLeft color={theme.colors.white} />
    </Center>
  );
};

export default GoBackButton;
