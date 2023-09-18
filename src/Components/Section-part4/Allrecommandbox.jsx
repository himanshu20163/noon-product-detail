import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import applephone from "./apple-phone.jpg"
import Recommandbox from "./Recommandbox";
import lipstik from "./lipstik.jpg"

 
const Allrecommandbox = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div style={{width:"95%",margin:"20px auto",padding:"10px 0px"}}>
      <h2>Recommand for you</h2>
 <div style={{backgroundColor:"#fff",padding:"20px "}}>
        
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
            <Recommandbox image={applephone} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*"/>
            <Recommandbox image={lipstik} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*"/>
            <Recommandbox image={applephone} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*"/>
            <Recommandbox image={lipstik} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*"/>
            <Recommandbox image={applephone} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*"/>
            <Recommandbox image={lipstik} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*"/>
            <Recommandbox image={applephone} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*"/>
            <Recommandbox image={lipstik} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*"/>
            <Recommandbox image={applephone} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*"/>
            <Recommandbox image={lipstik} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*"/>
            <Recommandbox image={applephone} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*"/>
            <Recommandbox image={lipstik} title="Apple iphone 14 pro max 256GB Deep Purple" rating="4.6*"/>
        </Carousel>
      </div>
    </div>
   
  )
}
export default Allrecommandbox;
