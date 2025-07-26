import { cn } from "../../lib/utils";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SwapText from "./SwapText";

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);

  // Use window scroll instead of target scroll to avoid container positioning issues
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div ref={ref} className={cn("fixed inset-x-0 top-5 z-50 w-full px-4 mx-auto max-w-screen-2xl", className)}>
      <div className="w-full">
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { visible })
            : child
        )}
      </div>
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }) => {
  return (
    <motion.div initial={{ opacity: 0, y: -20, scale: 0.98 }} animate={{ opacity: 1, y: visible ? 5 : 0, scale: 1, backdropFilter: visible ? "blur(10px)" : "none", width: visible ? "80%" : "100%" }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30
      }}
      className={cn(
        "relative z-[60] mx-auto  w-full flex-row items-center justify-between rounded-full px-4 py-2 hidden lg:flex",
        visible
          ? "bg-gradient-to-r from-primary/20 to-surface/20"
          : "bg-transparent",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);
  const location = useLocation();
  const pathname = location.pathname;

  // Get the current home variant from the path
  const getCurrentHomeVariant = () => {
    const homeVariants = ['/', '/home', '/home2', '/home3', '/home4'];
    // Find the current home variant based on the current path
    const currentVariant = homeVariants.find(variant => {
      if (variant === '/') {
        // For root path, make sure it's not matching other home variants
        return pathname === '/' || homeVariants.every(v => !pathname.startsWith(v));
      }
      return pathname.startsWith(variant);
    });
    return currentVariant || '/';
  };

  return (
    <motion.div onMouseLeave={() => setHovered(null)} className={cn("relative flex-1 flex flex-row items-center justify-center font-medium transition duration-200 lg:flex", className)}>
      {items.map((item, idx) => {
        const isHome = item.name === "Home";
        const homeVariants = ['/', '/home2', '/home3', '/home4'];

        // For home link, use the current home variant, otherwise use the item's link
        const linkTo = isHome ? getCurrentHomeVariant() : item.link;

        // Check if current path matches the link (handling home variants)
        const isActive = isHome
          ? homeVariants.some(variant => variant === pathname || pathname.startsWith(`${variant}/`))
          : pathname === item.link || pathname.startsWith(`${item.link}/`);

        return (
          <div key={`link-${idx}`} className="relative px-4 py-2 mx-1 lg:mx-2" onMouseEnter={() => setHovered(idx)}>
            <Link to={linkTo} className="relative z-10 block w-full h-full" onClick={onItemClick}>
              <SwapText initialText={item.name} finalText={item.name} supportsHover={true} textClassName="relative z-20" disableClick={true} />
            </Link>

            {(hovered === idx || isActive) && (
              <motion.div layoutId="hovered" className="absolute inset-0 h-full w-full rounded-full bg-primary/80 z-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} />
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }) => {
  return (
    <motion.div animate={{
      backdropFilter: visible ? "blur(10px)" : "none",
      width: visible ? "90%" : "100%",
      paddingRight: visible ? "12px" : "0px",
      paddingLeft: visible ? "12px" : "0px",
      borderRadius: visible ? "2rem" : "2rem",
      y: visible ? 5 : 0,
    }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full rounded-full flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-gradient-to-r rounded-full from-primary/20 to-surface/20",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-row items-center justify-between", className)}>
      {children}
    </div>
  );
};

export const MobileNavMenu = ({ children, className, isOpen, onClose }) => {
  const menuRef = React.useRef(null);

  // Close menu when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose?.();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" onClick={onClose} />

          {/* Sidebar */}
          <motion.div ref={menuRef} initial={{ x: "100%", opacity: 0 }} animate={{ x: "0%", opacity: 1 }} exit={{ x: "100%", opacity: 0 }} transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
            className={cn(
              "fixed top-0 right-0 h-screen w-[85%] max-w-xs z-50 bg-gradient-to-r from-primary/20 to-surface/20 backdrop-blur-lg shadow-2xl p-6 flex flex-col items-start justify-start gap-2 border-l border-white/10",
              className
            )}
          >
            {/* Close Button */}
            <button onClick={onClose} className="absolute cursor-pointer top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors duration-200" aria-label="Close menu"><FaTimes className="w-5 h-5 text-white cursor-pointer" /></button>

            <div className="w-full mt-8">
              {React.Children.map(children, child => {
                if (React.isValidElement(child) && child.type === 'a') {
                  return React.cloneElement(child, {
                    className: cn(
                      "w-full px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-white/5",
                      "relative overflow-hidden group block"
                    ),
                    children: (
                      <>
                        <span className="relative z-10">{child.props.children}</span>
                        <motion.span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" layoutId="mobile-hover" />
                      </>
                    )
                  });
                }
                return child;
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick
}) => {
  return isOpen ? (
    <FaTimes className="text-white cursor-pointer" onClick={onClick} />
  ) : (
    <FaBars className="text-white cursor-pointer" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Get the current home variant from the path
  const getCurrentHomeVariant = () => {
    const homeVariants = ['/', '/home2', '/home3', '/home4'];
    // Check if current path starts with any home variant
    const currentVariant = homeVariants.find(variant => pathname.startsWith(variant));
    return currentVariant || '/';
  };

  return (
    <div>
      <Link to={getCurrentHomeVariant()} className="flex cursor-pointer items-center">
        <img src="/images/logo-light.png" alt="Logo" className="h-9 cursor-pointer md:block hidden" />
      </Link>
      <Link to={getCurrentHomeVariant()} className="flex cursor-pointer items-center">
        <img src="/images/logo.png" alt="Logo" className="h-9 cursor-pointer md:hidden block" />
      </Link>
    </div>
  );
};