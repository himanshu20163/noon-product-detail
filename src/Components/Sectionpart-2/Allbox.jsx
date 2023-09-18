import React from 'react'
import Reasonbox from './more-reason-shop/Reasonbox'
import "../Sectionpart-2/more-reason-shop/reason.css";
import { Button, ButtonGroup } from '@chakra-ui/react'
import Focusbox from './Focuspart/Focusbox';

const Allbox = () => {
  return (
    <div className='reason-container'>
      <div className='reason-box'>
        <h4>More reasons to shop</h4>
        <div className='reason-allbox'>
          <Reasonbox />
          <Reasonbox />
          <Reasonbox />
          <Reasonbox />
        </div>
      </div>
      <div className="megabox">
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <h4>Mega deals</h4>
        <Button colorScheme='blackAlpha'>All DEALS</Button>
        </div>
        <div className='reason-allbox'>
          <Reasonbox />
          <Reasonbox />
          <Reasonbox />
          <Reasonbox />
        </div>
      </div>
      <div className="focusbox">
      <h4>In focus</h4>
         <Focusbox />
      </div>
    </div>
  )
}

export default Allbox