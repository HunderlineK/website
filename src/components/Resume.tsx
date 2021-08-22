import { Heading, Stack, Flex, Text, Spacer } from "@chakra-ui/react";

const educations = [
  {
    title: "MSc in Mechanical Engineering",
    university: "University of Saskatchewan",
    country: "Canada",
    year: 2015,
    gpa: "89.5/100"
  },
  {
    title: "BSc in Mechanical Engineering",
    university: "Sharif University of Technology",
    country: "Iran",
    year: 2011,
    gpa: "16.8/20.0"
  }
];

type EductionProps = {
  title: string;
  university: string;
  year: number;
};

function Education({ title, university, year }: EductionProps) {
  return (
    <Stack>
      <strong>
        <Flex direction={{ base: "column", md: "row" }}>
          {title}
          <Spacer />
          {`${university}, ${year}`}
        </Flex>
      </strong>
    </Stack>
  );
}

interface Experience {
  title: string;
  organization: string;
  start: string;
  end: string;
  description: string;
}
const experiences: [string, Experience[]][] = [
  [
    "Software Engineering",
    [
      {
        title: "Senior Software Engineer",
        organization: "Rivian",
        start: "Jan 2021",
        end: "Present",
        description:
          "Lead back-end developer of the first business to business application at Rivian."
      },
      {
        title: "Software Architect and Developer",
        organization: "Myplanet",
        start: "Oct 2019",
        end: "Jan 2021",
        description:
          "Designed and implemented a fault-tolerant, high-throughput data streaming platform using Kafka."
      },
      {
        title: "Senior Software Engineer",
        organization: "AppDirect",
        start: "Sept 2018",
        end: "Oct 2018",
        description:
          "Led development of a series of UI component for creating search queries across distributed data."
      },
      {
        title: "Full-Stack Developer",
        organization: "Sofdesk",
        start: "Oct 2017",
        end: "Sept 2018",
        description:
          "Developed hourly simulation modules for energy and financial modeling of solar installations with battery storage."
      }
    ]
  ],
  [
    "Research",
    [
      {
        title: "Research Assistant",
        organization: "University of Saskatchewan",
        start: "Sept 2015",
        end: "Jan 2017",
        description:
          "Designed and fabricated a set of controlled and monitored experimental equipment for veterinary research. Using the data obtained from the equipment, performed numerical data analysis."
      },
      {
        title: "Research Assistant",
        organization: "University of Saskatchewan",
        start: "Jan 2013",
        end: "Jan 2015",
        description:
          "Developed dimensionless analytical methods for analyzing conjugate heat and mass transfer in Liquid-to-Air Memembrane Energy Exchangers (LAMEEs)."
      }
    ]
  ]
];

type PositionProps = {
  title: string;
  organization: string;
  start: string;
  end: string;
  description: string;
};

function Position({
  title,
  organization,
  start,
  end,
  description
}: PositionProps) {
  return (
    <Stack spacing="0">
      <strong>
        <Flex direction={{ base: "column", md: "row" }}>
          {title}
          <Spacer />
          {`${organization}, ${start} to ${end}`}
        </Flex>
      </strong>
      <Text>{description}</Text>
    </Stack>
  );
}

export default function Resume() {
  return (
    <Stack spacing="4">
      <Stack spacnig="2">
        <Heading as="h3" size="xl">
          Education
        </Heading>
        <Stack>
          {educations.map((education, index) => (
            <Education {...education} key={index} />
          ))}
        </Stack>
      </Stack>
      <Stack>
        <Heading as="h3" size="xl">
          Experiences
        </Heading>
        <Stack spacing="4">
          {experiences.map(([field, positions], index) => (
            <Stack key={index} spacing="2">
              <Heading as="h4" size="lg">
                {field}
              </Heading>
              <Stack>
                {positions.map((position, index) => (
                  <Position {...position} key={index} />
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
