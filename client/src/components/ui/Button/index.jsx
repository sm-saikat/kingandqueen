import { Button as ChakraButton } from "@chakra-ui/react";

const Button = (props) => {
  return (
    <ChakraButton
      className={`w-full border border-black m-2 font-roboto-con font-medium p-2.5 text-base ${props.buttonStyle}`}
    >
      {props.children}
    </ChakraButton>
  );
};

export default Button;
