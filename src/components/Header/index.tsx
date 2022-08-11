import { useDisclosure } from "@chakra-ui/core";
import { Center, Flex, Heading, Image } from "@chakra-ui/react";
import { FaTh } from "react-icons/fa";
import { theme } from "../../style/theme";

import LogoSecondary from "../../assets/logo-secondary.svg";
import Menu from "./Menu";

const Header = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  return (
    <Flex
      borderBottom="1px"
      borderBottomColor="#f5f5f5"
      paddingX="8"
      paddingY="2"
    >
      <Flex align="center">
        <Image src={LogoSecondary} />
        <Heading ml="4" size="lg">
          Dashboard
        </Heading>
      </Flex>
      <Center ml="auto" as="button" fontSize="2rem" onClick={onToggle}>
        <FaTh color={theme.colors.gray[300]} />
      </Center>
      <Menu isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Header;
