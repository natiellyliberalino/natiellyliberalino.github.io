import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Marcas', path: '/marcas' },
  { name: 'Surf Vibes', path: '/surf-vibes' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-fendi/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-center">

        <div className="flex items-center space-x-6 md:space-x-16">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm md:text-base uppercase tracking-[0.15em] md:tracking-[0.3em] transition-all hover:text-brown-dark relative group whitespace-nowrap",
                location.pathname === item.path ? "text-brown-dark font-bold" : "text-fendi/70"
              )}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 right-1 h-0.5 bg-brown-dark rounded-full"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile menu button could go here if needed, but keeping it clean for now */}
      </div>
    </nav>
  );
}
