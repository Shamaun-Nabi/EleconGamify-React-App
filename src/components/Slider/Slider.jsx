import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination, EffectFade } from "swiper";
// import { EffectFade } from "swiper";
import sliderImage1 from "../../assets/Images/slideshowV1-bg1.webp";
import sliderImage2 from "../../assets/Images/slideshowV1-bg2.webp";
import sliderImage3 from "../../assets/Images/slideshowV1-bg3.webp";

export default function Slider() {
  return (
    <div>
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        navigation={true}
        // effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // pagination={{ clickable: true }}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="relative">
            <img src={sliderImage1} alt="" />
            <div className="absolute top-[50px] lg:top-[220px] left-[50px] lg:left-[100px]">
              <motion.h1
                transition={{ duration: 1.2 }}
                initial={{ x: 400 }}
                whileInView={{ x: 0 }}
                className=" text-xl lg:text-5xl font-bold"
              >
                WIRELESS SPEAKERS
              </motion.h1>
              <motion.div
                transition={{ duration: 1.3 }}
                whileInView={{ x: 0 }}
                initial={{ x: 100 }}
                // animate={{ x: 0 }}
                className="border-l-4 border-l-emerald-500"
              >
                <p className="text-md md:text-xl ml-4 mt-4 mb-4 text-gray-600  ">
                  The perfect place for every electronic store and manufacturer.
                  <br />
                  This is Eleckon.
                </p>
              </motion.div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-black px-4 py-1 lg:px-6 lg:py-2 text-white hover:bg-blue-700"
                >
                  SHOP NOW
                </motion.button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={sliderImage2} alt="" />
            <div className="absolute top-[50px] lg:top-[220px] left-[50px] lg:left-[100px]">
              <motion.h1
                initial={{ y: 200 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
                className=" text-xl lg:text-5xl font-bold"
              >
                AUDIO COLLECTION
              </motion.h1>
              <motion.div
                initial={{ x: 400 }}
                whileInView={{ x: 0 }}
                className="border-l-4 border-l-emerald-500"
              >
                <p className="text-md md:text-xl ml-4 mt-4 mb-4 text-gray-600  ">
                  The perfect place for every electronic store and manufacturer.
                  <br />
                  This is Eleckon.
                </p>
              </motion.div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-black px-4 py-1 lg:px-6 lg:py-2 text-white hover:bg-blue-700"
                >
                  SHOP NOW
                </motion.button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={sliderImage3} alt="" />
            <div className="absolute top-[50px] lg:top-[220px] left-[50px] lg:left-[100px]">
              <motion.h1
                initial={{ rotateX: 300 }}
                whileInView={{ rotateX: 0 }}
                transition={{ duration:1.2 }}
                className=" text-xl lg:text-5xl font-bold"
              >
               ACCESSORIES <br /> PRODUCTS
              </motion.h1>
              <motion.div
                initial={{ x: 400 }}
                whileInView={{ x: 0 }}
                className="border-l-4 border-l-emerald-500"
              >
                <p className="text-md md:text-xl ml-4 mt-4 mb-4 text-gray-600  ">
                  The perfect place for every electronic store and manufacturer.
                  <br />
                  This is Eleckon.
                </p>
              </motion.div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-black px-4 py-1 lg:px-6 lg:py-2 text-white hover:bg-blue-700"
                >
                  SHOP NOW
                </motion.button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
