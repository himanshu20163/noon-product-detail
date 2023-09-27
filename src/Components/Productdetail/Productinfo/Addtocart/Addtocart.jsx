import React, { useState } from 'react'
import { Select, Button, Flex, Box, TagLabel } from '@chakra-ui/react'
import coupon from "../../images/coupon-code.png"
import Heart from "react-animated-heart";

const Addtocart = () => {
    const [isClick, setClick] = useState(false);
    return (
        <div className='cart-box'>
            <Box className='coupon-box'>
                <img src={coupon} />
            </Box>
            <Box className='addtocart-box'>
                <Flex justifyContent={"space-between"} alignItems={"Center"}>
                    <Box>
                        {/* <TagLabel>Quantity</TagLabel> */}
                        <label>Quantity</label>
                        <Select placeholder='Select option' size={'sm'}>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </Box>
                    <Box>
                        <Button 
                        size='lg'
                        height='48px'
                        width='280px'
                        border='2px'
                        borderColor='green.500'
                        colorScheme='blue'>Add to cart</Button>
                    </Box>
                    <Box>
                        <Heart isClick={isClick} onClick={() => setClick(!isClick)} styles={{ height: "100px", marginTop: "5px" }} />
                    </Box>
                </Flex>
            </Box>
        </div>
    )
}

export default Addtocart