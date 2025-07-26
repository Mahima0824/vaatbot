import { GlowingEffect } from "../components/ui/glowing-effect";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Spotlight } from "../components/ui/spotlight-new";
import { Link } from "react-router-dom";

export function SignIn() {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="min-h-screen relative overflow-hidden flex px-4 items-center justify-center">
            <Spotlight />
            <GridItem>
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl overflow-hidden">
                    <div className={`hidden md:flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 relative p-8 ${isSignUp ? 'md:order-1' : 'md:order-2'}`}>
                        <AnimatePresence mode="wait">
                            <motion.div key={isSignUp ? 'signup' : 'signin'} initial={{ x: isSignUp ? 100 : -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: isSignUp ? -100 : 100, opacity: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-md z-10 p-6 rounded-2xl">
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                        {isSignUp ? (
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                                            </svg>
                                        ) : (
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                            </svg>
                                        )}
                                    </div>
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent mb-3">
                                        {isSignUp ? 'Welcome to Our Community' : 'Welcome Back'}
                                    </h2>
                                    <p className="text-white/80 text-sm leading-relaxed">
                                        {isSignUp ? 'Join our community and start your AI journey today!' : 'Sign in to access your dashboard and manage your AI assistant experience.'}
                                    </p>
                                </div>
                                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className={`p-8 md:p-12 ${isSignUp ? 'md:order-2' : 'md:order-1'}`}>
                        <AnimatePresence mode="wait">
                            <motion.div key={isSignUp ? 'signup' : 'signin'} initial={{ x: isSignUp ? -100 : 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: isSignUp ? 100 : -100, opacity: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
                                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
                                    <h2 className="text-2xl font-semibold mb-2">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
                                    <p className="text-sm text-gray-400">{isSignUp ? 'Create your account' : 'Enter your credentials below'}</p>
                                </motion.div>

                                <form className="space-y-6">
                                    {isSignUp && (
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Full Name</label>
                                            <div className="flex items-center bg-white/10 rounded-lg p-3">
                                                <input type="text" placeholder="Your full name" className="bg-transparent outline-none flex-1 text-white placeholder-gray-400" />
                                            </div>
                                        </div>
                                    )}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{isSignUp ? 'Email Address' : 'Email'}</label>
                                        <div className="flex items-center bg-white/10 rounded-lg p-3">
                                            <FaEnvelope className="text-gray-400 mr-2" />
                                            <input name="email" type="email" placeholder="you@example.com" className="bg-transparent outline-none flex-1 text-white placeholder-gray-400" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Password</label>
                                        <div className="flex items-center bg-white/10 rounded-lg p-3">
                                            <FaLock className="text-gray-400 mr-2" />
                                            <input type="password" placeholder="••••••••" className="bg-transparent outline-none flex-1 text-white placeholder-gray-400" />
                                        </div>
                                    </div>
                                    <label className="flex items-center space-x-2 cursor-pointer select-none group">
                                        {/* Hidden native checkbox */}
                                        <input name="remember" id="remember" type="checkbox" className="appearance-none w-4 h-4 rounded-sm border border-white bg-transparent checked:bg-primary checked:border-teal checked:after:content-['✓'] checked:after:text-white checked:after:text-sm checked:after:block checked:after:leading-none checked:after:text-center checked:after:font-bold" />
                                        {/* Label text */}
                                        <span className="text-sm text-white">
                                            {isSignUp ? 'I agree to terms and conditions' : 'Remember me'}
                                        </span>
                                    </label>
                                    <button type="submit" className="w-full bg-primary hover:bg-primary/80 transition text-white py-3 rounded-lg font-medium mt-4 cursor-pointer">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
                                </form>

                                <p className="text-sm text-center text-gray-400 mt-8">
                                    {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
                                    <Link to="/signin" className="text-primary hover:underline cursor-pointer" onClick={(e) => {
                                        e.preventDefault();
                                        setIsSignUp(!isSignUp);
                                    }}>
                                        {isSignUp ? 'Sign in' : 'Sign up'}
                                    </Link>
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </GridItem>
        </div>
    );
}
const GridItem = ({ children }) => {
    return (
        <div className="relative w-full max-w-6xl mx-auto">
            <div className="relative w-full h-full rounded-2xl border border-white/10 md:rounded-3xl">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                {children}
            </div>
        </div>
    );
};

