import {
  DarkModeOutlined as DarkModeOutlinedIcon,
  LightModeOutlined as LightModeOutlinedIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  SaveAlt as SaveAltIcon,
} from "@mui/icons-material";
import { Box, Container, Grid, Tooltip } from "@mui/material";
import { Slide, ToastContainer, toast } from "react-toastify";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { ThemeContext } from "theme";
import { trackEvent } from "utils/analytics";

const Footer = () => {
  const theme = useTheme();
  const { switchColorMode } = useContext(ThemeContext);

  const handleEmailCopy = () => {
    trackEvent("Button", "Click", "Copy Email");
    const emailAddress = "contact@aingaran.dev";
    if ("clipboard" in navigator) {
      navigator.clipboard
        .writeText(emailAddress)
        .then(() => toast.info("Email copied to clipboard"))
        .catch((err) => {
          console.error("Failed to copy email: ", err);
          toast.error("Could not copy email");
        });
    } else {
      document.execCommand("copy", true, emailAddress);
      toast.info("Email copied to clipboard");
    }
  };

  const componentsProps = {
    tooltip: {
      sx: {
        bgcolor:
          theme.palette.mode === "dark" ? "common.white" : "common.black",
        "& .MuiTooltip-arrow": {
          color:
            theme.palette.mode === "dark" ? "common.white" : "common.black",
        },
        color: theme.palette.mode === "dark" ? "common.black" : "common.white",
        opacity: "80%",
        borderRadius: 3,
      },
    },
  };

  return (
    <>
      <Box
        sx={{
          bottom: 0,
          left: 0,
          position: "fixed",
          justifyContent: "space-between",
          bgcolor: "background.paper",
          paddingTop: 1.5,
          paddingBottom: 3,
          width: "100vw",
          height: "25px",
        }}
      >
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between" alignItems="center">
            {/* GitHub */}
            <Tooltip
              describeChild
              title="Github Profile"
              arrow
              placement="top"
              componentsProps={componentsProps}
            >
              <GitHubIcon
                sx={{ mx: 1, color: "text.primary" }}
                onClick={() => {
                  trackEvent("Link", "Click", "GitHub");
                  window.open(
                    "https://github.com/eaingaran",
                    "_blank",
                    "noopener",
                  );
                }}
                fontSize="large"
              />
            </Tooltip>

            {/* LinkedIn */}
            <Tooltip
              describeChild
              title="LinkedIn Profile"
              arrow
              placement="top"
              componentsProps={componentsProps}
            >
              <LinkedInIcon
                sx={{ mx: 1, color: "text.primary" }}
                onClick={() => {
                  trackEvent("Link", "Click", "LinkedIn");
                  window.open(
                    "https://www.linkedin.com/in/eaingaran",
                    "_blank",
                    "noopener",
                  );
                }}
                fontSize="large"
              />
            </Tooltip>

            {/* Download CV */}
            <Tooltip
              describeChild
              title="Download Resume"
              arrow
              placement="top"
              componentsProps={componentsProps}
            >
              <SaveAltIcon
                sx={{ mx: 1, color: "text.primary" }}
                onClick={() => {
                  trackEvent("Button", "Click", "Download CV");
                  window.location.href = "/cv_aingaran_elango.pdf";
                }}
                fontSize="large"
              />
            </Tooltip>

            {/* Copy Email */}
            <Tooltip
              describeChild
              title="Copy Email"
              arrow
              placement="top"
              componentsProps={componentsProps}
            >
              <EmailIcon
                sx={{ mx: 1, color: "text.primary" }}
                onClick={handleEmailCopy}
                fontSize="large"
              />
            </Tooltip>

            {/* Color Mode Switch */}
            <Tooltip
              describeChild
              title={
                theme.palette.mode === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
              arrow
              placement="top"
              componentsProps={componentsProps}
            >
              {theme.palette.mode === "dark" ? (
                <LightModeOutlinedIcon
                  sx={{ mx: 1, color: "text.primary" }}
                  onClick={switchColorMode}
                  fontSize="large"
                />
              ) : (
                <DarkModeOutlinedIcon
                  sx={{ mx: 1, color: "text.primary" }}
                  onClick={switchColorMode}
                  fontSize="large"
                />
              )}
            </Tooltip>
          </Grid>
        </Container>
      </Box>
      <ToastContainer
        position="top-right"
        closeButton={false}
        autoClose={3000}
        stacked={false}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme={theme.palette.mode}
        transition={Slide}
      />
    </>
  );
};

export default Footer;
