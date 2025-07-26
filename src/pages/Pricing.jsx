import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PrimaryButton } from '../components/ui/Button';
import BoldCopy from '../components/ui/bold-copy';
import { FaGem } from 'react-icons/fa';
import { MdRefresh, MdShield } from 'react-icons/md';
import { CardSpotlight } from '../components/ui/Card-spotlight';
import { Spotlight } from '../components/ui/spotlight-new';
import data from '../data/mockdata.json';

const {plans,faqs} = data;

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="relative pt-20 overflow-hidden text-white min-h-screen">
            <Spotlight />

            {/* Animated Background Elements */}
            <motion.div className="absolute top-10 left-1/4 w-80 h-80 bg-primary rounded-full filter blur-3xl opacity-20"
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-10"
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div key={i} className={`absolute rounded-full bg-white opacity-10`}
                    style={{
                        width: Math.random() * 10 + 2,
                        height: Math.random() * 10 + 2,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, (Math.random() - 0.5) * 100],
                        x: [0, (Math.random() - 0.5) * 50],
                        opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{
                        duration: Math.random() * 20 + 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            ))}

            <div className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
                {/* Hero Section */}
                <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="inline-block mb-6">
                        <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/20 backdrop-blur-sm">Simple, Transparent Pricing</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Pricing Plans</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">Choose the perfect plan for your needs. Scale up or down as you grow.</p>
                </motion.div>

                {/* Benefits Section */}
                <motion.div className="grid md:grid-cols-3 gap-8 text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
                >
                    {[
                        { title: 'No Hidden Fees', desc: 'Straightforward pricing with no surprise charges.', icon: <FaGem /> },
                        { title: 'Cancel Anytime', desc: 'No lock-in. Pause or cancel your subscription anytime.', icon: <MdRefresh /> },
                        { title: 'Enterprise Grade', desc: 'Same infrastructure used by Fortune 500 companies.', icon: <MdShield /> },
                    ].map((item, i) => (
                        <motion.div key={i} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ type: 'spring', stiffness: 100 }} className="bg-gradient-to-b from-white/5 to-white/[0.01] p-6 rounded-xl border border-white/10 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                            <div className="text-3xl text-center w-fit mx-auto text-primary mb-3">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Toggle Switch */}
                <motion.div className="flex flex-col items-center mb-16 relative w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    <div className="relative w-64 h-14 mb-4">
                        <div className="relative w-full h-full bg-primary/10 rounded-full p-1 border border-white/20 backdrop-blur-sm flex overflow-hidden" onClick={() => setIsYearly(prev => !prev)}>
                            <motion.div className="absolute top-0.5 left-0.5 bottom-0.5 w-[calc(50%-0.25rem)] bg-gradient-to-r from-primary to-secondary rounded-full z-0" initial={false} animate={{ x: isYearly ? 'calc(100% + 0.25rem)' : '0' }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} />
                            <div className="w-1/2 h-full flex items-center justify-center z-10 cursor-pointer">
                                <span className={`font-medium ${!isYearly ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
                            </div>
                            <div className="w-1/2 h-full flex items-center justify-center z-10 cursor-pointer">
                                <span className={`font-medium ${isYearly ? 'text-white' : 'text-gray-400'}`}>Yearly</span>
                            </div>
                        </div>
                    </div>
                    {isYearly && (
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 }} className="text-sm bg-green-900/30 text-green-400 px-3 py-1 rounded-full border border-green-800/50">Save up to 30% with yearly billing</motion.div>
                    )}
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 relative">
                    {plans.map((plan, idx) => (
                        <CardSpotlight key={idx}>
                            <motion.div key={idx} className={` flex flex-col  transition-all duration-300`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.15 }} onMouseEnter={() => setHoveredCard(idx)} onMouseLeave={() => setHoveredCard(null)}>

                                {/* Card content */}
                                <div className="z-10 ">
                                    {plan.popular && (
                                        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1 rounded-bl-lg">POPULAR</motion.div>
                                    )}

                                    <div className="mb-6">
                                        <h3 className={`text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${plan.color}`}>{plan.title}</h3>
                                        <div className="text-5xl font-extrabold mb-2">
                                            ${isYearly ? plan.priceYearly : plan.priceMonthly}
                                            <span className="text-lg text-gray-400 font-medium">
                                                /{isYearly ? 'year' : 'month'}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-sm">{isYearly ? `$${(plan.priceYearly / 12).toFixed(2)} per month` : 'Billed monthly'}</p>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, i) => (
                                            <motion.li key={i} className="flex items-center text-gray-200" initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 + i * 0.05 }}>
                                                <span className="mr-3 text-green-400">✓</span>
                                                {feature}
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`w-full mt-auto py-3 rounded-lg font-medium transition-all cursor-pointer ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30' : 'bg-white/10 hover:bg-white/20 border border-white/20'}`}>Get Started</motion.button>
                                </div>
                            </motion.div>
                        </CardSpotlight>
                    ))}
                </div>

                <section className="text-white overflow-hidden">
                    {/* Title */}
                    <motion.div className="text-center mb-16 relative z-10" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <BoldCopy text="Frequently Asked Questions" />
                        <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-gray-300 max-w-2xl mx-auto">
                            Everything you need to know about our pricing and services.
                        </motion.p>
                    </motion.div>

                    {/* FAQ Items */}
                    <div className="max-w-3xl mx-auto space-y-6 relative z-10">
                        {faqs.map((item, index) => (
                            <motion.div key={index} className="bg-primary/10 border border-primary/20 rounded-xl p-5 cursor-pointer hover:bg-primary/20 transition" onClick={() => toggleFAQ(index)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }}>
                                <div className="flex justify-between items-center">
                                    <h4 className="text-lg font-semibold">{item.question}</h4>
                                    <motion.span className="text-xl" animate={{ rotate: openIndex === index ? 45 : 0 }} transition={{ duration: 0.3 }}>+</motion.span>
                                </div>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.p className="mt-3 text-gray-300 leading-relaxed" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                                            {item.answer}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </section>
                {/* CTA Section */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="mt-24 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Still have questions?</h3>
                    <PrimaryButton size='lg'>Contact Our Sales Team</PrimaryButton>
                </motion.div>
            </div>
        </div>
    );
};

export default Pricing;