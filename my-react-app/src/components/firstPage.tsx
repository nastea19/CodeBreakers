// WelcomePage.tsx
import React from "react";
import { Card, CardContent, Typography, Container, Theme } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { theme } from "./theme";
import { ThemeProvider } from "@emotion/react";

function FirstPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ mt: "8%", textAlign: "center" }}>
        <Card
          sx={{
            borderRadius: 10,
          }}
        >
          <CardContent
            sx={{
              background: "linear-gradient(45deg, #E94057 20%, #8A2387 90%)",
              color: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ p: 3 }}>
              Draga diaspora!
            </Typography>
            <Typography
              variant="body1"
              fontSize="large"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                ml: 5,
                textAlign: "left",
                mt: 2,
              }}
            >
              Suntem încântați să vă avem alături și să creăm împreună un spațiu
              virtual plin de conexiuni, informații și căldură moldovenească.
            </Typography>
            <Typography
              variant="body1"
              fontSize="large"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                ml: 5,
                textAlign: "left",
                mt: 2,
              }}
            >
              Aici, veți găsi nu doar informații utile pentru viața de zi cu zi
              în țara gazdă, ci și o comunitate deschisă, gata să împărtășească
              experiențe, să ofere sfaturi și să creeze legături puternice între
              noi, cei răspândiți în lume.
            </Typography>
            <Box
              display="flex"
              textAlign="center"
              sx={{ justifyContent: "space-evenly", p: 3, mt: 2 }}
            >
              <Button
                href="/signUp"
                variant="contained"
                sx={{ mr: 5 }}
                size="large"
                color="secondary"
              >
                Sign Up
              </Button>
              <Button
                href="/signIn"
                variant="outlined"
                sx={{ ml: 5, border: 3 }}
                size="large"
                color="secondary"
              >
                <strong>Sign In</strong>
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default FirstPage;

// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { ThemeProvider } from "@emotion/react";
// import { theme } from "./theme";

// function FirstPage() {
//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <Box
//           display="grid"
//           alignItems="center"
//           gap={4}
//           sx={{
//             background: "linear-gradient(45deg, #E94057 20%, #8A2387 90%)",
//             height: "100%",
//             p: 10,
//             borderRadius: 10,
//           }}
//         >
//           <Typography
//             variant="h1"
//             fontWeight="xl"
//             fontSize="clamp(1rem, 1rem + 1vw, 3rem)"
//             sx={{ ml: 20, mr: 20 }}
//             color="#FFAE00"
//           >
//             Salutare tuturor dragilor care ne urmăriți pe acest minunat săit
//             dedicat comunității noastre din diaspora! Suntem încântați să vă
//             avem alături și să creăm împreună un spațiu virtual plin de
//             conexiuni, informații și căldură moldovenească.
//           </Typography>
//           <Typography
//             variant="h1"
//             fontWeight="xl"
//             fontSize="clamp(1rem, 1rem + 1vw, 3rem)"
//             sx={{ ml: 20, mr: 20 }}
//             color="#FFAE00"
//           >
//             Aici, veți găsi nu doar informații utile pentru viața de zi cu zi în
//             țara gazdă, ci și o comunitate deschisă, gata să împărtășească
//             experiențe, să ofere sfaturi și să creeze legături puternice între
//             noi, cei răspândiți în lume.
//           </Typography>
//           <Box display="block" textAlign="center" sx={{ p: 10 }}>
//             <Button
//               href="/signUp"
//               variant="contained"
//               sx={{ mr: 5 }}
//               size="large"
//               color="secondary"
//             >
//               Sign Up
//             </Button>
//             <Button
//               href="/signIn"
//               variant="outlined"
//               sx={{ ml: 5 }}
//               size="large"
//               color="secondary"
//             >
//               Sign In
//             </Button>
//           </Box>
//         </Box>
//       </ThemeProvider>
//     </>
//   );
// }
// export default FirstPage;
