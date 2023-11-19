import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
//import "../App.css";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#A480CF",
        p: 6,
        mb: "-100rem",
        ml: 0,
        mr: 0,
        borderRadius: 5,
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="white" align="center">
          {"Copyright © "}
          <Link color="inherit" href="Diaspora hub">
            Diaspora hub
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}
