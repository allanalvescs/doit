import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

import Input from "../../components/Form";

interface FormValue {
  email: string;
  password: string;
  name: string;
  confirm_password: string;
}

interface SingUpFormProps {
  handleSingUp(): void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<FormValue>;
  loading: boolean;
}

const SingUpForm = ({
  handleSingUp,
  errors,
  register,
  loading,
}: SingUpFormProps) => {
  return (
    <Grid
      onSubmit={handleSingUp}
      as="form"
      mt={["6", "6", "0", "0"]}
      w={["100%", "100%", "40%", "40%"]}
      padding="30px 15px"
      border="3px solid"
      borderColor="gray.100"
      bg="white"
      color="gray.900"
    >
      <Heading size="lg">Criar sua conta!</Heading>
      <VStack mt="6" spacing="5">
        <Box w="100%">
          <Input
            icon={FaUser}
            placeholder="Nome do usuário"
            type="text"
            error={errors.name}
            label="Nome"
            {...register("name")}
          />
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
        <Input
          icon={FaLock}
          placeholder="Confirme sua Senha"
          type="password"
          error={errors.confirm_password}
          label="Confirmação de Senha"
          {...register("confirm_password")}
        />
      </VStack>
      <Button
        mt="4"
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
        Finalizar Cadastro
      </Button>
    </Grid>
  );
};

export default SingUpForm;
