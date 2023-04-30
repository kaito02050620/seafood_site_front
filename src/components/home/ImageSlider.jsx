import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper.css";
import "swiper/css/autoplay";

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
          <img
            src="https://seafoodcook.netlify.app/assets/image/himono.png"
            alt="1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://seafoodcook.netlify.app/assets/image/agihurai.png"
            alt="2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://seafoodcook.netlify.app/assets/image/sasimi.png"
            alt="3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://seafoodcook.netlify.app/assets/image/tataki.png"
            alt="4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://seafoodcook.netlify.app/assets/image/wakasagi.png"
            alt="4"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ImageSlider;
300;
