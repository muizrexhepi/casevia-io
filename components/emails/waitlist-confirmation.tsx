import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Button,
} from "@react-email/components";

interface WaitlistConfirmationProps {
  userEmail: string;
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "Helvetica, Arial, sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  border: "1px solid #eaeaea",
  borderRadius: "8px",
};

const box = {
  padding: "0 40px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
  color: "#4b5563", // A dark gray for body text
};

const button = {
  backgroundColor: "#000000", // Black button to match a modern, clean UI
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px 24px",
  fontWeight: "600",
  width: "200px", // Fixed width for clean look
  margin: "20px auto",
};

// You can replace this with your actual Casevia logo image URL
const logo = {
  textAlign: "center" as const,
  fontSize: "24px",
  fontWeight: "bold",
  padding: "10px 0",
};

export const WaitlistConfirmation = ({
  userEmail,
}: WaitlistConfirmationProps) => (
  <Html>
    <Head />
    <Preview>🎉 You're on the Casevia Waitlist!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <div style={logo}>Casevia</div>

          <Heading
            as="h1"
            style={{
              ...paragraph,
              fontSize: "24px",
              fontWeight: "bold",
              color: "#111827",
            }}
          >
            Welcome to the waitlist!
          </Heading>

          <Text style={paragraph}>
            Thank you for your interest in **Casevia**—the AI-powered solution
            to automate your case study pipeline. Your spot is reserved!
          </Text>

          <Text style={paragraph}>
            We'll be in touch soon with an update on our launch and exclusive
            access details.
          </Text>

          <Text style={paragraph}>**Your registered email:** {userEmail}</Text>

          <Section style={{ textAlign: "center" }}>
            <Button
              style={button}
              href="https://muizrexhepi.com" // Update this link to your actual site or social page
            >
              Learn More
            </Button>
          </Section>

          <Text style={paragraph}>
            Best regards,
            <br />
            The Casevia Team
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default WaitlistConfirmation;
