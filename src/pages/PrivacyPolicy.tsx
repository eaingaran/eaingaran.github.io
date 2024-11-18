import React from "react";
import { Typography, Container, Link } from "@mui/material";

const PrivacyPolicy: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <Typography
        variant="h2"
        component="h1"
        align="center"
        color="primary"
        gutterBottom
      >
        Privacy Policy
      </Typography>

      <Typography variant="h6" component="h2" gutterBottom align="center">
        Effective Date: November 15, 2024
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        This privacy policy describes how Aingaran Elango ("we," "us," or "our")
        handles user data in our applications (the "Apps").
      </Typography>

      <Typography variant="h6" component="h3" gutterBottom>
        Data Collection
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        We currently do not collect any personal data from users in any of our
        Apps. Our Apps are designed to function entirely locally on your device.
        No information is transmitted to us or any third parties, except for
        data that the Google Play Store may automatically collect.
      </Typography>

      <Typography variant="h6" component="h3" gutterBottom>
        Google Play Store Data
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        When you download or use our Apps from the Google Play Store, Google may
        collect certain information about you, your device, and your app usage.
        This data collection is governed by Google's own privacy policy, which
        you can find{" "}
        <Link
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener"
        >
          here
        </Link>
        .
      </Typography>

      <Typography variant="h6" component="h3" gutterBottom>
        Future Apps and Data Collection
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        While our current Apps do not collect any personal data, we may develop
        Apps in the future that collect data to provide enhanced functionality
        or services. If we do so, we will update this privacy policy to clearly
        explain what information is collected, how it is used, and your choices
        regarding your data.
      </Typography>

      <Typography variant="h6" component="h3" gutterBottom>
        Changes to this Privacy Policy
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        We may update this privacy policy from time to time. If we make any
        material changes, we will revise the "Effective Date" at the top of this
        policy and, where appropriate, provide a notice in the affected Apps.
      </Typography>

      <Typography variant="h6" component="h3" gutterBottom>
        Contact Us
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        If you have any questions about this privacy policy, please contact us
        at: <Link href="mailto:contact@aingaran.dev">contact@aingaran.dev</Link>
      </Typography>
    </Container>
  );
};

export default PrivacyPolicy;
