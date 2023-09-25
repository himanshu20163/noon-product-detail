import { Box } from '@chakra-ui/react'
import React from 'react'
import hp from "../Leftpart/image/hp.png"
import Topbar from './Filterbar/Topbar'
import Filterproductbox from './Filterproductbox/Filterproductbox'

const Rightpanel = () => {
  return (
    <div className='Allproducts'>
      <Box>
        <img src={hp} />
        <Topbar />
        <Filterproductbox />
      </Box>
    </div>
  )
}

export default Rightpanel