import { Typography, Grid, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", py: 10 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h1" gutterBottom color="text.primary">
            Oooops!
          </Typography>
          <Typography variant="h5" color="text.secondary">
            I couldn't find what you are lookin' for...
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" onClick={() => navigate("/")}>
            Return Home?
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PageNotFound;
