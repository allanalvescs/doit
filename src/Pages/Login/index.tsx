import { Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import LoginInfor from "./LoginInfor";
import LoginForm from "./LoginForm";

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
        <LoginInfor />
        <LoginForm
          handleSingIn={handleSubmit(handleSingIn)}
          errors={errors}
          register={register}
          loading={loading}
        />
      </Flex>
    </Flex>
  );
};

export default Login;
