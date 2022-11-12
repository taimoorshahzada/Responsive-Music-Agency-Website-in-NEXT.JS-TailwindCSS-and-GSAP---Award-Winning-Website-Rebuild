/** @format */

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imageSlider1 from "../images/imageSlider1.png";
import imageSlider2 from "../images/imageSlider2.png";
import imageSlider3 from "../images/imageSlider3.png";
import imageSlider4 from "../images/imageSlider4.png";
import imageSlider5 from "../images/imageSlider5.png";
import imageSlider6 from "../images/imageSlider6.png";
import Image from "next/image";
function SwiperSliderComponent() {
  const [slides, setSlides] = useState(0);
  useEffect(() => {
    let w = window.innerWidth;
    w < 768 ? setSlides(1.2) : setSlides(1.5);
  }, []);
  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={slides}
        grabCursor={true}
        className="w-full font-neutralFace h-[50vh] md:h-[65vh] relative mt-[40vh] md:mt-[33vh]"
      >
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider1}
              className="w-full md:w-[80%] h-[100%] object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>MULTIPLE PROJECTS</p>
              <p>(01)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-9xl 2xl:text-[12rem] leading-none">
              HEINEKEN
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider2}
              className="w-full md:w-[80%] h-[100%] object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className="text-red-700">G-STAR Raw</span>
                <br /> 1:00
              </p>
              <p>(02)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-9xl leading-none">
              G-STAR RAW
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider3}
              className="w-full md:w-[80%] h-[100%] object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className="text-red-700">SKODA</span>
                <br /> 2:01
              </p>
              <p>(03)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl 2xl:text-[12rem] lg:text-9xl leading-none">
              SKODA
            </div>
            <div></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider4}
              className="w-full md:w-[60%] h-[100%] object-cover"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className="text-red-700">PUBLICIS MILAN</span>
                <br /> 1:10
              </p>
              <p>(04)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl 2xl:text-[12rem] lg:text-9xl leading-none">
              DIESEL
            </div>
            <div></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider5}
              className="w-full md:w-[60%] h-[100%] object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className="text-red-700">BARBARA BOLOGNA</span>
                <br /> 14:14
              </p>
              <p>(05)</p>
            </div>
            <div className="text-5xl 2xl:text-[12rem] font-bold md:text-7xl lg:text-9xl leading-none">
              EMBODIME
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start flex-col-reverse w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider6}
              className="w-full md:w-[65%] h-[100%] object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p>
                <span className="text-red-700">PUBLICIS</span>
                <br /> 1:17
              </p>
              <p>(06)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-9xl 2xl:text-[12rem] leading-none">
              MERCEDES
            </div>
            <div></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperSliderComponent;
