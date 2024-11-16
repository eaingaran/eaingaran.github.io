import { Typography, Box, keyframes, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { trackEvent } from "utils/analytics";

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

const Cursor = styled("span")({
  animation: `${blink} 600ms infinite steps(1)`, // Apply blink animation with steps for a crisp on/off effect
});

const Home = () => {
  const [tag, setTag] = useState("");
  const [tagArrayIndex, setTagArrayIndex] = useState(0);
  const [tagIndex, setTagIndex] = useState(0);
  const [mode, setMode] = useState("typing");

  useEffect(() => {
    const tagArray = [
      "Problem Solver.",
      "Cloud Architect.",
      "Engineer.",
      "Developer.",
      "Gamer.",
    ];

    const intervalId = setInterval(() => {
      if (mode === "typing") {
        setTag(tagArray[tagArrayIndex].slice(0, tagIndex));
        setTagIndex((prevIndex) => prevIndex + 1);
        if (tagIndex > tagArray[tagArrayIndex].length - 1) {
          setMode("deleting");
          setTagIndex((prevIndex) => prevIndex - 1);
        }
      }
      if (mode === "deleting") {
        setTag(tagArray[tagArrayIndex].slice(0, tagIndex));
        setTagIndex((prevIndex) => prevIndex - 1);
        if (tagIndex < 1) {
          setMode("typing");
          setTagIndex(0);
          if (tagArrayIndex === tagArray.length - 1) {
            setTagArrayIndex(0);
          } else {
            setTagArrayIndex((prevIndex) => prevIndex + 1);
          }
        }
      }
    }, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, [tagIndex, mode, tagArrayIndex]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 3,
        }}
      >
        <Typography variant="h3" gutterBottom color="primary" align="center">
          Aingaran Elango
        </Typography>
        <Typography variant="h4" />
        <Typography variant="h5" color="text.secondary" align="center">
          {`<${tag}`}
          <Cursor>|</Cursor>
          {" />"}
        </Typography>
      </Box>
      <Box
        component="img"
        sx={{
          maxHeight: `calc(100vh - 300px)`,
          maxWidth: `100vw`,
          mt: 3,
        }}
        alt="I'm Google Cloud Certified Image"
        src="/assets/PCA.webp"
        loading="lazy"
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
      />
    </>
  );
};

export default Home;
