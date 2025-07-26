
import React from "react";
import { motion } from "framer-motion";
import { PrimaryButton } from "../components/ui/Button";

// Motion List Item Component
const MotionListItem = ({ children }) => (
  <motion.li whileHover={{
    scale: 1.08,
    rotateX: 5,
    rotateY: 2,
  }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="hover:text-primary cursor-pointer transition-all hover:underline underline-offset-4"
    style={{ transformStyle: "preserve-3d" }}
  >
    {children}
  </motion.li>
)

const ChatBotFooter = () => {
  return (
    <footer className="relative w-full bg-gradient-to-b from-surface/30 via-white/10  to-surafce/30 border border-gray text-white pt-20 pb-20 px-6 lg:px-20 overflow-hidden">
      {/* Brand Title with Enhanced 3D Effect */}
      <motion.img src="/images/logo-light.png" className="md:h-20 h-auto mx-auto mb-10" initial={{ opacity: 0, y: 30, rotateX: -20 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 250, damping: 15 }} />

      {/* Enhanced Newsletter Signup */}
      <motion.div className="max-w-2xl mx-auto text-center z-10 relative mb-14" initial={{ opacity: 0, y: 20, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.02, rotateX: 2 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} style={{ transformStyle: "preserve-3d" }}>
        <motion.p className="text-white/70 text-sm mb-4" animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}>Join the AI revolution. Get exclusive updates and early access.</motion.p>
        <motion.div className="flex items-center border border-primary/20 bg-white/5 rounded-full px-4 py-2 shadow-2xl backdrop-blur-md max-w-md mx-auto" whileHover={{ boxShadow: "0 0 30px rgba(96, 165, 250, 0.3)", borderColor: "rgba(96, 165, 250, 0.5)", }}>
          <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent text-white placeholder-white/50 text-sm px-2 py-2 focus:outline-none" />
          <PrimaryButton size="sm">Subscribe</PrimaryButton>
        </motion.div>
      </motion.div>

      {/* Enhanced Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 max-w-6xl mx-auto text-sm z-10 relative">
        {/* Location 1 */}
        <motion.div className="p-4 " initial={{ opacity: 0, y: 20, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.02, rotateX: 2 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} style={{ transformStyle: "preserve-3d" }}>
          <h4 className="font-semibold text-2xl font-tourney text-primary mb-3 ">New York</h4>
          <p className="text-white/60 text-sm leading-6">221 Jackson Street <br /> Brooklyn, NY 1121</p>
        </motion.div>

        {/* Location 2 */}
        <motion.div className="p-4 " initial={{ opacity: 0, y: 20, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.02, rotateX: 2 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} style={{ transformStyle: "preserve-3d" }}>
          <h4 className="font-semibold text-2xl font-tourney text-primary mb-3 ">Amsterdam</h4>
          <p className="text-white/60 text-sm leading-6">Asterweg 20 - C1 <br /> 1031 HN Amsterdam</p>
        </motion.div>

        {/* Company */}
        <motion.div className="p-4 " initial={{ opacity: 0, y: 20, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.02, rotateX: 2 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} style={{ transformStyle: "preserve-3d" }}>
          <h4 className="font-semibold text-2xl font-tourney text-primary mb-3 ">Company</h4>
          <ul className="space-y-2 text-white/60">
            <MotionListItem>About AI</MotionListItem>
            <MotionListItem>Product</MotionListItem>
            <MotionListItem>Pricing</MotionListItem>
            <MotionListItem>Careers</MotionListItem>
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div className="p-4 " initial={{ opacity: 0, y: 20, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.02, rotateX: 2 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} style={{ transformStyle: "preserve-3d" }}>
          <h4 className="font-semibold text-2xl font-tourney text-primary mb-3 ">Connect</h4>
          <ul className="space-y-2 text-white/60">
            <MotionListItem>Instagram</MotionListItem>
            <MotionListItem>Twitter</MotionListItem>
            <MotionListItem>LinkedIn</MotionListItem>
            <MotionListItem>Discord</MotionListItem>
          </ul>
        </motion.div>
      </div>

      {/* Enhanced Bottom Text */}
      <motion.div className="mt-16 text-center text-xs text-white/40 z-10 relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.02 }}>
        <motion.span animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>© {new Date().getFullYear()} Neochat AI — Powered by Advanced Neural Networks</motion.span>
        <span className="mx-2">•</span>
        <motion.a href="#" className="underline hover:text-primary transition-colors" whileHover={{ scale: 1.1 }}>Privacy Policy</motion.a>
        <span className="mx-1">|</span>
        <motion.a href="#" className="underline hover:text-primary transition-colors" whileHover={{ scale: 1.1 }}>Terms of Service</motion.a>
      </motion.div>

      {/* Floating AI Badge */}
      <motion.div className="absolute top-10 right-10 z-20" animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0], }} transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", }}>
        <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm border border-white/20">AI Powered ✨</div>
      </motion.div>
    </footer>
  )
}

export default ChatBotFooter
