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
import Publications from "./Publications";

import { contentState } from "../states";

const sections: [string, ReactElement][] = [
  ["resume", <Resume />],
  ["publications", <Publications />],
  ["projects", <Projects />]
];

export default function Main() {
  const [mainContent] = useRecoilState(contentState);

  return (
    <Flex h="100vh" width="100vs" alignItems="center" direction="column">
      <Flex
        direction="column"
        alignItems="center"
        width={{ base: "100%", md: "48em" }}
        height="100%"
      >
        <Stack marginLeft="4" marginTop="4" marginBottom="16" spacing="4">
          <Heading as="h1" size="3xl">
            Houman Kamali
          </Heading>
          <Links />
        </Stack>
        <Stack spacing="6" width="100%">
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
    </Flex>
  );
}
