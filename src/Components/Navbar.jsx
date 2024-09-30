import { Stack, Link, Box } from "@mui/material";
import React from "react";
import Logo from "../assets/images/Logo.png";

export default function Navbar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
        px: "20px",
      }}
    >
      <Link href="/">
        <Box
          component="img"
          src={Logo}
          alt="logo"
          sx={{
            width: "48px",
            height: "48px",
            margin: "0 20px",
          }} 
        />
      </Link>

      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end"> 
        <Link
          href="/"
          sx={{ 
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <Link
          href="#exercises"
          sx={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
}
