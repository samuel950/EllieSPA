import Box from "@mui/material/Box";
import { alpha, createTheme } from "@mui/material/styles";

const black = "#000000";
const darkOpaque = alpha(black, 0.66);
export default function Banner(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: darkOpaque, flexDirection: "row" }}>
      <img
        style={{ width: "30%", minWidth: "200px", alignSelf: "left" }}
        src="greenprologo.png"
        alt="Green Pro Landscaping and Garden Service, LLC Logo"
      />
    </Box>
  );
}
