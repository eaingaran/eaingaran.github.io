import { Box, Button, Container, Typography } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AppsIcon from "@mui/icons-material/Apps";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { trackEvent } from "utils/analytics";
import { useNavigate } from "react-router-dom";
import { buttonSX } from "utils/buttons";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <section>
        <Typography
          variant="h2"
          component="h1"
          sx={{ mt: 2 }}
          align="center"
          color="primary"
        >
          Aingaran Elango
        </Typography>
        <Container maxWidth="lg" sx={{ py: 5 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ mb: 4 }}
            align="center"
            color="text.primary"
          >
            Passionate About Solving the Unsolvable.
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            I am a Google certified professional cloud architect with expertise
            in software architecture and development. With 8+ years of
            experience in IT, I've worked across the full software development
            lifecycle, from requirement engineering and development to testing,
            operations, infrastructure, and cloud.
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            I thrive on tackling complex challenges and finding creative
            solutions. I'm a lifelong learner and tech enthusiast, always eager
            to explore new technologies and methodologies.
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            In my free time, I'm an avid consumer of tech blogs, tech videos and
            sci-fi movies and tv series.
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Let's connect and discuss how I can help your organization achieve
            its goals.
          </Typography>
          <Box
            sx={{
              display: { xs: "flex", sm: "flex" },
              flexDirection: { xs: "column", sm: "row" },
              position: "relative",
              justifyContent: "space-around",
            }}
          >
            <Button
              variant="outlined"
              disableElevation={true}
              sx={buttonSX}
              onClick={() => {
                trackEvent("Button", "Click", "Open Email");
                window.location.href = "mailto:me@aingaran.dev";
              }}
              startIcon={<AlternateEmailIcon />}
            >
              Contact Me
            </Button>
            <Button
              variant="outlined"
              disableElevation={true}
              sx={buttonSX}
              onClick={() => {
                trackEvent("Button", "Click", "Explore");
                navigate("/products");
              }}
              startIcon={<AppsIcon />}
            >
              Explore
            </Button>
            <Button
              variant="outlined"
              disableElevation={true}
              sx={buttonSX}
              onClick={(event) => {
                trackEvent("Button", "Click", "Credentials");
                event.preventDefault();
                window
                  .open(
                    "https://google.accredible.com/profile/aingaran/wallet",
                    "_blank",
                  )
                  ?.focus();
              }}
              startIcon={<AccountBalanceWalletIcon />}
            >
              Credentials
            </Button>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default About;
