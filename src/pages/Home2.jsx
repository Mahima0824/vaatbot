
import TrustedBy from "../components/home/TrustedBy";
import HeroSection2 from "../components/home/HeroSection2";
import Features from "../components/home/Features";
import UseCases from "../components/home/UseCases";
import HowItWorks from "../components/home/HowItWorks";
import Pricing from "../components/home/Pricing";
import { AnimatedTestimonialsDemo } from "../components/home/Testimonial";
import Blog from "../components/home/Blog";

const Home2 = () => {
    return (
        <>
            <div className="relative">
                <HeroSection2 badge="AI Assistant" title1="Smart Chat" title2="Experience" description="Experience the future of AI-powered conversations with our intelligent chat bot" />
            </div>
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

export default Home2