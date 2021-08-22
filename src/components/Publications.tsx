import { Stack, Box } from "@chakra-ui/react";

type PublicationProps = {
  title: string;
  details: string;
};

function Publication({ title, details }: PublicationProps) {
  return (
    <Box>
      <p>
        <strong>{title}</strong>
        <br />
        {details}
      </p>
    </Box>
  );
}

const publications: PublicationProps[] = [
  {
    title: "Design methods for latent effectives of LAMEEs (draft)",
    details: "2022, Journal TBD, by Houman Kamali and Carey Simonson"
  },
  {
    title:
      "Aerosol delivery of synthetic DNA containing CpG motifs (CpG-ODN) in broiler chicks at hatch un-der field conditions using a commercial-scale prototype nebulizer provided protection against le-thal Escherichia coli septicemia",
    details: "2021, Poultry Science, by Dr. Khawaja Ashfaque Ahmed et al."
  },
  {
    title:
      "Extension of the Concepts of Heat Capacity Rate Ratio and Effectiveness-Number of Transfer Units Model to the Coupled Heat and Moisture Exchange ",
    details:
      "2016, ASME JHT, by Houman Kamali, Carey Simonson, Robert Besant, and Gaoming Ge."
  }
];

export default function () {
  return (
    <Stack>
      {publications.map((publication) => (
        <Publication {...publication} key={publication.title} />
      ))}
    </Stack>
  );
}
