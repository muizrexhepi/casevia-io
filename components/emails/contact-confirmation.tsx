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
  Hr,
} from "@react-email/components";

interface ContactConfirmationProps {
  firstName: string;
  userEmail: string;
}

// --- Styles for a clean, modern look ---
const main = {
  backgroundColor: "#f9fafb",
  fontFamily: "Helvetica, Arial, sans-serif",
  padding: "40px 0",
};

const container = {
  margin: "0 auto",
  width: "580px",
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  overflow: "hidden" as const,
};

const contentBox = {
  padding: "30px 40px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#374151",
};

const heading = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#111827",
  marginBottom: "20px",
};

const button = {
  backgroundColor: "#111827",
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "14px 28px",
  fontWeight: "600",
  width: "250px",
  margin: "30px auto",
};

const logoStyle = {
  textAlign: "center" as const,
  fontSize: "32px",
  fontWeight: "extrabold" as const,
  color: "#111827",
  padding: "15px 0 25px 0",
};

const highlight = {
  backgroundColor: "#fef3c7",
  padding: "16px 20px",
  borderRadius: "8px",
  marginTop: "20px",
  marginBottom: "20px",
};

export const ContactConfirmation = ({
  firstName,
  userEmail,
}: ContactConfirmationProps) => (
  <Html>
    <Head />
    <Preview>
      We've received your message - Our team will be in touch soon!
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={contentBox}>
          <div style={logoStyle}>Casevia</div>

          <Heading as="h1" style={heading}>
            Thanks for reaching out, {firstName}!
          </Heading>

          <Text style={paragraph}>
            We've received your message and our team will get back to you within{" "}
            <strong>24 hours</strong>.
          </Text>

          <Section style={highlight}>
            <Text style={{ ...paragraph, margin: "0", fontWeight: "600" }}>
              What happens next?
            </Text>
            <Text style={{ ...paragraph, marginTop: "8px", marginBottom: "0" }}>
              Our team is reviewing your inquiry and will provide a personalized
              response tailored to your needs.
            </Text>
          </Section>

          <Text style={paragraph}>
            In the meantime, feel free to explore our{" "}
            <strong>resources and documentation</strong>, or schedule a demo
            directly if you'd like to see Casevia in action.
          </Text>

          <Text style={{ ...paragraph, fontWeight: "bold", marginTop: "25px" }}>
            Your registered email: {userEmail}
          </Text>

          <Section style={{ textAlign: "center" }}>
            <Button style={button} href="https://casevia.io/demo">
              Schedule a Demo
            </Button>
          </Section>

          <Hr style={{ borderTop: "1px solid #e5e7eb", margin: "20px 0" }} />

          <Text style={paragraph}>
            Have more questions? Feel free to reply to this email—we're here to
            help!
          </Text>

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

export default ContactConfirmation;
