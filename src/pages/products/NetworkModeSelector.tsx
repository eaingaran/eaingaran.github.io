import React from "react";
import {
  Typography,
  Container,
  Link,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
  Tooltip,
} from "@mui/material";
import {
  NavigateBefore as NavigateBeforeIcon,
  InfoOutlined as InfoOutlinedIcon,
  GitHub as GitHubIcon,
  Shop as GooglePlay,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { buttonSX } from "utils/buttons";
import { tooltipComponentsProps } from "utils/tooltip";
import { trackEvent } from "utils/analytics";

const NetworkModeSelector: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const tooltipProps = tooltipComponentsProps();

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Tooltip
          title="Explore all apps"
          describeChild
          arrow
          placement="top"
          componentsProps={tooltipProps}
        >
          <IconButton
            sx={{ mr: 2, color: "primary.main" }}
            onClick={() => {
              trackEvent("Button", "Click", "Back to All Apps");
              navigate("/products");
            }}
          >
            <NavigateBeforeIcon />
          </IconButton>
        </Tooltip>
        <Typography variant="h2" component="h1" color="primary">
          Network Mode Selector
        </Typography>
      </Box>

      <Typography variant="body1" paragraph color="text.secondary">
        A free and ad-free Android app that gives you full control
        <Tooltip
          title="Android may not always honor the selected network mode, especially on newer versions."
          describeChild
          arrow
          placement="top"
          componentsProps={tooltipProps}
        >
          <span style={{ verticalAlign: "super", fontSize: "0.8em" }}>
            <InfoOutlinedIcon fontSize="inherit" />
          </span>
        </Tooltip>{" "}
        over your device's network mode.
      </Typography>

      <Box
        sx={{
          maxWidth: "75vw",
          margin: "0 auto",
          mb: 4,
        }}
      >
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          emulateTouch={true}
          showIndicators={true}
          interval={3500}
          stopOnHover={true}
          transitionTime={500}
          autoPlay={true}
          infiniteLoop={true}
        >
          {[
            "Warning",
            "Phone_Index_Closed",
            "Phone_Index_Open",
            "Network_Mode_Closed",
            "Network_Mode_Open",
          ].map((name, index) => (
            <div key={index}>
              <img
                src={`/assets/products/network-mode-selector/${theme.palette.mode}/${name}.webp`}
                alt={`${name} ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </Carousel>
      </Box>

      <Typography
        variant="h5"
        component="h2"
        color="text.primary"
        gutterBottom
        sx={{ mt: 4 }}
      >
        Why You Need This App
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        Ever wished you could force
        <Tooltip
          title="Android may not always honor the selected network mode, especially on newer versions."
          describeChild
          arrow
          placement="top"
          componentsProps={tooltipProps}
        >
          <span style={{ verticalAlign: "super", fontSize: "0.8em" }}>
            <InfoOutlinedIcon fontSize="inherit" />
          </span>
        </Tooltip>{" "}
        your phone to connect to 5G only, even if the signal is weak? Or maybe
        you want to stick with LTE for better battery life? Network Mode
        Selector lets you do just that!
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        Most phones hide these advanced network settings, making it difficult to
        fine-tune your connection. This app unlocks those settings and gives you
        the power to choose the network mode that best suits your needs.
      </Typography>

      <Typography variant="h5" component="h2" color="text.primary" gutterBottom>
        How It's Different
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Completely Free
              </Typography>
            }
            secondary="No hidden costs or in-app purchases."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                No Ads
              </Typography>
            }
            secondary="Enjoy an uninterrupted experience without annoying ads."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Built-in Tutorial
              </Typography>
            }
            secondary="Learn how to use the app and understand network modes with our helpful guide."
          />
        </ListItem>
      </List>

      <Typography variant="h5" component="h2" color="text.primary" gutterBottom>
        Using the Android Radio Info Menu
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        The Android Radio Info menu provides access to advanced network
        settings, including the ability to change your network mode. Here's how
        to use it effectively:
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Select Your SIM Card
              </Typography>
            }
            secondary="If you have a dual-SIM or triple-SIM phone, make sure to select the
                      correct SIM card before changing the network mode. This is usually
                      indicated by 'Phone 0', 'Phone 1', etc."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Know Your Network Operator's Supported Modes
              </Typography>
            }
            secondary="Changing to an unsupported network mode can lead to a loss of signal.
                      Check with your network operator to see which modes are supported in your area.
                      For example, avoid selecting CDMA on a GSM network or choosing 2G if 2G service
                      has been shut down in your country."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Don't Change What You Don't Understand
              </Typography>
            }
            secondary="The Radio Info menu contains advanced settings. Avoid changing any settings
                      that you don't fully understand, as this could affect your device's functionality
                      or network connectivity."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Troubleshooting
              </Typography>
            }
            secondary={
              <>
                If you encounter any issues after changing network modes, try
                restarting your device. If the problem persists, you can perform
                a network reset, but be aware that this will also reset your
                Wi-Fi networks and Bluetooth connections.
                <br />
                <Link
                  href="https://www.wikihow.com/Reset-Network-Settings-on-Android"
                  target="_blank"
                  rel="noopener"
                >
                  Learn more about network reset
                </Link>
              </>
            }
          />
        </ListItem>
      </List>

      <Typography variant="h5" component="h2" color="text.primary" gutterBottom>
        Understanding Network Modes
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        Here's a breakdown of common network modes and their differences:
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            component="h4"
            color="text.primary"
            gutterBottom
          >
            5G (NR)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The latest generation of cellular network technology, offering the
            fastest speeds and lowest latency. However, 5G coverage can be
            limited, and it may consume more battery power.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            component="h4"
            color="text.primary"
            gutterBottom
          >
            LTE (4G)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A widely available and reliable network technology offering good
            speeds and decent coverage. It generally provides a good balance
            between speed and battery life.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            component="h4"
            color="text.primary"
            gutterBottom
          >
            3G (UMTS, HSPA, HSPA+)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            An older generation of network technology that is still available in
            many areas. It offers decent speeds but may not be as reliable or
            widely available as 4G/LTE.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            component="h4"
            color="text.primary"
            gutterBottom
          >
            2G (GSM, EDGE, GPRS)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The oldest generation of cellular network technology, offering the
            slowest speeds and most basic functionality. It is mainly used for
            voice calls and text messages in areas with limited coverage.
          </Typography>
        </Grid>
      </Grid>

      <Typography
        variant="h6"
        component="h4"
        color="text.primary"
        gutterBottom
        sx={{ mt: 2 }}
      >
        5G vs. NR
      </Typography>
      <Typography variant="body2" color="text.secondary">
        While often used interchangeably, 5G and NR (New Radio) are not exactly
        the same. 5G is a general term for the fifth generation of cellular
        network technology, while NR is the specific radio access technology
        used for 5G networks.
      </Typography>

      <Typography
        variant="h6"
        component="h4"
        color="text.primary"
        gutterBottom
        sx={{ mt: 2 }}
      >
        4G vs. LTE
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Similar to 5G and NR, 4G and LTE are often used interchangeably, but
        there's a subtle difference. 4G is a general term for the fourth
        generation of cellular network technology, while LTE (Long Term
        Evolution) is a specific standard within 4G.
      </Typography>

      <Typography
        variant="h6"
        component="h4"
        color="text.primary"
        gutterBottom
        sx={{ mt: 2 }}
      >
        3G, HSPA, and Other 3G Technologies
      </Typography>
      <Typography variant="body2" color="text.secondary">
        3G encompasses various technologies, including UMTS (Universal Mobile
        Telecommunications System), HSPA (High-Speed Packet Access), and HSPA+.
        These technologies offer different speeds and capabilities within the 3G
        standard.
      </Typography>

      <Typography
        variant="h5"
        component="h2"
        color="text.primary"
        gutterBottom
        sx={{ mt: 4 }}
      >
        Download Now
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        Get Network Mode Selector on the Google Play Store or GitHub and take
        control of your network connection!
      </Typography>

      <Grid container spacing={2} justifyContent="space-around">
        {" "}
        <Grid item>
          <Link
            href="https://play.google.com/store/apps/details?id=dev.aingaran.networkmodeselector"
            target="_blank"
            rel="noopener"
            onClick={() =>
              trackEvent("Link", "Click", "Play Store - Network Mode Selector")
            }
          >
            <Button
              variant="outlined"
              disableElevation={true}
              sx={buttonSX}
              color="primary"
              startIcon={<GooglePlay />}
            >
              Download from Play Store
            </Button>
          </Link>
        </Grid>
        <Grid item>
          {" "}
          <Link
            href="https://github.com/eaingaran/network-mode-selector/releases"
            target="_blank"
            rel="noopener"
            onClick={() =>
              trackEvent("Link", "Click", "GitHub - Network Mode Selector")
            }
          >
            <Button
              variant="outlined"
              disableElevation={true}
              sx={buttonSX}
              color="primary"
              startIcon={<GitHubIcon />}
            >
              Download from GitHub
            </Button>
          </Link>
        </Grid>
      </Grid>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
        NOTE: While Network Mode Selector works reliably in most cases, it's
        important to note that Android may not always honor the selected network
        mode, especially on newer versions. This is because Android has the
        ability to override user preferences to optimize network connectivity.
        However, in almost all scenarios, the app will function as expected.
      </Typography>
    </Container>
  );
};

export default NetworkModeSelector;
