import React from 'react'
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Container,
    Flex,
    Input,
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    Checkbox, CheckboxGroup,

} from '@chakra-ui/react'

const Leftpanel = () => {
    return (
        <Box className='leftproductcategories'>
            <Box>
                <Breadcrumb separator='>'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>About</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
            <Box>
                <div data-qa="Fulfillment" >
                    <div class="fullfillbox" style={{ display: "flex" }}>
                        <span><strong>Fulfillment</strong></span>
                        <img src="https://f.nooncdn.com/s/app/com/noon/icons/down-chevron.svg" alt="Fulfillment" class="sc-b51db3f-1 fLrJHi" />
                    </div>
                    <div style={{ display: "flex", width: "40%", justifyContent: "space-between" }}>
                        <input id="filters-is_fbn-1" type="checkbox" />
                        <img src="https://f.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" alt="noon-express" width="80px" height="20px" />
                    </div>
                </div>
            </Box>
            <Box style={{ display: "flex", flexDirection: "column" }}>
                <div class="product-brand">
                    <Flex justifyContent={"space-between"}>
                    <div>
                        <span>Brand</span>
                        <button data-qa="plp-clear_selected_brands" >Clear</button>
                    </div>
                    <div>
                        <img src="https://f.nooncdn.com/s/app/com/noon/icons/down-chevron.svg" alt="Brand" />
                    </div>
                    </Flex>
                    
                </div>
                <div>
                    <Input focusBorderColor='lime' placeholder='Here is a sample placeholder' style={{ backgroundColor: "#fff", margin: "10px 0px" }} />
                    <label className="filters-brand-hp" data-qa="brand_HP" >
                        <span style={{ display: "flex", alignitems: "center" }}>
                            <input id="filters-brand-hp" type="checkbox" value="hp" />
                            <img src="https://f.nooncdn.com/s/app/com/noon/icons/checkbox-square_checked_v2.svg" alt="" class="sc-b51db3f-1 fLrJHi" />
                            <a href="uae-en/hp/" >HP</a>
                        </span>
                        <span>&nbsp;(3509)</span>
                    </label>
                </div>
            </Box>
            <Box>
                <div className="product-brand">
                    <Flex justifyContent={"space-between"}>
                        <div>
                            <span>Price</span>
                            <button data-qa="plp-clear_selected_brands" >(AED)</button>
                        </div>
                        <div>
                            <img src="https://f.nooncdn.com/s/app/com/noon/icons/down-chevron.svg" alt="Brand" />
                        </div>
                    </Flex>

                    <br />
                    <Flex>
                        <input type="number" style={{ width: "100px" }}></input>
                        &nbsp;<h5>To</h5>&nbsp;
                        <input type="number" style={{ width: "100px" }}></input>
                    </Flex>

                </div>
            </Box>
            <Box>
                <div className='Rangefilter'>
                    <Flex justifyContent={"space-between"}>
                        <div>
                            <span>Product Rating</span>
                        </div>
                        <div>
                            <img src="https://f.nooncdn.com/s/app/com/noon/icons/down-chevron.svg" alt="Brand" />
                        </div>
                    </Flex>
                    <RangeSlider defaultValue={[20, 40]} min={0} max={300} step={30}>
                        <RangeSliderTrack bg='red.100'>
                            <RangeSliderFilledTrack bg='yellow' />
                        </RangeSliderTrack>
                        <RangeSliderThumb boxSize={6} index={0} />
                        <RangeSliderThumb boxSize={6} index={1} />
                    </RangeSlider>
                </div>
            </Box>
            <Box>
                <div className="gradebox">
                <Flex justifyContent={"space-between"}>
                        <div>
                            <span>Product grade</span>
                        </div>
                        <div>
                            <img src="https://f.nooncdn.com/s/app/com/noon/icons/down-chevron.svg" alt="Brand" />
                        </div>
                    </Flex>
                    <Flex>
                    <Checkbox defaultChecked>Checkbox</Checkbox>
                    </Flex>
                </div>
            </Box>

        </Box>

    )
}

export default Leftpanel