import React from 'react'
import Leftpanel from './Leftpart/Leftpanel'
import "./Leftpart/leftproduct.css";
import Rightpanel from './Rightpart/Rightpanel';
import "./Rightpart/rightpart.css";

const Productcategories = () => {
  return (
    <div style={{display:"flex"}}>
        <Leftpanel />
        <Rightpanel />
    </div>
  )
}

export default Productcategories