import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { border } from "@mui/system";
import Chip from "@mui/material/Chip";

export default function Profile() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ marginTop: "4rem", marginLeft: "5rem" }}>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            height="200"
            image="https://picsum.photos/400/300"
            alt="profile picture"
          />
        </Card>
        <Divider
          textAlign="left"
          style={{ marginTop: "4rem", maxWidth: "18.75rem" }}
        >
          Work
        </Divider>
        <Container>
          <Typography>
            <h3>
              Facebook
              <Chip
                label="primary"
                color="primary"
                style={{ marginLeft: "1rem" }}
              />
            </h3>
            <p>Senior Developer</p>
            <p>Data analyst</p>
          </Typography>
        </Container>
        <Container style={{ marginTop: "2rem" }}>
          <Typography>
            <h3>
              Google
              <Chip
                label="secondary"
                color="secondary"
                style={{ marginLeft: "1rem" }}
              />
            </h3>
            <p>Fullstackk developer</p>
            <p>Backend specialist</p>
          </Typography>
        </Container>
      </Container>
    </React.Fragment>
  );
}
