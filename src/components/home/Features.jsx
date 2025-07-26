import { CardSpotlight } from "../ui/Card-spotlight";
import { FaBolt, FaBrain, FaGlobe, FaRegLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PrimaryButton from "../ui/Button";
import BoldCopy from "../ui/bold-copy";
import Badge from "../ui/Badge";
import Section from "../../layout/Section";
import data from '../../data/mockdata.json';
import { FaRobot } from 'react-icons/fa';
import { BsLightningCharge } from "react-icons/bs";


const { features } = data;
const iconMap = {
  'FaRobot': FaRobot,
  'FaGlobe': FaGlobe,
  'FaBrain': FaBrain,
  'BsLightningCharge': BsLightningCharge,
  'FaRegLightbulb': FaRegLightbulb,
};

const FeatureCard = ({ title, description, icon, index, className, languages, features }) => {
  const IconComponent = iconMap[icon];
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }} className={`lg:h-full ${className}`}>
      <CardSpotlight className="lg:h-full group">
        <div className=" flex flex-col">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
          <p className="text-white/60 mb-4">{description}</p>

          {languages && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-white/80 border border-white/10">{lang.name}</span>
                ))}
              </div>
            </div>
          )}

          {features && (
            <div className="mt-2 space-y-2">
              <h4 className="text-sm font-medium text-white/80">Features:</h4>
              <ul className="space-y-1.5">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-white/60"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-auto pt-4">
            <PrimaryButton>Learn More</PrimaryButton>
          </div>
        </div>
      </CardSpotlight>
    </motion.div>
  )
}

const Features = () => {
  return (
    <Section>
      <div className="text-center mb-20">
        <Badge Icon={FaBolt} text="AI POWERED" />
        <BoldCopy text="Advanced AI Chatbot Features" />
        <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="sm:text-xl text-base  text-gray-400 max-w-3xl mx-auto">
          Experience the next generation of conversational AI with our powerful and intuitive chatbot technology
        </motion.p>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:auto-rows-fr">
          {features.map((feature, index) => (
            <FeatureCard key={index} index={index} {...feature} className={feature.className} />
          ))}
        </div>
      </div>

    </Section>
  );
};

export default Features;
