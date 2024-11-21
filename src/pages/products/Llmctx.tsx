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
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { buttonSX } from "utils/buttons";
import { tooltipComponentsProps } from "utils/tooltip";
import { trackEvent } from "utils/analytics";

const Llmctx: React.FC = () => {
  const navigate = useNavigate();
  const tooltipProps = tooltipComponentsProps();

  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
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
          llmctx
        </Typography>
      </Box>

      <Typography variant="body1" paragraph color="text.secondary">
        A command-line tool that helps you prepare your source code for use with
        large language models (LLMs).
      </Typography>

      <Typography
        variant="h5"
        component="h2"
        color="text.primary"
        gutterBottom
        sx={{ mt: 4 }}
      >
        Why You Need This
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        When working with LLMs, providing context is crucial. `llmctx`
        simplifies this by bundling your entire project's source code into a
        single file, making it easy to feed to an LLM for analysis, question
        answering, or code generation.
      </Typography>

      <Typography variant="h5" component="h2" color="text.primary" gutterBottom>
        Features
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Exclusion
              </Typography>
            }
            secondary="Exclude specific files and folders (e.g., target, node_modules, .git)"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Output
              </Typography>
            }
            secondary="Specify the output file name."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Clipboard
              </Typography>
            }
            secondary="Copy the output directly to the clipboard."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Compact Output
              </Typography>
            }
            secondary="Remove new lines and tabs for a more concise representation."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Customizable Input
              </Typography>
            }
            secondary="Process any directory you want."
          />
        </ListItem>
      </List>

      <Typography
        variant="h5"
        component="h2"
        color="text.primary"
        gutterBottom
        sx={{ mt: 4 }}
      >
        Get Started
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        Visit the GitHub repository to learn more and download the latest
        release.
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Link
            href="https://github.com/eaingaran/llmctx"
            target="_blank"
            rel="noopener"
            onClick={() => trackEvent("Link", "Click", "GitHub - llmctx")}
          >
            <Button
              variant="outlined"
              disableElevation={true}
              sx={buttonSX}
              color="primary"
              startIcon={<GitHubIcon />}
            >
              Visit GitHub Repository
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Llmctx;
