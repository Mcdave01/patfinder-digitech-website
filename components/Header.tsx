'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import Image from 'next/image';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    'Hello! I am interested in your services. Please provide more information.' 
  );

  const reciepientNumber = '+2349048515646'
  const whatsappLink = `https://wa.me/${reciepientNumber}?text=${whatsappMessage}`;


  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center">
            <Image src="/logo_path.jpg" alt="PathFinder DigiTech Logo" width={24} height={24} className="object-contain" />
            <span className="text-white font-bold text-lg">PD</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-xl font-bold text-foreground leading-none">PathFinder</div>
            <div className="text-xs text-[hsl(var(--muted-foreground))]">DigiTech</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-[hsl(var(--primary))] transition-colors font-medium">
            Home
          </Link>
          <Link href="/services" className="text-foreground hover:text-[hsl(var(--primary))] transition-colors font-medium">
            Services
          </Link>
          <Link href="/about" className="text-foreground hover:text-[hsl(var(--primary))] transition-colors font-medium">
            About
          </Link>
          <Link href="/blog" className="text-foreground hover:text-[hsl(var(--primary))] transition-colors font-medium">
            Blog
          </Link>
          <Link href="/#contact" className="text-foreground hover:text-[hsl(var(--primary))] transition-colors font-medium">
            Contact
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] rounded-lg hover:bg-[hsl(var(--primary))] hover:text-white transition-all font-semibold text-sm"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <Link href="#contact" className="btn-primary text-sm">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-border md:hidden">
            <div className="container-custom flex flex-col gap-4 py-4">
              <Link
                href="/"
                className="text-foreground hover:text-[hsl(var(--primary))] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-foreground hover:text-[hsl(var(--primary))] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-[hsl(var(--primary))] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-foreground hover:text-[hsl(var(--primary))] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/#contact"
                className="text-foreground hover:text-[hsl(var(--primary))] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] rounded-lg hover:bg-[hsl(var(--primary))] hover:text-white transition-all font-semibold"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <Link href="#contact" className="btn-primary text-center">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
