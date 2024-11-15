import React from "react";
import { Typography, Container, Grid, Card, CardContent } from "@mui/material";
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
    },
    {
      name: "GitHub Agent on CloudRun",
      description:
        "Run your GitHub Actions with self-hosted runners on Google Cloud Run for scalability and cost-efficiency.",
      link: "/products/gh-agent-cloud-run",
      image: `/assets/products/gh-agent-cloud-run/${theme.palette.mode}/icon.webp`,
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography
        variant="h2"
        component="h1"
        align="center"
        color="primary"
        gutterBottom
      >
        My Apps
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.name}>
            {" "}
            <Card
              sx={{
                maxWidth: 200,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 3,
                },
              }}
              onClick={() => {
                trackEvent("Card", "Click", product.name);
                navigate(product.link);
              }}
            >
              {product.image && (
                <img
                  src={product.image}
                  alt={`${product.name} screenshot`}
                  style={{ width: "100%" }}
                />
              )}
              <CardContent>
                <Typography
                  variant="h6"
                  component="h3"
                  color="text.primary"
                  gutterBottom
                >
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
