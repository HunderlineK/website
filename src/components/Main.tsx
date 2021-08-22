import {
  Heading,
  Stack,
  Accordion,
  Flex,
  Spacer,
  Box,
  Text
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { useRecoilState } from "recoil";

import Section from "./Section";
import Projects from "./Projects";
import Resume from "./Resume";
import Links from "./Links";

import { contentState } from "../states";

const sections: [string, ReactElement][] = [
  ["resume", <Resume />],
  ["projects", <Projects />]
];

export default function Main() {
  const [mainContent] = useRecoilState(contentState);

  return (
    <Flex direction="column" h="100vh">
      <Stack marginLeft="4" marginTop="4" marginBottom="16" spacing="4">
        <Heading as="h1" size="3xl">
          Houman Kamali
        </Heading>
        <Links />
      </Stack>
      <Stack spacing="6">
        <Accordion allowToggle>
          {sections.map(([title, content]) => (
            <Section
              key={title}
              title={
                <Heading as="h2" size="2xl">
                  {title}
                </Heading>
              }
              content={content}
            />
          ))}
        </Accordion>
      </Stack>
      <Box>{mainContent}</Box>
      <Spacer />
      <Text align="center" margin="4" fontSize="xx-large">
        .
      </Text>
    </Flex>
  );
}
