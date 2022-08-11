import { useHistory } from "react-router-dom";

import { Flex, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

import SingUpInfor from "./SingUpInfo";
import SingUpForm from "./SingUpForm";
import GoBackButton from "./GoBackButton";

import api from "../../server/api";
import ModalSuccess from "../../components/Modal/ModalSuccess";
import ModalError from "../../components/Modal/ModalError";

const singUpSchema = yup.object().shape({
  name: yup.string().required("nome obrigatório *"),
  email: yup.string().required("email obrigatório *"),
  password: yup.string().required("senha obrigatório *"),
  confirm_password: yup
    .string()
    .required("confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

interface FormValue {
  email: string;
  password: string;
  name: string;
  confirm_password: string;
}

const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver(singUpSchema),
  });

  const [loading, setLoading] = useState(false);

  const {
    isOpen: isModalSuccessOpen,
    onOpen: onModalSuccessOpen,
    onClose: onModalSuccessClose,
  } = useDisclosure();
  const {
    isOpen: isModalErrorOpen,
    onOpen: onModalErrorOpen,
    onClose: onModalErrorClose,
  } = useDisclosure();

  const handleSinUp = ({ email, name, password }: FormValue) => {
    setLoading(true);

    api
      .post("/register", { email, name, password })
      .then((response) => {
        setLoading(false);
        onModalSuccessOpen();
      })
      .catch((err) => {
        setLoading(false);
        onModalErrorOpen();
        console.log(err);
      });
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const history = useHistory();

  return (
    <>
      <ModalSuccess
        isOpen={isModalSuccessOpen}
        onClose={onModalSuccessClose}
        message="seu cadastro deu certo, vamos lá"
        buttonMessage="Ir para o login"
        onClick={() => history.push("/")}
        secondaryText="Você ja pode começar criando sua lista de tarefas agora mesmo..."
      />
      <ModalError
        message="Email já existente"
        isOpen={isModalErrorOpen}
        onClose={onModalErrorClose}
      />
      <Flex
        padding={["10px 15px", "10px 15px", "0px", "0px"]}
        alignItems="center"
        justifyContent="center"
        height={["auto", "auto", "100vh", "100vh"]}
        bgGradient={[
          "linear(to-b,purple.800 65%, white 35%)",
          "linear(to-b,purple.800 65%, white 35%)",
          "linear(to-l,purple.800 65%, white 35%)",
          "linear(to-l,purple.800 65%, white 35%)",
        ]}
        color="white"
      >
        <Flex
          w={["100%", "100%", "90%", "65%"]}
          justifyContent="center"
          flexDirection={["column", "column", "row", "row"]}
          alignItems={["center", "center", "flex-start", "flex-start"]}
        >
          {isWideVersion ? (
            <>
              <GoBackButton top="75" left="25" />
              <SingUpForm
                handleSingUp={handleSubmit(handleSinUp)}
                errors={errors}
                register={register}
                loading={loading}
              />
              <SingUpInfor />
            </>
          ) : (
            <>
              <GoBackButton top="10" left="75vw" />
              <SingUpInfor />
              <SingUpForm
                handleSingUp={handleSubmit(handleSinUp)}
                errors={errors}
                register={register}
                loading={loading}
              />
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default SingUp;
