import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import ImageNotFound from "../../assets/NotFound.svg";

const PageNotFound = () => {
  const history = useHistory();
  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0px", "0px"]}
      alignItems="center"
      justifyContent="space-evenly"
      height={["auto", "auto", "100vh", "100vh"]}
      flexDir={["column-reverse", "column-reverse", "row", "row"]}
    >
      <Box>
        <Heading>Ooops!</Heading>
        <Text mt="4">
          Não encontramos a pagina que você procurou <br />
          <b>vamos tentar novamente</b>
        </Text>
        <Button
          mt="4"
          bg="red.500"
          color="white"
          h="60px"
          w="100%"
          _hover={{ bg: "red.700" }}
          onClick={() => history.push("/")}
        >
          Ir para minhas tarefas
        </Button>
      </Box>
      <Image src={ImageNotFound} />
    </Flex>
  );
};

export default PageNotFound;
