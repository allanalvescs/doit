import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { FaEnvelope, FaLock } from "react-icons/fa";

import Logoprimary from "../../assets/logo-primary.svg";
import Input from "../../components/Form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const singinSchema = yup.object().shape({
  email: yup.string().required("email obrigatório *"),
  password: yup.string().required("senha obrigatório *"),
});

interface FormValue {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver(singinSchema),
  });

  const [loading, setLoading] = useState(false);

  const { singIn } = useAuth();

  const handleSingIn = (data: FormValue) => {
    setLoading(true);
    singIn(data)
      .then((_) => setLoading(false))
      .catch((err) => setLoading(false));
  };

  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0px", "0px"]}
      alignItems="center"
      justifyContent="center"
      height={["auto", "auto", "100vh", "100vh"]}
      bgGradient={[
        "linear(to-b,purple.800 65%, white 35%)",
        "linear(to-b,purple.800 65%, white 35%)",
        "linear(to-r,purple.800 65%, white 35%)",
        "linear(to-r,purple.800 65%, white 35%)",
      ]}
      color="white"
    >
      <Flex
        w={["100%", "100%", "90%", "65%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
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
        <Grid
          onSubmit={handleSubmit(handleSingIn)}
          as="form"
          mt={["6", "6", "0", "0"]}
          w={["100%", "100%", "40%", "40%"]}
          padding="30px 15px"
          border="3px solid"
          borderColor="gray.100"
          bg="white"
          color="gray.900"
        >
          <Heading size="lg">Bem vindo de volta!</Heading>
          <VStack mt="6" spacing="5">
            <Box w="100%">
              <Input
                icon={FaEnvelope}
                placeholder="Digite seu email"
                type="email"
                label="Email"
                error={errors.email}
                {...register("email")}
              />
              {!errors.email && (
                <Text ml="1" mt="1" color="gray.300">
                  Exemplo: username@gmail.com
                </Text>
              )}
            </Box>
            <Input
              icon={FaLock}
              placeholder="Digite sua senha"
              type="password"
              error={errors.password}
              label="Senha"
              {...register("password")}
            />
          </VStack>
          <VStack mt="6" spacing="5">
            <Button
              isLoading={loading}
              type="submit"
              bg="purple.800"
              color="white"
              w="100%"
              h="60px"
              borderRadius="8px"
              _hover={{
                bgColor: "purple.900",
              }}
            >
              Entrar
            </Button>
            <Text color="gray.400">Ainda não possui uma conta?</Text>
            <Button
              bg="gray.100"
              w="100%"
              h="60px"
              borderRadius="8px"
              color="gray.400"
              _hover={{ bgColor: "gray.200" }}
            >
              Cadastrar
            </Button>
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Login;
