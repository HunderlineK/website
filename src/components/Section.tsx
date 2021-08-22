import * as React from "react";

import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box
} from "@chakra-ui/react";

function Section({ title, content }) {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton
          _expanded={{ bg: "#4c362dc9", color: "white" }}
          _focus={{ border: "none", borderLeft: "1px solid black" }}
        >
          <Box flex="1" textAlign="left">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>{content}</AccordionPanel>
    </AccordionItem>
  );
}

export default Section;
