import { Box, Flex } from "@chakra-ui/react";
import ImageSlider from "./Components/Slider/ImageSlider";
import { SlideData } from "./Components/Slider/SlideData";
import banner from "./Components/images/fashion-banner.png";
import visacard from "./Components/images/visa-card.jpg";
import Brandslider from "./Components/Brand/Brandslider";
import Header from "./Components/Header/Header";
import Allbox from "./Components/Sectionpart-2/Allbox";
import "./App.css"
import Fastdeliverybox from "./Components/Section-part3/Fastdeliverybox";
import Allrecommandbox from "./Components/Section-part4/Allrecommandbox";
import Footer from "./Components/Sectionpart5/Noon/src/component/Footer/Footer";
import AllMainproduct from "./Components/Sectionpart5/Noon/src/component/Main/AllMainproduct";
import Productcategories from "./Components/Sectionpart6/Productcategories";

export default function App() {
  return (
    <div>
     <Header />
      {/* <Flex style={{margin:"0px 50px",height:"auto"}}>
        <Box flex={2}>
          <div>
            <ImageSlider slides={SlideData} />
          </div>
        </Box>
        <Box flex={1}>
          <div>
            <img src={banner} width="100%" height="450" style={{ margin: "0px 10px ", height: "210px" }} />
          </div>
        </Box>
      </Flex>
      <Brandslider />
      <Allbox />
      <Fastdeliverybox />
      <Allrecommandbox />
      <AllMainproduct /> */}
      <Productcategories />
      <Footer />
    </div>
  );
}