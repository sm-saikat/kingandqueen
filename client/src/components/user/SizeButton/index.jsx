import { Button as ChakraButton } from "@chakra-ui/react";

const SizeButton = (props) => {
  return (
    <ChakraButton
      className={`w-10 h-10 rounded-full border border-black m-2 font-roboto-con font-medium flex justify-center text-sm focus:bg-black focus:text-white ${props.buttonStyle}`}
    >
      {props.children}
    </ChakraButton>
  );
};

export default SizeButton;
