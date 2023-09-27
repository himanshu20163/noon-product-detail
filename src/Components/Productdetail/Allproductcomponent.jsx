import { Flex,Breadcrumb,BreadcrumbItem,BreadcrumbLink,Box } from '@chakra-ui/react'
import React from 'react'
import Productimage from './Imagegallery/Productimage'
import Productitle from './Productinfo/Title/Productitle'
import "./productdetail.css";
import Productpolicy from './Productpolicy/Productpolicy';
import Allproductinfo from './Productinfo/Allproductinfo';

const Allproductcomponent = () => {
  return (
    <div className='allproductdeatlscontainer'>
        <Box style={{paddingLeft:"50px"}}>
                <Breadcrumb separator='>'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>About</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
       <Flex>
        <Productimage />
       <Allproductinfo />
        <Productpolicy />
       </Flex>
    </div>
  )
}

export default Allproductcomponent