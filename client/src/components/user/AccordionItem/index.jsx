import React from "react";
import {
  AccordionItem as ChakraAccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const AccordionItem = ({ title, children, className, borderStyle }) => {
  return (
    <ChakraAccordionItem
      className={`border-b py-2 border-gray-300 ${borderStyle}`}
    >
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton
              className={`font-roboto-con font-semibold text-black text-[15px] py-2 uppercase hover:text-red-600 ${className}`}
            >
              <Box as="span" flex="1" textAlign="left">
                {title}
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{children}</AccordionPanel>
        </>
      )}
    </ChakraAccordionItem>
  );
};

export default AccordionItem;
