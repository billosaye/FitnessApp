import { Box } from '@mui/material'
import React from 'react'
import  HeroBanner  from '../Components/HeroBanner';
import SearchExercises from '../Components/SearchExercises';
import Exercises  from '../Components/Exercises';


export default function Home() {
  return (
  <Box>
    <HeroBanner  />
    <SearchExercises />
    <Exercises />
  </Box>
  )
}
