import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ServiceCard() {
  return (
    <>
      <Box
        width={1000}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Card sx={{ width: 300 }}>
          <CardMedia sx={{ height: 200 }} image="lawnmowing.jpeg"></CardMedia>
          <CardContent sx={{ height: 100 }}>
            <Typography gutterBottom variant="h5" component="div">
              Lawn Maintenance
            </Typography>
            <Typography variant="body1">
              Grass cutting, weed control, & leaf removal
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: 300 }}>
          <CardMedia sx={{ height: 200 }} image="seeding.jpg"></CardMedia>
          <CardContent sx={{ height: 100 }}>
            <Typography gutterBottom variant="h5" component="div">
              Lawn Enhancement
            </Typography>
            <Typography variant="body1">
              Lawn fertilization, aeration, & seeding
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: 300 }}>
          <CardMedia sx={{ height: 200 }} image="treecutting.jpeg"></CardMedia>
          <CardContent sx={{ height: 100 }}>
            <Typography gutterBottom variant="h5" component="div">
              Tree Services
            </Typography>
            <Typography variant="body1">
              Small and medium tree removal & branch trimming
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box
        width={1000}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "50px",
        }}
      >
        <Card sx={{ width: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="plantedflowers.jpg"
          ></CardMedia>
          <CardContent sx={{ height: 100 }}>
            <Typography gutterBottom variant="h5" component="div">
              Landscape Design
            </Typography>
            <Typography variant="body1">
              Boulder work, rock gardens, & planting of trees/shrubs/plants
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: 300 }}>
          <CardMedia sx={{ height: 200 }} image="lawnsod.jpeg"></CardMedia>
          <CardContent sx={{ height: 100 }}>
            <Typography gutterBottom variant="h5" component="div">
              Landscape Maintenance
            </Typography>
            <Typography variant="body1">
              Pruning and hedging, mulch installation, & sod installation
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: 300 }}>
          <CardMedia sx={{ height: 200 }} image="stonewalkway.jpeg"></CardMedia>
          <CardContent sx={{ height: 100 }}>
            <Typography gutterBottom variant="h5" component="div">
              Stone Masonry
            </Typography>
            <Typography variant="body1">Walkways & retaining walls</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
