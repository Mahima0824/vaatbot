import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaHeadset, FaShoppingCart, FaHospital, FaGraduationCap, FaPiggyBank } from 'react-icons/fa';
import data from '../../data/mockdata.json';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import BoldCopy from '../ui/bold-copy';
import Section from '../../layout/Section';

const useCases = data.useCases;

const iconMap = {
  "FaHeadset": FaHeadset,
  "FaShoppingCart": FaShoppingCart,
  "FaHospital": FaHospital,
  "FaGraduationCap": FaGraduationCap,
  "FaPiggyBank": FaPiggyBank
};
const UseCases = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  const handleSwiperSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <Section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <BoldCopy text="Use Cases" />
          <motion.p className="sm:text-lg text-base text-gray-400 max-w-3xl mx-auto">
            Discover how our AI chatbot can transform your business across various industries
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2 sm:px-4">
          {useCases.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSlideChange(index)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center justify-center text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer ${activeIndex === index
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
              >
                <IconComponent className="mr-2 text-sm" />
                {item.title}
              </motion.button>
            )
          })}
        </div>

        {/* Swiper */}
        <div className="relative py-6 sm:py-10">
          <Swiper className="w-full"
            ref={swiperRef}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            speed={800}
            slidesPerView={1.15}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSlideChange={handleSwiperSlideChange}
            modules={[EffectCoverflow, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1.25,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {useCases.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <SwiperSlide className="px-2 sm:px-4 transition-transform duration-500 will-change-transform" key={item.id}>
                  <motion.div className={`h-full rounded-2xl p-6 sm:p-8 flex flex-col justify-center bg-gradient-to-br ${item.color} relative transition-all duration-500`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{
                      opacity: activeIndex === index ? 1 : 0.8,
                      scale: activeIndex === index ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative z-10 text-center">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 flex items-center justify-center bg-white/20 text-white rounded-2xl backdrop-blur-sm" >
                        <IconComponent className="w-12 h-12" />
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-white/90 text-sm sm:text-base mb-6 sm:mb-8">{item.description}</p>
                      <button className="px-5 sm:px-6 py-2 text-sm sm:text-base bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full font-medium transition-all duration-300 border border-white/20 hover:border-white/40">Learn More</button>
                    </div>
                  </motion.div>
                </SwiperSlide>
              )
            }
            )}
          </Swiper>
        </div>

        {/* 🔥 Unique Gradient Bar Pagination */}
        <div className="flex justify-center items-center gap-3 sm:gap-4">
          {useCases.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`h-2 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 ${activeIndex === index
                ? 'w-10 sm:w-14 bg-gradient-to-r from-primary to-secondary shadow-lg'
                : 'w-3 sm:w-4 bg-white/10 hover:bg-white/20'
                }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: activeIndex === index ? 1.1 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default UseCases;
