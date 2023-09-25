import { Box, Badge } from '@chakra-ui/react'
import React, { useState } from 'react'
import Heart from "react-animated-heart";
// import Productone from "./products-one.jpg";

const Singleproduct = (props) => {

  const [isClick, setClick] = useState(false);

  return (
    <Box style={{ margin: "10px",width:"20%" }} boxShadow='xl' p={6}>
      <Box style={{ display: "flex", justifyContent: "space-between", height: "50px", alignItems: "center" }}>
        <Badge borderRadius='full' px='2' colorScheme='teal' style={{ height: "fit-content",background:"gray",color:"#fff" }}>
          Best Seller
        </Badge>
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} styles={{ height: "100px", marginTop: "5px"}} />
      </Box>

      <Box >
        <img src={props.image} width="100%" />
        <h6>XiuWoo 3300-Piece Small
          Colourful Bracelet Beads Wit…</h6>
        <p>AED <b>17.60</b></p>
      </Box>
      <Box style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
        <Badge borderRadius='full' px='2' colorScheme='teal' style={{ height: "fit-content", backgroundColor: "yellow", fontStyle: "italic" }}>
          express
        </Badge>
        <Box style={{display:"flex"}}>
          <Badge borderRadius='full' px='2' colorScheme='teal' style={{ height: "fit-content", backgroundColor: "yellow", fontStyle: "italic" }}>
            {props.rating}
          </Badge>
          (4.2k)
        </Box>
      </Box>
    </Box>
  )
}

export default Singleproduct