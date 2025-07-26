import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { FaCheck, FaBolt } from 'react-icons/fa';
import BoldCopy from "../ui/bold-copy";
import Badge from "../ui/Badge";
import Section from '../../layout/Section';
import data from '../../data/mockdata.json';

const { pricingPlans } = data;


const PricingCard = ({ plan }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className={cn(
        'relative group bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 overflow-hidden h-full flex flex-col',
        plan.popular && 'ring-1 ring-primary/50 shadow-2xl shadow-primary/20'
      )}
    >
      {/* Animated background gradient */}
      <motion.div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 opacity-0 transition-opacity duration-700"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.15 }}
      />

      {/* Popular badge */}
      {plan.popular && (
        <motion.div className="absolute top-4 right-6 bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg shadow-primary/20"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          MOST POPULAR
        </motion.div>
      )}

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Plan name and price */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">{plan.name}</h3>
          <p className="text-white/60 text-sm mb-4">{plan.description}</p>

          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">{plan.price}</span>
            {plan.price !== 'Free' && plan.price !== 'Custom' && (
              <span className="text-white/50 text-base">/month</span>
            )}
          </div>
          {plan.price !== 'Custom' ? (
            <p className="text-xs text-white/40">
              {plan.price === 'Free' ? 'No credit card required' : 'Billed annually, cancel anytime'}
            </p>
          ) : (
            <div className="h-5" /> // Spacer for alignment
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6" />

        {/* Features */}
        <ul className="space-y-4 mb-8 flex-1">
          {plan.features.map((feature, index) => (
            <motion.li className="flex items-start gap-3 text-white/80 text-sm group"
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="mt-1 p-0.5 rounded-full bg-primary/20">
                <FaCheck className="text-primary text-[10px]" />
              </div>
              <span className="group-hover:text-white/90 transition-colors">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.button
          whileHover={{
            scale: 1.02,
            boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)'
          }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            'mt-auto w-full py-3.5 px-6 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden cursor-pointer group',
            plan.popular
              ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
              : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
          )}
        >
          <span className="relative z-10">{plan.buttonText}</span>
          {plan.popular && (
            <motion.span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            />
          )}
        </motion.button>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl opacity-70" />
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full filter blur-3xl opacity-50" />
    </motion.div>
  );
};

const Pricing = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Section className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge Icon={FaBolt} text="Simple, transparent pricing" />
          <BoldCopy className="mb-4" text="Pricing that scales with you" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-white/60"
          >
            Choose the perfect plan for your needs. Start for free and upgrade anytime.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pricingPlans.map((plan, i) => (
            <motion.div className="h-full" key={plan.name} variants={item}>
              <PricingCard plan={plan} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Pricing;