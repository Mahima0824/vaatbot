import React from 'react';
import HeroSection4 from '../components/home/HeroSection4';
import TrustedBy from '../components/home/TrustedBy';
import Features from '../components/home/Features';
import UseCases from '../components/home/UseCases';
import HowItWorks from '../components/home/HowItWorks';
import Pricing from '../components/home/Pricing';
import { AnimatedTestimonialsDemo } from '../components/home/Testimonial';
import Blog from '../components/home/Blog';

const Home4 = () => {
  return (
    <>
      <HeroSection4 />
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

export default Home4
