import Box from "@mui/material/Box";
import { alpha, createTheme } from "@mui/material/styles";

const black = "#000000";
const darkOpaque = alpha(black, 0.66);
export default function Banner(): JSX.Element {
  return (
    <Box
      sx={{
        height: 300,
        alignContent: "center",
        width: "500px",
      }}
    >
      <img
        style={{
          width: "15%",
          minWidth: "400px",
          alignSelf: "left",
          justifyContent: "center",
          border: "2px solid black",
          marginTop: "25px",
        }}
        src="greenprobannerlogo.jpg"
        alt="Green Pro Landscaping and Garden Service, LLC Logo"
      />
    </Box>
  );
}
