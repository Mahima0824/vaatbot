import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { Spotlight } from "./spotlight-new";
import BoldCopy from "./bold-copy";
import Section from "../../layout/Section";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <Section>
      <Spotlight />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <BoldCopy text="What Our Clients Say" />
          <motion.p className="sm:text-lg text-base text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Don't just take our word for it. Here's what our clients have to say about their experience.
          </motion.p>
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div key={testimonial.src} initial={{ opacity: 0, scale: 0.9, z: -100, rotate: randomRotateY(), }} whileInView={{ opacity: isActive(index) ? 1 : 0.7, scale: isActive(index) ? 1 : 0.95, z: isActive(index) ? 0 : -100, rotate: isActive(index) ? 0 : randomRotateY(), zIndex: isActive(index) ? 40 : testimonials.length + 2 - index, y: isActive(index) ? [0, -80, 0] : 0, }} exit={{ opacity: 0, scale: 0.9, z: 100, rotate: randomRotateY(), }} transition={{ duration: 0.4, ease: "easeInOut", }} className="absolute inset-0 origin-bottom">
                    <img src={testimonial.src} alt={testimonial.name} width={500} height={500} draggable={false} className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-8 py-4">
            <motion.div key={active} initial={{ y: 20, opacity: 0, }} whileInView={{ y: 0, opacity: 1, }} exit={{ y: -20, opacity: 0, }} transition={{ duration: 0.2, ease: "easeInOut", }}>
              <div className="relative">
                <FaQuoteLeft className="absolute -left-2 -top-10 h-8 w-8 text-primary/20" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {testimonials[active].name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {testimonials[active].designation}
                </p>
              </div>
              <motion.div className="mt-8 text-lg text-muted-foreground leading-relaxed relative pl-6 border-l-2 border-primary/20">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span key={index} initial={{ filter: "blur(10px)", opacity: 0, y: 5, }} whileInView={{ filter: "blur(0px)", opacity: 1, y: 0, }} transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index, }} className="inline-block">
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
            <div className="flex items-center justify-between pt-8">
              <div className="flex items-center space-x-4">
                <button onClick={handlePrev} className="group/button flex h-12 w-12 items-center justify-center rounded-full cursor-pointer bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 border border-border hover:shadow-lg" aria-label="Previous testimonial"><FaArrowLeft className="h-5 w-5 text-primary group-hover/button:-translate-x-1 transition-transform duration-300" /></button>
                <button onClick={handleNext} className="group/button flex h-12 w-12 items-center justify-center rounded-full cursor-pointer bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 border border-border hover:shadow-lg" aria-label="Next testimonial"><FaArrowRight className="h-5 w-5 text-primary group-hover/button:translate-x-1 transition-transform duration-300" /></button>
              </div>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button key={index} onClick={() => setActive(index)} className={cn("h-2 rounded-full transition-all cursor-pointer duration-300", active === index ? "w-8 bg-gradient-to-r from-primary to-secondary" : "w-4 bg-muted")} aria-label={`Go to testimonial ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-32 -top-32 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -left-20 -bottom-20 -z-10 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />
    </Section>
  );
};
