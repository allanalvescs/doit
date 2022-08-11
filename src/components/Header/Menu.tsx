import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
  theme,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";

import { FiLogOut } from "react-icons/fi";

interface MenuProps {
  isOpen: boolean;
  onClose(): void;
}

const Menu = ({ isOpen, onClose }: MenuProps) => {
  const { user, singOut } = useAuth();

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay mt="10vh" />
      <DrawerContent ml="auto" mt="80px" w={["450px", "350px"]}>
        <DrawerHeader
          borderBottomWidth="1px"
          borderColor="gray.50"
          color="gray.400"
        >
          {user.name}
        </DrawerHeader>
        <DrawerBody>
          <Flex
            _hover={{ cursor: "pointer" }}
            align="center"
            onClick={singOut}
            bg="gray.100"
            borderRadius="6px"
          >
            <Center
              w="60px"
              h="60px"
              bg="red.600"
              fontSize="2xl"
              borderRadius="md"
            >
              <FiLogOut color={theme.colors.white} />
            </Center>
            <Box ml="4" paddingY="18px">
              <Heading as="h2" fontSize="lg">
                Sair da minha conta
              </Heading>
              <Text color="gray.500" fontSize="small">
                Sair da minha conta agora
              </Text>
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Menu;
