import { Box,Breadcrumb,BreadcrumbItem,BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'
import lorel from "../images/lorel.jpg"

const Productimage = () => {
  return (
    <div style={{width:"35%"}}>
        
       <Box>
        <img src={lorel} />
       </Box>
    </div>
  )
}

export default Productimage