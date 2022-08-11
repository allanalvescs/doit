import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  theme,
  VStack,
} from "@chakra-ui/react";
import { FaForward, FaCopy } from "react-icons/fa";
import Logoprimary from "../../assets/logo-primary.svg";

const SingUpInfor = () => {
  return (
    <Grid
      w={["100%", "100%", "50%", "50%"]}
      paddingLeft={["10px", "10px", "10px", "150px"]}
    >
      <Image
        src={Logoprimary}
        alt="Logo DOIT"
        boxSize={["120px", "120px", "150px", "150px"]}
        mb="62px"
      />
      <VStack spacing="14">
        <Flex w="100%">
          <Center borderRadius="5px" bg="white" w="50px" h="50px">
            <FaForward size={25} color={theme.colors.purple["800"]} />
          </Center>
          <Box ml="4">
            <Heading size="lg"> Agilidade</Heading>
            <Text>
              Agilize seus projetos com rapidez <br /> e muita performace
            </Text>
          </Box>
        </Flex>
        <Flex w="100%">
          <Center borderRadius="5px" bg="white" w="50px" h="50px">
            <FaCopy size={25} color={theme.colors.purple["800"]} />
          </Center>
          <Box ml="4">
            <Heading size="lg"> Simplicidade </Heading>
            <Text>
              Armazene seus projetos em uma <br />
              interface altamente usual
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Grid>
  );
};

export default SingUpInfor;
