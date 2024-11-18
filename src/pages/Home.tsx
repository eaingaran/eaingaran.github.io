import { Typography, Box, keyframes, styled } from "@mui/material";
import { useEffect, useState } from "react";

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

const Cursor = styled("span")({
  animation: `${blink} 600ms infinite steps(1)`,
});

const Home = () => {
  const [tag, setTag] = useState("");
  const [tagArrayIndex, setTagArrayIndex] = useState(0);
  const [tagIndex, setTagIndex] = useState(0);
  const [mode, setMode] = useState("typing");

  useEffect(() => {
    const tagArray = [
      "Problem Solver.",
      "Architect.",
      "Engineer.",
      "Leader.",
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
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          color="primary"
          align="center"
          sx={{
            fontSize: "clamp(2rem, 8vw, 8rem)",
          }}
        >
          Aingaran Elango
        </Typography>
        <Typography variant="h4" />
        <Typography
          variant="h5"
          color="text.secondary"
          align="center"
          sx={{
            fontSize: "clamp(1rem, 5vw, 5rem)",
          }}
        >
          {`<${tag}`}
          <Cursor>|</Cursor>
          {" />"}
        </Typography>
      </Box>
    </>
  );
};

export default Home;
