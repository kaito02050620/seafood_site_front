import React from "react";
const PUBLIC_FOLDER = import.meta.env.VITE_API_PUBLIC_FOLDER;
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper.css";
import "swiper/css/autoplay";
const imageFolder = "../../public/assets/image/";

function ImageSlider() {
  return (
    <>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img src={imageFolder + "/himono.png"} alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageFolder + "/agihurai.png"} alt="2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageFolder + "/sasimi.png"} alt="3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageFolder + "/tataki.png"} alt="4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageFolder + "/wakasagi.png"} alt="4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ImageSlider;
300;
