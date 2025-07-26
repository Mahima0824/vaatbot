import React from 'react';
import HeroSection3 from '../components/home/HeroSection3';
import TrustedBy from '../components/home/TrustedBy';
import Features from '../components/home/Features';
import UseCases from '../components/home/UseCases';
import HowItWorks from '../components/home/HowItWorks';
import Pricing from '../components/home/Pricing';
import { AnimatedTestimonialsDemo } from '../components/home/Testimonial';
import Blog from '../components/home/Blog';
const Home3 = () => {
  return (
    <>
      <HeroSection3 />
      <TrustedBy />
      <Features />
      <UseCases />
      <HowItWorks />
      <Pricing />
      <AnimatedTestimonialsDemo />
      <Blog />
    </>
  )
}

export default Home3
