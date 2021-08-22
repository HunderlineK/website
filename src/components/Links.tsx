import { Link, ButtonGroup, Icon } from "@chakra-ui/react";
import MdiIcon from "@mdi/react";
import { mdiLinkedin, mdiEmail } from "@mdi/js";

const LinkedInIcon = () => (
  <MdiIcon path={mdiLinkedin} color="black" size="24" />
);
const EmailIcon = () => <MdiIcon path={mdiEmail} color="black" size="24" />;

export default function Links() {
  return (
    <ButtonGroup>
      <Link
        href="https://www.linkedin.com/in/houman-kamali-5685b2120/"
        target="_blank"
      >
        <Icon aria-label="LinkedIn" as={LinkedInIcon} />
      </Link>
      <Link href="mailto:houman.kamali@outlouk.com">
        <Icon aria-label="Email" as={EmailIcon} />
      </Link>
    </ButtonGroup>
  );
}
