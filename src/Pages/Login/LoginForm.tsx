import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import Input from "../../components/Form";

interface FormValue {
  email: string;
  password: string;
}

interface LoginFormProps {
  handleSingIn(): void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<FormValue>;
  loading: boolean;
}

const LoginForm = ({
  handleSingIn,
  errors,
  register,
  loading,
}: LoginFormProps) => {
  const history = useHistory();
  return (
    <Grid
      onSubmit={handleSingIn}
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
          onClick={() => history.push("/singup")}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};

export default LoginForm;
