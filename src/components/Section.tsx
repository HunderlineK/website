import { ReactElement } from "react";

import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box
} from "@chakra-ui/react";

type SectionProps = {
  title: ReactElement | string;
  content: ReactElement | string;
};

function Section({ title, content }: SectionProps) {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton
          _expanded={{ bg: "#4c362dc9", color: "white" }}
          _focus={{
            border: "none",
            borderLeft: "1px solid black",
            borderRight: "1px solid black"
          }}
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
