import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea as ChakraTextArea,
  TextareaProps as ChakraTextAreaProps,
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

type TextAreaVariationOptions = {
  [key: string]: string;
};

interface TextAreaProps extends ChakraTextAreaProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

const TextAreaVariant: TextAreaVariationOptions = {
  error: "red.500",
  default: "gray.200",
  focus: "purple.800",
  filled: "green.500",
};

const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = ({ name, error = null, icon: Icon, label, ...rest }, ref) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState("default");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleTextAreaFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);

  const handleTextAreaBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel>{label}</FormLabel>}

      <InputGroup flexDirection="column">
        {!!Icon && (
          <InputLeftElement mt="2.5" color={TextAreaVariant[variation]}>
            <Icon />
          </InputLeftElement>
        )}
        <ChakraTextArea
          bg="gray.50"
          name={name}
          variant="outline"
          color={TextAreaVariant[variation]}
          onChangeCapture={(event) => setValue(event.currentTarget.value)}
          onBlurCapture={handleTextAreaBlur}
          borderColor={TextAreaVariant[variation]}
          onFocus={handleTextAreaFocus}
          _hover={{ bgColor: "gray.100" }}
          _placeholder={{ color: "gray.300" }}
          size="lg"
          h="120px"
          ref={ref}
          {...rest}
        />
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

const TextArea = forwardRef(TextAreaBase);

export default TextArea;
