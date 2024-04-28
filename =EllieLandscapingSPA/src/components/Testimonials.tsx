import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";

const items = [
  {
    name: "Teresa D.",
    description:
      "Leo and Ellie were great! They were very timely and on-top of things! As soon as I hired them, they ordered the materials and got to work asap. Very happy with their communication and the finished product! Thanks!",
  },
  {
    name: "Deborah D.",
    description:
      "Leo and Ellie do amazing work. Honest, efficient, flexible, and our yard has never looked better! I highly recommend them for any landscaping, yard, or haul off needs.",
  },
  {
    name: "Brandon K.",
    description:
      "My wife and I called and had them give us a quote.  Elly answered and we set up a time for them to look at what we needed.  She communicated very well throughout whole job.  Leo is a hard worker and did excellent job in getting sod perfect. He filled and smoothed multiple times.  We were very happy with the experience and would use them again!",
  },
  {
    name: "Patti F.",
    description:
      "They are wonderful people. Leo is a great help and does a magnificent job every time. He stays and works until the job is done. Near perfection every time. I highly recommend Leo.",
  },
  {
    name: "Russell F.",
    description:
      "They are wonderful and Leo and Ellie did everything we asked for and beyond. It makes me smile to look outside now. Very kind and so good to us ",
  },
  {
    name: "Dolorez K.",
    description:
      "They are just wonderful to work with! They made my yard look great after someone else made a mess of my yard!",
  },
  {
    name: "Ashley L.",
    description:
      "GreenPro Landscaping was great! We had a side portion of our driveway filled with gravel and a border put in for erosion control. They were timely in coming to our house, professional, and most importantly dependable! They even filled a small portion of our ditch with gravel for erosion prevention that was not part of our project or in our estimate and did so just because it was a problem they foresaw. I will most definitely use this company again in the future.",
  },
];

export default function Testimonials(): JSX.Element {
  return (
    <>
      <Typography
        align="center"
        variant="h2"
        sx={{
          color: "#00a650",
          fontWeight: 600,
          marginBottom: "50px",
          marginTop: "60px",
        }}
      >
        Our Testimonials
      </Typography>
      <Carousel
        fullHeightHover={false}
        navButtonsAlwaysVisible={true}
        sx={{ justifyContent: "center" }}
        navButtonsWrapperProps={{ style: { top: "unset", bottom: 10 } }}
        indicatorContainerProps={{ style: { marginTop: "10px" } }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
}

function Item(props): JSX.Element {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        height: 300,
        backgroundColor: "#00a650",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "10px",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            color: "white",
            marginLeft: "10px",
            marginTop: "-1px",
            width: "150px",
          }}
        >
          {props.item.name}
        </h2>
        <img
          src="5-star-rating.png"
          style={{
            width: "25%",
            marginLeft: "25px",
            marginTop: "-25px",
          }}
        />
      </div>

      <p
        style={{
          color: "white",
          fontSize: "20px",
          marginLeft: "10px",
          marginTop: "-1px",
        }}
      >
        {props.item.description}
      </p>
    </Paper>
  );
}
