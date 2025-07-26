import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustedBy from '../components/home/TrustedBy';
import Features from '../components/home/Features';
import UseCases from '../components/home/UseCases';
import HowItWorks from '../components/home/HowItWorks';
import { AnimatedTestimonialsDemo } from '../components/home/Testimonial';
import Pricing from '../components/home/Pricing';
import Blog from '../components/home/Blog';
const Home = () => {
  return (
    <>
      <HeroSection />
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

export default Home
