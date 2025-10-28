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
  Hr, // Added Horizontal Rule for separation
} from "@react-email/components";

interface WaitlistConfirmationProps {
  userEmail: string;
}

// --- Styles for a clean, modern look ---
const main = {
  backgroundColor: "#f9fafb", // Light gray background for the body
  fontFamily: "Helvetica, Arial, sans-serif",
  padding: "40px 0",
};

const container = {
  margin: "0 auto",
  width: "580px",
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb", // Light border
  borderRadius: "12px", // Slightly more rounded corners
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", // Subtle shadow
  overflow: "hidden" as const,
};

const contentBox = {
  padding: "30px 40px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px", // Increased line height for readability
  color: "#374151", // Darker gray for better contrast
};

const heading = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#111827",
  marginBottom: "20px",
};

const button = {
  backgroundColor: "#111827", // A very dark gray/near black for premium feel
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "14px 28px", // Slightly larger padding
  fontWeight: "600",
  width: "250px", // A bit wider for better clickability
  margin: "30px auto",
};

const logoStyle = {
  textAlign: "center" as const,
  fontSize: "32px", // Larger logo text
  fontWeight: "extrabold" as const,
  color: "#111827",
  padding: "15px 0 25px 0",
};

export const WaitlistConfirmation = ({
  userEmail,
}: WaitlistConfirmationProps) => (
  <Html>
    <Head />
    <Preview>🎉 Welcome to the Casevia Waitlist!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={contentBox}>
          <div style={logoStyle}>Casevia</div>

          <Heading as="h1" style={heading}>
            You're on the list!
          </Heading>

          <Text style={paragraph}>
            Thanks for joining the waitlist for <strong>Casevia</strong>—the
            <strong>
              AI-powered solution to automate your case study pipeline
            </strong>
            . Your spot is reserved!
          </Text>

          <Text style={paragraph}>
            We'll be sure to notify you when we launch. In the meantime, we'll
            be posting <strong>product updates and sneak peeks</strong> on our X
            (formerly Twitter) handle.
          </Text>

          <Text style={{ ...paragraph, fontWeight: "bold", marginTop: "25px" }}>
            Your registered email: {userEmail}
          </Text>

          <Section style={{ textAlign: "center" }}>
            <Button style={button} href="https://x.com/muiz_rexhepi">
              Follow for Updates on X
            </Button>
          </Section>

          <Hr style={{ borderTop: "1px solid #e5e7eb", margin: "20px 0" }} />

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
