/* eslint-disable @typescript-eslint/no-magic-numbers */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider, withStyles } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";

const pages = ["Home", "Contact Us"];
const theme = createTheme({
  palette: {
    primary: {
      main: "#00a650",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 448,
      md: 900,
      lg: 1200,
      xl: 3000,
    },
  },
});

function GetLink(string_: string): string {
  switch (string_) {
    case "Home": {
      return "/home";
    }
    case "Contact Us": {
      return "/contact-us";
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
          <Toolbar disableGutters sx={{ minWidth: "1060px" }}>
            <img
              src="greenprologoedited.png"
              style={{ width: "3.5%", marginLeft: "10%" }}
            />
            <Typography
              variant="h5"
              noWrap
              color="primary"
              sx={{
                ml: 1,

                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
              }}
            >
              GREEN PRO
            </Typography>
            {/* for expanded navbar buttons */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex" },
                justifyContent: "right",
              }}
            >
              {pages.map((page) => (
                <Button
                  variant="text"
                  component={NavLink}
                  to={GetLink(page)}
                  key={page}
                  sx={{
                    my: 1,
                    mx: 2,
                    color: "primary",
                    display: { xs: "flex", sm: "inline" },
                    textAlign: "center",
                    fontSize: 16,
                    fontWeight: 700,
                    "&.active": {
                      textDecorationLine: "underline",
                      fontWeight: "bold",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "470px",
                  marginLeft: "5%",
                }}
              >
                <Typography
                  align="center"
                  noWrap
                  color="primary"
                  sx={{
                    fontSize: "16px",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".1rem",
                    textDecoration: "none",
                  }}
                >
                  (EN/ES) 828-551-5284 | (ES) 828-243-1242
                </Typography>
                <Typography
                  align="center"
                  noWrap
                  color="primary"
                  sx={{
                    fontSize: "16px",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".1rem",
                    textDecoration: "none",
                  }}
                >
                  greenprolandscaping0@gmail.com
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
