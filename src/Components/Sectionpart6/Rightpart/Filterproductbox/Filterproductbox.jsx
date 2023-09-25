import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import applephone from "../apple-phone.jpg"
import lipstik from "../lipstik.jpg";
import Singleproduct from "./Singleproduct";
import { Flex } from "@chakra-ui/react";


const Filterproductbox = () => {
    return (
        <div style={{ width: "100%", padding: "10px 0px", }}>
            <div style={{ backgroundColor: "#fff", padding: "10px " }}>
                <Flex wrap="wrap" justifyContent={"space-between"}>
                    <Singleproduct image={applephone} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={applephone} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={lipstik} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={applephone} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={lipstik} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={applephone} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={lipstik} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={applephone} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={lipstik} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={applephone} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={lipstik} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={applephone} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                    <Singleproduct image={lipstik} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*" />
                </Flex>

            </div>
        </div>

    )
}
export default Filterproductbox;
