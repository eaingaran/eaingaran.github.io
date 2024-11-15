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

const GhAgentCloudRun: React.FC = () => {
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
          GitHub Self-hosted Agent for Cloud Run
        </Typography>
      </Box>

      <Typography variant="body1" paragraph color="text.secondary">
        A solution for running scalable and cost-efficient GitHub self-hosted
        runners on Google Cloud Run.
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
        GitHub self-hosted runners offer greater control and flexibility
        compared to GitHub-hosted runners. However, managing your own
        infrastructure can be challenging. This project leverages Cloud Run to
        provide a scalable and cost-effective solution for running self-hosted
        runners.
      </Typography>

      <Typography variant="h5" component="h2" color="text.primary" gutterBottom>
        How it Works
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Cloud Run Service
              </Typography>
            }
            secondary="Deploys as a Cloud Run service, ensuring automatic scaling and efficient resource utilization."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Webhook Integration
              </Typography>
            }
            secondary="Responds to webhook calls from GitHub when a workflow is triggered."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Dynamic Agent Provisioning
              </Typography>
            }
            secondary="Sets up a Cloud Run instance as a self-hosted agent when needed, eliminating the need for constantly running VMs."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Efficient Job Execution
              </Typography>
            }
            secondary="Executes the GitHub workflow job on the provisioned agent."
          />
        </ListItem>
      </List>

      <Typography variant="h5" component="h2" color="text.primary" gutterBottom>
        Benefits
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Scalability
              </Typography>
            }
            secondary="Automatically scales to meet your workflow demands, ensuring efficient resource utilization."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Cost-effectiveness
              </Typography>
            }
            secondary="Only pay for the resources consumed during job execution, reducing idle costs."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Simplified Management
              </Typography>
            }
            secondary="Leverages Cloud Run's managed infrastructure, minimizing maintenance overhead."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Enhanced Control
              </Typography>
            }
            secondary="Provides greater control over your build environment compared to GitHub-hosted runners."
          />
        </ListItem>
      </List>

      <Typography variant="h5" component="h2" color="text.primary" gutterBottom>
        Drawbacks
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                Execution Time Limit
              </Typography>
            }
            secondary="Cloud Run imposes an execution time limit on requests - 3600s, which can be a constraint for long-running jobs. It can be mitigated by splitting long-running tasks into smaller tasks."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.primary">
                OS-Specific Requirements
              </Typography>
            }
            secondary="If your builds have specific operating system requirements, it might be challenging or impossible to meet them with Cloud Run's containerized environment."
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
        Visit the GitHub repository to learn more and deploy your own
        self-hosted agents on Cloud Run.
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Link
            href="https://github.com/eaingaran/gh-agent-cloudrun"
            target="_blank"
            rel="noopener"
            onClick={() =>
              trackEvent("Link", "Click", "GitHub - gh-agent-cloudrun")
            }
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

export default GhAgentCloudRun;
