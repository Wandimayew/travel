import React, { useState } from "react";
import Images from "./Images";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const List = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, 
    },
  };

  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleNext = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % Images.length);
  };

  const handlePrev = () => {
    setCarouselIndex(
      (prevIndex) => (prevIndex - 1 + Images.length) % Images.length
    );
  };

  return (
    <div id="specialDeals" className="w-full gap-4 lg:w-2/3">
      <div className="flex flex-col px-4 py-2 sm:flex-row justify-between">
        <div>
          <p className="text-[#00a3cb] font-semibold mb-4">TOP DESTINATIONS</p>
          <h2 className="font-bold text-3xl mb-7">Top Picks Unveiled</h2>
        </div>
        <div className="flex justify-center lg:justify-normal gap-12">
          <IoIosArrowRoundBack
            size={30}
            className="w-6 h-12 md:w-8 md:h-16 cursor-pointer"
            onClick={handlePrev}
          />
          <IoIosArrowRoundForward
            size={30}
            className="w-12 h-12 md:w-16 md:h-16 p-2 cursor-pointer text-white bg-[#00a3cb] rounded-full"
            onClick={handleNext}
          />
        </div>
      </div>
      <Carousel
        responsive={responsive}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        infinite={true}
        containerClass="carousel-container"
        additionalTransfrom={-carouselIndex * 300}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        itemClass="mr-4" 
        swipeable={true}
        draggable={true}
      >
        {Images.map((image, index) => (
          <Card key={index} image={image} />
        ))}
      </Carousel>
    </div>
  );
};

export default List;
