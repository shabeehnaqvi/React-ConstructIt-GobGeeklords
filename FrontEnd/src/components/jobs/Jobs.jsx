import React, { useEffect, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
function Jobs() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    console.log("=======");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log("=======", cards);
        setCards(data);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h3">
                        Bid:${card.id}
                      </Typography>
                      <Typography>{card.title}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="medium">Accept</Button>
                      <Button size="medium">Reject</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </ThemeProvider>
      </>
    </div>
  );
}

export default Jobs;
