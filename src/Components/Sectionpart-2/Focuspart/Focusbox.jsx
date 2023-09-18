import { Box, Image } from "@chakra-ui/react";
import React from 'react'
import focusbanner from "./banner.png"

import kitchen from "./kitchen.png"
const Focusbox =  ()=> {
    const property = {
      imageUrl: 'https://bit.ly/2Z4KKcF',
    }
  
    return (
      <Box >
       <Box >
  <Image src={focusbanner} alt='Dan Abramov' height="230" width="250"/>
  <br/>
  <Image src={kitchen} alt='Dan Abramov' height="230" width="250"/>
</Box>
      </Box>
    )
  }

  export default Focusbox;