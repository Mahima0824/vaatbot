import { motion, useAnimation } from "framer-motion";
import { cn } from "../../lib/utils";
import { PrimaryButton, SecondaryButton } from "../ui/Button";
import { FaCircle } from "react-icons/fa";
import Badge from "../ui/Badge";

const AnimatedGradientText = ({ children, className = '' }) => {
    return (
        <span className={`relative inline-block ${className}`}>
            <motion.span className="block" initial={{ opacity: 1, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                {children}
            </motion.span>
            <motion.span className="absolute inset-0 bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent" initial={{ opacity: 1, backgroundPosition: '100% 50%' }} whileInView={{
                opacity: 1, backgroundPosition: ['100% 50%', '100% 50%', '100% 50%'],
            }} transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear',
            }}>
                {children}
            </motion.span>
        </span>
    );
};

const PulseCircle = ({ delay = 0, size = 1, color = 'from-primary/30 to-secondary/20' }) => {
    return (
        <motion.div className={`absolute rounded-full w-[90vw] h-[90vw] max-w-[1000px] max-h-[1000px] bg-gradient-to-r ${color}`} initial={{ opacity: 0, scale: 0.1 * size }} animate={{
            scale: [0.1 * size, 1.1 * size, 1 * size],
            opacity: [0, 0.4, 0],
        }} transition={{
            duration: 15,
            ease: [0.4, 0, 0.2, 1],
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
            delay: delay
        }}
            style={{
                left: '50%',
                top: '50%',
                x: '-50%',
                y: '-50%',
                transformOrigin: 'center',
            }}
        />
    );
};

const CircleAnimation = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
            <PulseCircle delay={0} size={0.2} color="from-primary/20 to-secondary/20" />
            <PulseCircle delay={3} size={0.4} color="from-primary/15 to-secondary/15" />
            <PulseCircle delay={6} size={0.6} color="from-primary/10 to-secondary/10" />
            <PulseCircle delay={9} size={0.8} color="from-primary/5 to-secondary/5" />
            <PulseCircle delay={12} size={1.0} color="from-primary/3 to-secondary/3" />
        </div>
    );
};

const ElegantShape = ({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}) => {
    return (
        <motion.div initial={{ opacity: 0, y: -150, rotate: rotate - 15 }} animate={{ opacity: 1, y: 0, rotate: rotate }} transition={{
            duration: 2.4,
            delay,
            ease: [0.23, 0.86, 0.39, 0.96],
            opacity: { duration: 1.2 },
        }} className={cn("absolute", className)}>
            <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} style={{ width, height }} className="relative">
                <div className={cn(
                    "absolute inset-0 rounded-full",
                    "bg-gradient-to-r to-transparent",
                    gradient,
                    "backdrop-blur-[2px] border-2 border-white/[0.15]",
                    "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                    "after:absolute after:inset-0 after:rounded-full",
                    "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                )}
                />
            </motion.div>
        </motion.div>
    );
};

const HeroSection2 = ({
    title1 = "Smart Chat",
    title2 = "Experience",
    description = "Experience the future of AI-powered conversations with our intelligent chat bot"
}) => {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-surface to-surface/95">
            {/* Animated Background Elements */}
            <CircleAnimation />

            <div className="absolute inset-0 overflow-hidden opacity-40">
                <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-indigo-500/20 to-purple-500/20" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />
                <ElegantShape delay={0.6} width={500} height={120} rotate={-15} gradient="from-rose-500/20 to-pink-500/20" className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />
                <ElegantShape delay={0.4} width={300} height={80} rotate={-8} gradient="from-violet-500/20 to-blue-500/20" className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />
                <ElegantShape delay={0.6} width={200} height={60} rotate={20} gradient="from-amber-500/[0.15]" className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />
                <ElegantShape delay={0.7} width={150} height={40} rotate={-25} gradient="from-cyan-500/[0.15]" className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div variants={item}>
                        <Badge Icon={FaCircle} text="AI Assistant" />
                    </motion.div>

                    {/* Main Heading */}
                    <motion.div initial={{ opacity: 1, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-6 md:mb-8">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                            <AnimatedGradientText>
                                <span className="block">{title1}</span>
                                <span className="block">{title2}</span>
                            </AnimatedGradientText>
                        </h1>
                    </motion.div>

                    {/* Description */}
                    <motion.div variants={item} className="mb-8 md:mb-12">
                        <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">{description}</p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <PrimaryButton variant="gradient">Get Started</PrimaryButton>
                        <SecondaryButton>Learn More</SecondaryButton>
                    </motion.div>
                </motion.div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface/95 via-surface/70 to-transparent pointer-events-none" />

            {/* Enhanced Scroll Indicator */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: [0, 1, 0], y: [20, 0, -10] }} transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop" }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer"
                onClick={() => {
                    window.scrollTo({
                        top: window.innerHeight,
                        behavior: 'smooth'
                    });
                }}
            >
                <motion.span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors duration-300 mb-2" whileHover={{ scale: 1.05 }}>Scroll to explore</motion.span>
                <motion.div className="w-10 h-16 rounded-full border-2 border-white/30 flex justify-center p-2 group-hover:border-primary/70 transition-colors duration-300" animate={{
                    y: [0, 10, 0],
                }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                >
                    <motion.div className="w-1 h-3 bg-white/60 rounded-full group-hover:bg-primary transition-colors duration-300" animate={{
                        y: [0, 5, 0],
                        opacity: [0.6, 1, 0.6],
                    }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default HeroSection2
