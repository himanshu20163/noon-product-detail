import { Box, Image } from "@chakra-ui/react";
import React from 'react'

const Reasonbox =  ()=> {
    const property = {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'top rated ',
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 4,
      description:"get the best products"
    }
  
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' className="topbox">
        <Image src={property.imageUrl} alt={property.imageAlt} height="120" width="100%"/>
        <Box p='6' style={{backgroundColor:"lightgray"}}>
          <Box display='flex' alignItems='baseline'>
          </Box>
           <h1 style={{fontSize:"21px"}}>{property.title}</h1> 
            <p style={{fontSize:"14px"}}>{property.description}</p>
          {/* </Box> */}
        </Box>
      </Box>
    )
  }

  export default Reasonbox;