import React from 'react'
import { Grid, GridItem, Box, Badge,Flex } from '@chakra-ui/react'
import logo from "../images/noon.png";
import policy from "../images/badge_low_returns_seller.png";
import { Link } from 'react-router-dom';
import shipping from "../images/shipping.png"
import conatctless from "../images/delievery.png";
import "./productpolicybox.css";

const Productpolicy = () => {
    return (
        <div className='product-policy-box'>
            <Box>
                <label>Free delivery on Pickup Points <a href='#'>Learn more</a></label>
                <hr>
                </hr>
                <label>This item cannot be exchanged or returned Learn more</label>
                <hr>
                </hr>
            </Box>
                <Box >
                    <Grid
                        h='150px'
                        templateRows='repeat(2, 1fr)'
                        templateColumns='repeat(5, 1fr)'
                        gap={4}
                    >
                        <GridItem rowSpan={2} colSpan={1} >
                            <img src={logo}></img>
                        </GridItem>
                        <GridItem colSpan={4} >
                            Sold by <a href="/">noon</a>
                            <br />
                            <Badge>
                                3.9 *
                            </Badge>
                            <label>
                                &nbsp; 71% Positive Ratings
                            </label>
                        </GridItem>
                        <GridItem colSpan={2} style={{ textAlign: "center" }}>
                            <Box style=
                                {{
                                    display: "flex",
                                    justifyContent: "center",

                                }}>
                                <img src={policy} height={20} width={20}>
                                </img>
                                <br />
                            </Box>
                            <Box>
                                <label style={{ whiteSpace: "pre-line" }}>low
                                    return <br />
                                    policy</label>
                            </Box>

                        </GridItem>
                        <GridItem colSpan={2} style={{ whiteSpace: "pre-line", width: "100%" }} >
                            80%
                            <br />
                            Product as <br />
                            Described
                        </GridItem>

                    </Grid>
                </Box>
                <Box className='shipping-box m-3'>
                   <Flex>
                      <img src={shipping} style={{width:"50px",height:"50px"}}/>
                      <Box>
                        <h5>TRUSTED SHIPPING</h5>
                        <p>Free shipping when you spend AED 100 and above on express items</p>
                      </Box>
                   </Flex>
                </Box>
                <Box className='delivery-box'>
                   <Flex>
                      <img src={conatctless} style={{width:"50px",height:"50px"}}/>
                      <Box>
                        <h5>CONTACTLESS DELIVERY</h5>
                        <p>Your delivery will be left at your door, valid on prepaid orders only.</p>
                      </Box>
                   </Flex>
                </Box> 

        </div>
    )
}

export default Productpolicy