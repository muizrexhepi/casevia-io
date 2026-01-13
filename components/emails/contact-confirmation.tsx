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

// Casevia Brand Colors
const main = {
  backgroundColor: "#FFF5F9",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  padding: "40px 0",
};

const container = {
  margin: "0 auto",
  width: "600px",
  backgroundColor: "#ffffff",
  border: "1px solid rgba(34, 18, 33, 0.05)",
  borderRadius: "28px",
  overflow: "hidden" as const,
};

const header = {
  background: "linear-gradient(135deg, #221221 0%, #D1326E 50%, #6326E1 100%)",
  padding: "40px",
  textAlign: "center" as const,
};

const logoStyle = {
  fontSize: "42px",
  fontWeight: "800",
  color: "#ffffff",
  letterSpacing: "-0.03em",
  margin: "0",
};

const contentBox = {
  padding: "48px 40px",
};

const heading = {
  fontSize: "32px",
  fontWeight: "400",
  color: "#221221",
  marginBottom: "24px",
  letterSpacing: "-0.03em",
  lineHeight: "1.2",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "rgba(74, 29, 58, 0.8)",
  margin: "0 0 20px 0",
};

const highlight = {
  backgroundColor: "rgba(209, 50, 110, 0.05)",
  border: "1px solid rgba(209, 50, 110, 0.1)",
  padding: "24px",
  borderRadius: "16px",
  marginTop: "28px",
  marginBottom: "28px",
};

const highlightTitle = {
  fontSize: "14px",
  fontWeight: "700",
  color: "#D1326E",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  marginBottom: "12px",
};

const highlightText = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "rgba(74, 29, 58, 0.9)",
  margin: "0",
};

const button = {
  backgroundColor: "#D1326E",
  borderRadius: "50px",
  color: "#ffffff",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "16px 32px",
  fontWeight: "700",
  letterSpacing: "-0.01em",
  margin: "32px 0",
};

const emailTag = {
  backgroundColor: "rgba(34, 18, 33, 0.03)",
  padding: "12px 20px",
  borderRadius: "8px",
  fontSize: "14px",
  color: "#221221",
  fontWeight: "600",
  marginTop: "24px",
  display: "inline-block",
};

const divider = {
  borderTop: "1px solid rgba(34, 18, 33, 0.08)",
  margin: "32px 0",
};

const footer = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "rgba(74, 29, 58, 0.6)",
  margin: "0",
};

const signature = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#221221",
  margin: "24px 0 0 0",
  fontWeight: "400",
};

export const ContactConfirmation = ({
  firstName,
  userEmail,
}: ContactConfirmationProps) => (
  <Html>
    <Head />
    <Preview>
      We've received your message, {firstName} — Our engineering team will be in
      touch within 24 hours
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Heading as="h1" style={logoStyle}>
            casevia
          </Heading>
        </Section>

        <Section style={contentBox}>
          <Heading as="h2" style={heading}>
            Thanks for reaching out, {firstName}.
          </Heading>

          <Text style={paragraph}>
            We've received your inquiry and our engineering team is reviewing
            your requirements. You'll hear back from us within{" "}
            <strong>24 hours</strong> with a personalized response.
          </Text>

          <Section style={highlight}>
            <Text style={highlightTitle}>What Happens Next?</Text>
            <Text style={highlightText}>
              Our senior engineers will analyze your technical needs and craft a
              tailored solution architecture. We'll reach out to schedule a
              deep-dive session to discuss your project in detail.
            </Text>
          </Section>

          <Text style={paragraph}>
            In the meantime, explore how we've helped enterprises across three
            continents architect scalable, resilient systems that power growth.
          </Text>

          <div style={{ textAlign: "center" as const }}>
            <Button style={button} href="https://casevia.io/work">
              View Case Studies
            </Button>
          </div>

          <Text style={{ ...paragraph, marginTop: "32px" }}>
            Your registered email:
          </Text>
          <div style={emailTag}>{userEmail}</div>

          <Hr style={divider} />

          <Text style={footer}>
            Questions? Simply reply to this email — we're here to help.
          </Text>

          <Text style={signature}>
            <strong>The Casevia Engineering Team</strong>
            <br />
            Mitte, Berlin — European HQ
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactConfirmation;
