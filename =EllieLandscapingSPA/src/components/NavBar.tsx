/* eslint-disable @typescript-eslint/no-magic-numbers */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

const pages = [
  "Home",
  "Residential Services",
  "Commercial Services",
  "Contact Us",
];
const theme = createTheme({
  palette: {
    primary: {
      main: "#e6ccf7",
    },
    secondary: {
      main: "#05a84d",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 448,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function GetLink(string_: string): string {
  switch (string_) {
    case "Home": {
      return "/home";
    }
    case "Residential Services": {
      return "/residential";
    }
    case "Commerical Services": {
      return "/commercial";
    }
    case "Contact Us": {
      return "/contact";
    }
    default: {
      return "/home";
    }
  }
}

export default function ResponsiveAppBar(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <AppBar color="secondary" sx={{ position: "sticky" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* for expanded navbar buttons */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  component={RouterLink}
                  to={GetLink(page)}
                  key={page}
                  sx={{
                    my: 1,
                    color: "white",
                    display: { xs: "flex", sm: "inline" },
                    textAlign: "center",
                    fontSize: 18,
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
