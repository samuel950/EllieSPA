import { Box, Button, Typography } from "@mui/material";
import type { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: 800,
          alignItems: "center",
        }}
      >
        {/* typo box start*/}
        <Box sx={{ marginTop: "200px" }}>
          <Typography
            align="center"
            variant="h2"
            sx={{
              color: "white",
              fontSize: "80px",
              fontWeight: 600,
              letterSpacing: ".4rem",
            }}
          >
            GREEN PRO
          </Typography>
          <Typography
            align="center"
            sx={{ color: "white", fontSize: "25px", letterSpacing: ".001rem" }}
          >
            LANDSCAPING AND GARDEN SERVICE, LLC
          </Typography>
          <Typography align="center" sx={{ marginTop: "5px", color: "white" }}>
            Serving the Hendersonville and Surrounding Areas Since XXXX
          </Typography>
        </Box>
        {/* typo box end*/}
        {/* button box start*/}
        <Box
          width={800}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "75px",
            alignContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              color: "green",
              backgroundColor: "white",
              fontSize: 16,
              width: 250,
              "&:hover": {
                backgroundColor: "white",
                textDecorationLine: "underline",
              },
            }}
          >
            New Training!
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "green",
              backgroundColor: "white",
              fontSize: 16,
              width: 250,
              "&:hover": {
                backgroundColor: "white",
                textDecorationLine: "underline",
              },
            }}
          >
            Google Reviews
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "green",
              backgroundColor: "white",
              fontSize: 16,
              width: 250,
              "&:hover": {
                backgroundColor: "white",
                textDecorationLine: "underline",
              },
            }}
          >
            HomeAdvisor Reviews
          </Button>
        </Box>
        {/* button box end*/}
      </div>
      <div style={{ height: 400, backgroundColor: "white" }}></div>
    </>
  );
}
