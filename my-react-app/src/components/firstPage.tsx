import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Pagination, TextField } from "@mui/material";
import Footer from "./footer";
import "../App.css";

function FirstPage() {
  return (
    <>
      <Box display="grid" alignItems="center" gap={4}>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Box display="block" textAlign="center">
          <Button href="/signUp" variant="contained">
            Sign Up
          </Button>
          <Button href="/signIn" variant="outlined">
            Sign In
          </Button>
        </Box>
      </Box>
    </>
  );
}
export default FirstPage;
