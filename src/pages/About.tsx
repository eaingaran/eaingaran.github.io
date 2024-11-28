import { Box, Button, Container, Typography } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AppsIcon from "@mui/icons-material/Apps";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { trackEvent } from "utils/analytics";
import { useNavigate } from "react-router-dom";
import { buttonSX } from "utils/buttons";
import Avatar from "@mui/material/Avatar";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <section>
        <Container
          maxWidth="lg"
          sx={{
            py: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Aingaran Elango"
            //src=""
            //sx={{ width: 150, height: 150, mb: 4 }}
            sx={{
              width: 150,
              height: 150,
              mb: 4,
              bgcolor: "#1E88E5",
              fontSize: "4rem",
            }}
          >
            AE
          </Avatar>
          <Typography
            variant="h2"
            component="h1"
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
              I am a software architect and engineer with expertise in cloud
              technologies. With 8+ years of experience in IT, I've worked
              across the full software development lifecycle, from requirement
              engineering and development to testing, operations,
              infrastructure, and cloud. I am also a Google-certified cloud
              architect.
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              I enjoy tackling complex challenges and finding creative
              solutions. As a lifelong learner and tech enthusiast, I'm always
              eager to explore new technologies and methodologies.
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              In my free time, I like to explore technologies and tools and
              build side projects - some of which are linked{" "}
              <a
                href="https://aingaran.dev/products"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "primary.main" }}
              >
                here
              </a>
              . I also enjoy reading tech blogs, watching tech videos and sci-fi
              movies and TV series.
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              Let's connect and discuss how I can help your organization achieve
              its goals!
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
                onClick={(event) => {
                  trackEvent("Button", "Click", "Schedule_Meeting");
                  event.preventDefault();
                  window
                    .open("https://schedule.aingaran.dev/aingaran", "_blank")
                    ?.focus();
                }}
                startIcon={<AlternateEmailIcon />}
              >
                Meet Me
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
        </Container>
      </section>
    </>
  );
};

export default About;
