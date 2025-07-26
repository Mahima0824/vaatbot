import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaTags, FaArrowRight } from 'react-icons/fa';
import Badge from '../ui/Badge';
import Section from '../../layout/Section';
import BoldCopy from '../ui/bold-copy';
import Button from '../ui/Button';
import data from '../../data/mockdata.json';

const { blogPosts } = data;


const BlogCard = ({ post, index }) => {
  // Generate a random rotation between -3 and 3 degrees for the card
  const rotation = (index % 3 - 1) * 3; // -3, 0, or 3 degrees
  
  return (
    <motion.div className="relative group" initial={{ opacity: 0, y: 30, rotate: rotation }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} whileHover={{ y: -10, rotate: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 20, delay: index * 0.1 }} viewport={{ once: true, margin: "-20% 0px -20% 0px" }}>
      {/* Decorative corner elements */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
      
      <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-border group-hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
        {/* Image container with gradient overlay */}
        <div className="relative h-48 overflow-hidden">
          <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/20 z-10 mix-blend-overlay" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} />
          <motion.img src={post.image} alt={post.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
          
          {/* Tag chips */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {post.tags.map((tag, i) => (
              <motion.span key={i} className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary/90 to-accent/90 text-white rounded-full backdrop-blur-sm shadow-lg" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 + i * 0.1 }} viewport={{ once: true }}>
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          {/* Date and author */}
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <span className="flex items-center mr-4 group-hover:text-white transition-colors">
              <FaCalendarAlt className="mr-1.5 text-primary group-hover:scale-110 transition-transform" />
              {post.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-muted mr-4"></span>
            <span className="flex items-center group-hover:text-white transition-colors">
              <FaUser className="mr-1.5 text-primary group-hover:scale-110 transition-transform" />
              {post.author}
            </span>
          </div>
          
          {/* Title with gradient text on hover */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
            {post.title}
          </h3>
          
          {/* Excerpt with fade effect */}
          <p className="text-muted-foreground mb-6 line-clamp-3 flex-1 group-hover:text-muted transition-colors">
            {post.excerpt}
          </p>
          
          {/* Footer with read time and read more button */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50 group-hover:border-primary/30 transition-colors">
            <span className="text-sm text-muted group-hover:text-primary transition-colors">
              {post.readTime}
            </span>
            <button className="flex items-center text-sm font-medium text-primary hover:text-white group-hover:translate-x-1 transition-all duration-300 cursor-pointer">
              Read Article <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        {/* Animated border bottom */}
        <div className="h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </motion.div>
  );
};



const Blog = () => {
  return (
    <Section id="blog" className="relative overflow-hidden">
      <div className="relative z-10 text-center mb-16">
        <Badge Icon={FaTags} text="Our Blog" />
        <BoldCopy text="Latest Articles" />
        <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 ,delay: 0.2}} className="sm:text-lg text-base text-muted-foreground max-w-2xl mx-auto">
          Stay updated with the latest trends, insights, and news in AI and technology.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => <BlogCard key={post.id} post={post} index={index} />)}
      </div>
      
      <div className="text-center mt-12">
        <Button>View All Articles</Button>
      </div>
    </Section>
  );
};

export default Blog;
