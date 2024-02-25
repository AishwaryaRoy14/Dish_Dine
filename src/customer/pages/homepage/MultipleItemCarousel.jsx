import React from "react"
// import "~slick-carousel/slick/slick.css" 
// import "~slick-carousel/slick/slick-theme.css"
import { TopMeals } from "./TopMeals"
import CarouselItem from "./CarouselItem"
import Slider from "react-slick"
const MultipleItemCarousel= ()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false
      };
    return (
        <div>
            <Slider {...settings}>
            {TopMeals.map((item)=><CarouselItem image={item.image} title={item.title}/>)}
            </Slider>
        </div>
    )
}
export default MultipleItemCarousel;