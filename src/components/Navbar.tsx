"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(253, 252, 248, 0)", "rgba(253, 252, 248, 0.9)"]
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 50],
    ["rgba(229, 225, 211, 0)", "rgba(229, 225, 211, 1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      style={{ 
        backgroundColor,
        borderBottom: `1px solid ${borderOpacity}`
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300"
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-serif text-xl font-bold transition-transform group-hover:scale-110">
            H
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold text-foreground leading-none tracking-tight">Holy Family</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80 mt-1">Dental Care</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8">
            {['Specialties', 'Practitioner', 'Location', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              href="tel:08071909299" 
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 text-primary font-medium hover:bg-primary/5 transition-all text-sm"
            >
              <Phone className="w-4 h-4" /> Call Us
            </Link>
            <Link 
              href="https://wa.me/918071909299" 
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all text-sm shadow-lg shadow-primary/20"
            >
              <MessageCircle className="w-4 h-4" /> Book Now
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-xl"
        >
          <div className="flex flex-col gap-6">
            {['Specialties', 'Practitioner', 'Location', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-serif font-medium text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <Link 
                href="tel:08071909299" 
                className="flex items-center justify-center gap-2 py-4 rounded-2xl border border-border text-foreground font-medium"
              >
                <Phone className="w-4 h-4" /> Call
              </Link>
              <Link 
                href="https://wa.me/918071909299" 
                className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-primary text-white font-medium"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
