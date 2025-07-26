import React from 'react';
import { Link } from 'react-router-dom';

const homeVariants = [
  { name: 'Home', path: '/' },
  { name: 'Home 2', path: '/home2' },
  { name: 'Home 3', path: '/home3' },
  { name: 'Home 4', path: '/home4' }
];

export default function NavDropdown({ isOpen, onClose }) {
  return (
    <div className="absolute left-0 top-full mt-2 w-48 bg-gradient-to-r from-primary/20 to-surface/20 rounded-lg shadow-lg z-10">
      {homeVariants.map((variant) => (
        <Link
          key={variant.path}
          to={variant.path}
          onClick={onClose}
          className="block px-4 py-2 text-sm text-white hover:bg-primary/30 transition-colors duration-200"
        >
          {variant.name}
        </Link>
      ))}
    </div>
  );
}
