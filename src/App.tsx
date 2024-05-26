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
          minHeight: "100vh",
          maxHeight: "100vh",
          width: "100vw",
          flexDirection: "column",
        }}
      >
        <Header />
        <Box
          component="main"
          sx={{
            bgcolor: "background.default",
            display: "flex",
            width: "100vw",
            position: "relative",
            mt: "61px",
            minHeight: "calc(100vh - 122px)",
            maxHeight: "calc(100vh - 122px)",
            flexGrow: 1,
            flexDirection: "column",
            alignItems: "center",
            overflow: "auto",
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
