import { Box, Button, Typography } from "@mui/material";
import type { ReactElement } from "react";
import Testimonials from "../components/Testimonials";
import ServiceCard from "../components/ServiceCard";
import Banner from "../components/Banner";
import TrainingPopup from "../components/TrainingPopup";
import { NavLink } from "react-router-dom";

export default function Home(): ReactElement {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: 700,
          alignItems: "center",
          minWidth: "550px",
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
            Serving Residential & Commercial Customers in the Hendersonville and Surrounding Areas Since 2016
          </Typography>
        </Box>
        {/* typo box end*/}
        {/* button box start*/}
        <Box
          width={525}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "75px",
            alignContent: "center",
          }}
        >{/*<Button
        variant="contained"
        sx={{
          color: "#00a650",
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
      </Button>*/}
          <TrainingPopup></TrainingPopup>
          <Button
            variant="contained"
            component={NavLink}
            to='/contact-us'
            sx={{
              color: "#00a650",
              backgroundColor: "white",
              fontSize: 16,
              width: 250,
              "&:hover": {
                backgroundColor: "white",
                textDecorationLine: "underline",
              },
            }}
          >
            Contact Us!
          </Button>
        </Box>
        {/* button box end*/}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: 700,
          alignItems: "center",
          minWidth: "550px",
          backgroundColor: "white",
        }}
      >
        <Box sx={{ width: 500, alignContent: "center" }}>
          <Testimonials></Testimonials>
        </Box>
        <Box
          width={525}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "50px",
            alignContent: "center",
          }}
        >
          <Button
            href="https://maps.app.goo.gl/EsM5v68HN54i6HCw8"
            target="_blank"
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#00a650",
              fontSize: 16,
              width: 250,
              "&:hover": {
                backgroundColor: "#00a650",
                textDecorationLine: "underline",
              },
            }}
          >
            Google Reviews
          </Button>
          <Button
            href="https://www.homeadvisor.com/rated.GreenPearlLandscapeand.124916293.html"
            target="_blank"
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#00a650",
              fontSize: 16,
              width: 250,
              "&:hover": {
                backgroundColor: "#00a650",
                textDecorationLine: "underline",
              },
            }}
          >
            HomeAdvisor Reviews
          </Button>
        </Box>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: 1100,
          alignItems: "center",
          minWidth: "550px",
        }}
      >
        <Typography
          align="center"
          variant="h2"
          sx={{
            color: "white",
            fontWeight: 600,

            marginTop: "60px",
          }}
        >
          Our Services
        </Typography>
        <div style={{ width: "600px", marginBottom: "50px" }}>
          <Typography align="center" sx={{ color: "white" }}>
            All of our services are available in Hendersonville, Fletcher,
            Arden, Mills River, Saluda, Etowah, Dana, & Edneyville. In Buncombe,
            Rutherford, & Polk County we only offer our more extensive services
            such as retaining walls and flat stone work.
          </Typography>
          <Typography
            align="center"
            sx={{
              fontSize: "20px",
              color: "white",
              textDecoration: "underline",
              fontWeight: 800,
            }}
          >
            Please contact us to learn more!
          </Typography>
        </div>
        <ServiceCard></ServiceCard>
      </div>
      <div style={{ backgroundColor: "white", height: 300 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "horizontal",
            marginLeft: "11%",
           
            
          }}
        >
          <Banner></Banner>
          <Box sx={{ marginTop: "40px", minWidth: "300px" , marginLeft: '5%'}}>
            <Typography variant="h5" color="#00a650">
              Contact Information
            </Typography>
            <Typography
              color="#00a650"
              sx={{ fontSize: "14px"}}
            >
              • (EN/ES) 828-551-5284 - Ellie
            </Typography>
            <Typography
              color="#00a650"
              sx={{ fontSize: "14px"}}
            >
              • (ES) 828-551-5284 - Leo
            </Typography>
            <Typography
              color="#00a650"
              sx={{ fontSize: "14px"}}
            >
              • greenprolandscaping0@gmail.com
            </Typography>
          </Box>
          <Box 
            sx={{ marginTop: "40px", minWidth: "300px", marginLeft: '1%'}}>
            <Typography align="center" variant="h5" color="#00a650">
              Business Hours
            </Typography>
            <Box sx={{display: 'flex', flexDirection: 'horizontal', marginLeft: '17px'}}>
              <Box>
                <Typography
                  color="#00a650"
                  sx={{ fontSize: "14px", marginLeft: "50px" }}
                >
                  • MON
                </Typography>
                <Typography
                  color="#00a650"
                  sx={{ fontSize: "14px", marginLeft: "50px" }}
                >
                  • TUE
                </Typography>
                <Typography
                  color="#00a650"
                  sx={{ fontSize: "14px", marginLeft: "50px" }}
                >
                  • WED
                </Typography>
                <Typography
                  color="#00a650"
                  sx={{ fontSize: "14px", marginLeft: "50px" }}
                >
                  • THU
                </Typography>
                <Typography
                  color="#00a650"
                  sx={{ fontSize: "14px", marginLeft: "50px" }}
                >
                  • FRI
                </Typography>
                <Typography
                  color="#00a650"
                  sx={{ fontSize: "14px", marginLeft: "50px" }}
                >
                  • SAT
                </Typography>
                <Typography
                  color="#00a650"
                  sx={{ fontSize: "14px", marginLeft: "50px" }}
                >
                  • SUN
                </Typography>
              </Box>
              <Box sx={{marginLeft: '3px'}}>
                <Typography 
                  color='#00a650' 
                  sx={{fontSize: '14px'}}>
                    | 9:00 AM - 5:00 PM
                </Typography>
                <Typography 
                  color='#00a650' 
                  sx={{fontSize: '14px'}}>
                    | 9:00 AM - 5:00 PM
                </Typography>
                <Typography 
                  color='#00a650' 
                  sx={{fontSize: '14px'}}>
                    | 9:00 AM - 5:00 PM
                </Typography>
                <Typography 
                  color='#00a650' 
                  sx={{fontSize: '14px'}}>
                    | 9:00 AM - 5:00 PM
                </Typography>
                <Typography 
                  color='#00a650' 
                  sx={{fontSize: '14px'}}>
                    | 9:00 AM - 5:00 PM
                </Typography>
                <Typography 
                  color='#00a650' 
                  sx={{fontSize: '14px'}}>
                    | Closed
                </Typography>
                <Typography 
                  color='#00a650' 
                  sx={{fontSize: '14px'}}>
                    | Closed
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Typography
          align="center"
          sx={{ backgroundColor: "white", color: "gray" }}
        >
          Copyright © 2024 Green Pro Landscaping and Garden Service, LLC - All
          Rights Reserved
        </Typography>
      </div>
    </>
  );
}
