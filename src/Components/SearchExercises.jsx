import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import fetchExercisesData from "../Utils/fetchExercisesData";


const Title = () => (
  <Typography
    fontWeight={700}
    sx={{ fontSize: { lg: "44px", xs: "30px" } }}
    marginBottom="20px"
    textAlign="center"
  >
    Awesome Exercises <br /> You Should Know
  </Typography>
);

const SearchExercises = () => {
  const [search, setSearch] = useState("");

  // Function to handle search click
  const handleSearch = async () => {
   if (search) { // Checks if there is any text in the search state before making a request. If the input is empty, nothing happens.
      console.log("Fetching data...");
      await fetchExercisesData(); // Call the fetch function and waits for the promise to resolve.
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center" p="20px">
      <Title />
      <Box position="relative" mb="20px">
        <TextField
          sx={{
            input: { fontWeight: "700" },
            width: { lg: "1000px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercise"
          type="text"
        />

        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
            "&:hover": {
              bgcolor: "#ffffff",
            },
          }}
          onClick={handleSearch} // Call the search handler when clicked
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
