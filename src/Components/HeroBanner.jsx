import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import HeroBannerImage from "../assets/images/banner.png";

export default function HeroBanner() {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Ratego Athletics
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="3px"
        mt="13px"
      >
       Stronger Together,
        <br />
        Always.
      </Typography>
      <Typography
        fontSize="22px"
        fontFamily="Alegreya"
        lineHeight="35px"
        mb={3}
      >
        Tailor your fitness journey with exercises suited to your lifestyle.
      </Typography>
      <Button variant="contained" color="error">
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        Burn It!
      </Typography>
      <img
        src={HeroBannerImage}
        alt="Hero Banner for Ratego Gymnastics"
        className="hero-banner-img"
      />
    </Box>
  );
}
