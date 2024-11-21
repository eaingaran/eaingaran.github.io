import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "utils/analytics";
import { useTheme } from "@mui/material/styles";

const Products: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const products = [
    {
      name: "Network Mode Selector",
      description: "Take control of your network connection mode.",
      link: "/products/network-mode-selector",
      image: `/assets/products/network-mode-selector/${theme.palette.mode}/icon.webp`,
      year: 2024,
      tags: ["Android", "Utility"],
    },
    {
      name: "CloudRun GitHub Agent",
      description:
        "Run your GitHub Actions with self-hosted runners on Google Cloud Run for scalability and cost-efficiency.",
      link: "/products/gh-agent-cloud-run",
      image: `/assets/products/gh-agent-cloud-run/${theme.palette.mode}/icon.webp`,
      year: 2022,
      tags: ["DevOps", "Cloud", "Cost Saving"],
    },
    {
      name: "llmctx",
      description:
        "Prepare your source code for use with large language models (LLMs).",
      link: "/products/llmctx",
      image: `/assets/products/llmctx/icon.webp`,
      year: 2024,
      tags: ["DevTools", "LLM", "CLI", "Rust"],
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <Typography
        variant="h2"
        component="h1"
        align="center"
        color="primary"
        gutterBottom
      >
        My Apps
      </Typography>

      <Grid container spacing={3} alignItems="stretch" justifyContent="center">
        {products.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={product.name}
            display="flex"
            justifyContent="center"
          >
            <Card
              sx={{
                maxWidth: 345,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 3,
                },
                display: "flex",
                flexDirection: "column",
              }}
              onClick={() => {
                trackEvent("Card", "Click", product.name);
                navigate(product.link);
              }}
            >
              {product.image && (
                <img
                  src={product.image}
                  alt={`${product.name} app icon`}
                  style={{ width: "100%" }}
                  loading="lazy"
                />
              )}
              <CardContent>
                <Typography variant="h6" component="h3" color="text.primary">
                  {product.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Created in {product.year}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2 }}
                >
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: "auto" }}>
                {product.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" sx={{ ml: 1 }} />
                ))}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
