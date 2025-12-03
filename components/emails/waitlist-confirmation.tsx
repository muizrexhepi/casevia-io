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

interface WaitlistConfirmationProps {
  userEmail: string;
  queuePosition?: number;
}

const main = {
  backgroundColor: "#f8f8f8",
  fontFamily: "Helvetica, Arial, sans-serif",
  padding: "40px 0",
};

const container = {
  margin: "0 auto",
  width: "580px",
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "14px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.06)",
  overflow: "hidden" as const,
};

const contentBox = {
  padding: "36px 42px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#374151",
};

const heading = {
  fontSize: "30px",
  fontWeight: 700,
  color: "#111827",
  marginBottom: "22px",
};

const badge = {
  display: "inline-block",
  padding: "6px 12px",
  fontSize: "12px",
  fontWeight: 600,
  backgroundColor: "#fef3c7",
  color: "#92400e",
  borderRadius: "8px",
  marginBottom: "18px",
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
  fontWeight: 600,
  width: "260px",
  margin: "32px auto",
};

const logoStyle = {
  textAlign: "center" as const,
  fontSize: "34px",
  fontWeight: 800 as const,
  color: "#111827",
  paddingBottom: "20px",
};

export const WaitlistConfirmation = ({
  userEmail,
  queuePosition = 248,
}: WaitlistConfirmationProps) => (
  <Html>
    <Head />
    <Preview>Your Casevia early access is reserved</Preview>

    <Body style={main}>
      <Container style={container}>
        <Section style={contentBox}>
          <div style={logoStyle}>Casevia</div>

          {/* Priority Queue Badge */}
          <div style={badge}>You are #{queuePosition} in the queue</div>

          <Heading as="h1" style={heading}>
            Welcome — your early access is reserved 🎉
          </Heading>

          <Text style={paragraph}>
            Thanks for joining the <strong>Casevia Early Access</strong> list.
            You're now officially in line to try the tool that turns recorded
            customer interviews into{" "}
            <strong>polished, structured case studies</strong>— in under 30
            minutes.
          </Text>

          <Text style={paragraph}>
            Over the next few days, I’ll share product previews, a real
            case-study transformation, and your early-access invite.
          </Text>

          <Text
            style={{
              ...paragraph,
              marginTop: "24px",
              fontWeight: 600,
              color: "#111827",
            }}
          >
            Your early-access perks:
          </Text>

          <Text style={paragraph}>
            • 🎁 <strong>Lifetime 50% discount</strong> (locked in) <br />
            • ⚡ Priority onboarding <br />• 🔒 Access before the public launch
          </Text>

          <Text
            style={{
              ...paragraph,
              marginTop: "28px",
              fontWeight: 600,
            }}
          >
            Registered email: {userEmail}
          </Text>

          <Section style={{ textAlign: "center" }}>
            <Button style={button} href="https://x.com/muiz_rexhepi">
              Follow updates on X
            </Button>
          </Section>

          <Hr
            style={{
              borderTop: "1px solid #e5e7eb",
              margin: "24px 0",
            }}
          />

          <Text style={paragraph}>
            Talk soon, <br />
            <strong>Muiz</strong> <br />
            Founder, Casevia
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default WaitlistConfirmation;
