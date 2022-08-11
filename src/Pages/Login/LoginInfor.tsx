import { Grid, Image, Heading, Text } from "@chakra-ui/react";
import Logoprimary from "../../assets/logo-primary.svg";

const LoginInfor = () => {
  return (
    <Grid w={["100%", "100%", "50%", "50%"]} paddingRight="100px">
      <Image
        src={Logoprimary}
        alt="Logo DOIT"
        boxSize={["120px", "120px", "150px", "150px"]}
      />
      <Heading mb="2.5" as="h1">
        O jeito facil, e grátis
      </Heading>
      <Text w="350px">
        Flexivel e atrativo de gerenciar
        <b> seus projetos em uma unica plataforma</b>
      </Text>
    </Grid>
  );
};

export default LoginInfor;
