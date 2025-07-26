import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CardSpotlight } from '../components/ui/card-spotlight';
import { Spotlight } from '../components/ui/spotlight-new';
import Section from '../layout/Section';
import { FiArrowRight, FiClock, FiTag, FiSearch } from 'react-icons/fi';
import data from '../data/mockdata.json';

const tags = ['All', 'AI', 'NLP', 'Voice', 'UX'];
const { blogpagePosts } = data;

const Blog = () => {
    const [selectedTag, setSelectedTag] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = blogpagePosts.filter(post => {
        const matchesTag = selectedTag === 'All' || post.tag === selectedTag;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTag && matchesSearch;
    });

    return (
        <Section container={false} className="min-h-screen overflow-hidden py-20 md:py-32 h-full text-white relative">
            <Spotlight />
            {[...Array(20)].map((_, i) => (
                <motion.div className={`absolute rounded-full bg-white opacity-10`} key={i}
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
            {/* Hero Section */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
                <motion.span className="inline-block bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text text-sm font-medium mb-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    AI CHATBOT BLOG
                </motion.span>
                <motion.h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 mb-6 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    Insights & Updates from the <span className="text-primary">AI Chatbot</span> World
                </motion.h1>
                <motion.p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    Discover the latest trends, tools, and tutorials to build intelligent assistants and revolutionize user experiences.
                </motion.p>

                {/* Search Bar */}
                <motion.div className="relative max-w-xl mx-auto mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                    <div className="relative">
                        <FiSearch size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
                        <input type="text" placeholder="Search articles..." className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent " value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>
                </motion.div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mb-20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                {[
                    { value: '06+', label: 'Articles Published' },
                    { value: '05+', label: 'Tags Covered' },
                    { value: '1.2K+', label: 'Monthly Readers' }
                ].map((stat, index) => (
                    <motion.div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                        key={index}
                        whileHover={{ y: -5 }}
                    >
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-cyan-400 text-transparent bg-clip-text mb-2">{stat.value}</h2>
                        <p className="text-gray-400 font-medium">{stat.label}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Tags Filter */}
            <motion.div className="flex flex-wrap justify-center gap-3 mb-16 px-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                {tags.map((tag, i) => (
                    <motion.button key={i} onClick={() => setSelectedTag(tag)} className={`px-5 py-2 cursor-pointer rounded-full text-sm font-medium transition-all duration-300 ${selectedTag === tag ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        {tag}
                    </motion.button>
                ))}
            </motion.div>



            {/* Blog Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                <AnimatePresence>
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post, index) => (
                            <motion.div key={index} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20, scale: 0.95 }} transition={{ duration: 0.3, delay: index * 0.05 }} className="group relative h-full">
                                <CardSpotlight padding={false} >
                                    <div className="relative  overflow-hidden rounded-xl h-full flex flex-col">
                                        <div className="relative overflow-hidden rounded-t-xl">
                                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute top-4 right-4">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 backdrop-blur-sm text-primary">
                                                    {post.tag}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex items-center text-xs text-gray-400 mb-3">
                                                <FiClock className="mr-1.5" />
                                                <span>{post.date}</span>
                                                <span className="mx-2">•</span>
                                                <FiTag className="mr-1.5" />
                                                <span>{post.tag}</span>
                                            </div>
                                            <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                                            <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                                            <div className="flex items-center text-sm text-primary font-medium mt-auto pt-4 border-t border-white/5 cursor-pointer">
                                                Read more <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </CardSpotlight>
                            </motion.div>
                        ))
                    ) : (
                        <motion.div className="col-span-full text-center py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <div className="text-5xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* CTA Banner */}
            <motion.div className="relative overflow-hidden rounded-2xl mx-4 md:mx-auto mt-28 mb-16 max-w-6xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm rounded-2xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
                <div className="relative z-10 p-8 md:p-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-4" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            Stay Ahead in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AI World</span>
                        </motion.h2>
                        <motion.p className="text-gray-300 mb-8 text-lg" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                            Get the latest articles, tools, and insights directly in your inbox.
                        </motion.p>
                        <motion.div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                            <div className="relative flex-1">
                                <input name="email" id="email" type="email" placeholder="Enter your email" className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent backdrop-blur-sm" />
                            </div>
                            <button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 cursor-pointer text-white font-medium rounded-full px-6 py-3 whitespace-nowrap transition-all duration-300 transform hover:scale-[1.03] shadow-lg hover:shadow-primary/20">Subscribe Now</button>
                        </motion.div>
                        <motion.p className="text-xs text-gray-400 mt-4" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                            No spam, just valuable content. Unsubscribe anytime.
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
};

export default Blog;
