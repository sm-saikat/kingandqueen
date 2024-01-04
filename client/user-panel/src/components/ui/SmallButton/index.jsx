import { Button as ChakraButton } from "@chakra-ui/react";

const SmallButton = ({fill, children}) => {
  return (
    <ChakraButton
      className={`w-10 h-10 rounded-full border border-black m-2 font-roboto-con font-medium flex justify-center text-sm focus:bg-black focus:text-white ${fill ? 'bg-black text-white' : ''}`}
    >
      {children}
    </ChakraButton>
  );
};

export default SmallButton;
