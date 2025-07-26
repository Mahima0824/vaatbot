import { Link } from "react-router-dom";
import PrimaryButton, { SecondaryButton } from "../components/ui/Button";
import { motion } from "framer-motion";
import { Navbar, NavBody, NavItems, MobileNav, NavbarLogo, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "../components/ui/resizable-navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/mockdata.json";

export function NavbarDemo() {
  const navigate = useNavigate();
  const {navItems} = data;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative  w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <PrimaryButton onClick={() => navigate("/sign-in")}>Login</PrimaryButton>
            <SecondaryButton onClick={() => navigate("/sign-in")}>Book a call</SecondaryButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>
        </MobileNav>
      </Navbar>
      <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
        {navItems.map((item, idx) => {
          const isHome = item.name === "Home";
          const homeVariants = ['/', '/home', '/home2', '/home3', '/home4'];
          const currentPath = window.location.pathname;

          // Get the current home variant from the path
          const currentHomeVariant = homeVariants.find(variant => {
            if (variant === '/') {
              return currentPath === '/' || homeVariants.every(v => !currentPath.startsWith(v));
            }
            return currentPath.startsWith(variant);
          }) || '/';

          // For home link, use the current home variant, otherwise use the item's link
          const linkTo = isHome ? currentHomeVariant : item.link;

          // Check if current path matches the link (handling home variants)
          const isActive = isHome
            ? homeVariants.some(variant => variant === currentPath || currentPath.startsWith(`${variant}/`))
            : currentPath === item.link || currentPath.startsWith(`${item.link}/`);

          return (
            <div
              key={`mobile-link-${idx}`}
              className="relative w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link className="relative z-10 block w-full py-3 px-4 text-lg font-medium text-white/90 hover:text-white transition-colors duration-200" to={linkTo}>
                <span className="relative z-20">{item.name}</span>
                {isActive && (
                  <motion.span layoutId="mobile-nav-active" className="absolute inset-0 rounded-full bg-primary/20 z-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} />
                )}
              </Link>
            </div>
          );
        })}
        <div className="w-full flex flex-col gap-3 mt-6">
          <PrimaryButton onClick={() => navigate("/sign-in")} className="w-full justify-center py-3 text-base">Login</PrimaryButton>
          <SecondaryButton onClick={() => {
            // Handle book a call
            setIsMobileMenuOpen(false);
          }}
            className="w-full justify-center py-3 text-base"
          >
            Book a call
          </SecondaryButton>
        </div>
      </MobileNavMenu>
    </div>
  );
}

