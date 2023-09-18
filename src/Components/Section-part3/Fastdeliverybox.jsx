import React from 'react'
import deliver from "../images/banner.png"
import { Box } from '@chakra-ui/react'

const Fastdeliverybox = () => {
  return (
    <div style={{margin:"0px auto",backgroundColor:"#fff",width:"94%"}} >
        <Box style={{display:"flex"}}>
            <img src={deliver} style={{margin:"1em 1em",width:"42em"}}/>
            <img src={deliver} style={{margin:"1em 1em",width:"42em"}}/>
        </Box>
       
    </div>
  )
}

export default Fastdeliverybox