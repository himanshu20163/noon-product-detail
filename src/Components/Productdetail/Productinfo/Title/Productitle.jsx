import { Badge, Box, Center, Flex } from '@chakra-ui/react'
import React from 'react'
import interst from "../tahamara.png"
import "./productinfo.css"

const Productitle = () => {
    return (
        <div style={{ width: "100%" }}>
            <Box>
                <lable className='p-2'>L'OREAL PARIS</lable>
                <h3 className='p-2'>L'Oréal Paris Hydra Genius Aloe Water 72H Liquid Moisturizer Normal to Combination skin White 70ml</h3>
                <Flex>
                    <label className='p-2'>
                        Model Number :3600523363339
                    </label>
                    <Box> |</Box>
                    <label className='p-2'>
                        <Badge borderRadius='full' px='2' colorScheme='teal' style={{ height: "fit-content", backgroundColor: "yellow", fontStyle: "italic" }}>
                            4.4 *
                        </Badge>

                        40 rating
                    </label>
                </Flex>
                <Box>
                    <Flex>
                        <label className='p-2'>Was : </label>
                        &nbsp;
                        &nbsp;
                        <p style={{ textDecoration: "line-through" }}>AED 49.70</p>
                    </Flex>

                    <Flex>
                        <label className='p-2'>Now : </label>
                        &nbsp;
                        &nbsp;
                        <p ><b>AED 31.80 </b>Inclusive of VAT</p>
                    </Flex>
                </Box>
                <Box>
                    <Flex>
                        <Box className='p-2' style={{ width: "30%" }}>
                            <label> Saving: &nbsp; &nbsp; AED 17.90</label>
                        </Box>
                        <Box className='p-2' style={{ width: "25%" }}>
                            <label style={{ color: "rgb(66,174,2)", backgroundColor: "rgb(223,241,217)" }}>36% off</label>
                        </Box>
                        <Box className='p-2' style={{ width: "50%" }}>
                            <Badge borderRadius='full' px='2' colorScheme='teal' style={{ height: "fit-content", backgroundColor: "yellow", fontStyle: "italic" }}>
                                express
                            </Badge>
                        </Box>
                    </Flex>
                </Box>
                <Box className='cashback-box p-2'>
                    <label>
                        Earn 5% cashback with the Mashreq noon Credit Card. <a href='#'>Apply now</a>
                    </label>
                </Box>
                <Box className='pay-interset-box'  >
                    <Flex >
                        <img src={interst} />
                        <label>
                            Pay 4 interest-free payments of AED 7.95.Learn more
                        </label>
                    </Flex>

                </Box>
            </Box>
        </div>
    )
}

export default Productitle