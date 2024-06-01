import { Box } from "@mui/material";
import Footer from "components/common/Footer";
import Header from "components/common/Header";
import Routes from "Routes";

const App = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.default",
          display: "flex",
          minHeight: "100dvh",
          maxHeight: "100dvh",
          width: "100dvw",
          flexDirection: "column",
          transition: "all 0.1s ease-in-out",
        }}
      >
        <Header />
        <Box
          component="main"
          sx={{
            bgcolor: "background.default",
            display: "flex",
            width: "100dvw",
            position: "relative",
            mt: "61px",
            minHeight: "calc(100dvh - 122px)",
            maxHeight: "calc(100dvh - 122px)",
            flexGrow: 1,
            flexDirection: "column",
            alignItems: "center",
            overflow: "auto",
            transition: "all 0.1s ease-in-out",
          }}
        >
          <Routes />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default App;
