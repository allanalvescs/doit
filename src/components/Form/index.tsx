import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import {
  useState,
  useEffect,
  useCallback,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";

import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";

type InputVariationOptions = {
  [key: string]: string;
};

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

const inputVariant: InputVariationOptions = {
  error: "red.500",
  default: "gray.200",
  focus: "purple.800",
  filled: "green.500",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, icon: Icon, label, ...rest },
  ref
) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState("default");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel>{label}</FormLabel>}

      <InputGroup flexDirection="column">
        {!!Icon && (
          <InputLeftElement mt="2.5" color={inputVariant[variation]}>
            <Icon />
          </InputLeftElement>
        )}
        <ChakraInput
          bg="gray.50"
          name={name}
          variant="outline"
          color={inputVariant[variation]}
          onChangeCapture={(event) => setValue(event.currentTarget.value)}
          onBlurCapture={handleInputBlur}
          borderColor={inputVariant[variation]}
          onFocus={handleInputFocus}
          _hover={{ bgColor: "gray.100" }}
          _placeholder={{ color: "gray.300" }}
          size="lg"
          h="60px"
          ref={ref}
          {...rest}
        />
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

const Input = forwardRef(InputBase);

export default Input;
