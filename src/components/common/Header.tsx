import { Home as HomeIcon, Info as InfoIcon } from "@mui/icons-material";
import { Box, Container, Grid, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { trackEvent } from "utils/analytics";

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();

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
          top: 0,
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
            <Tooltip
              describeChild
              title="Home Page"
              arrow={true}
              placement="bottom"
              componentsProps={componentsProps}
            >
              <HomeIcon
                sx={{ mx: 1, color: "text.primary" }}
                onClick={() => {
                  trackEvent("Link", "Click", "Home");
                  navigate("/");
                }}
                fontSize="large"
              />
            </Tooltip>

            <Tooltip
              describeChild
              title="About Page"
              arrow={true}
              placement="bottom"
              componentsProps={componentsProps}
            >
              <InfoIcon
                sx={{ mx: 1, color: "text.primary" }}
                onClick={() => {
                  trackEvent("Link", "Click", "About");
                  navigate("/about");
                }}
                fontSize="large"
              />
            </Tooltip>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Header;
