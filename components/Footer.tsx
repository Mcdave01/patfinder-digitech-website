import Link from 'next/link';

import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
  Mail,
  Phone
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappMessage = encodeURIComponent(
    'Hello! I am interested in your services. Please provide more information.'
  );

  const whatsappNumber = '+2349048515646';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container-custom section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">PD</span>
              </div>
              <div>
                <div className="font-bold text-xl">PathFinder</div>
                <div className="text-xs text-white/70">DigiTech Limited</div>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">
              West Africa's leading digital transformation partner. Providing end-to-end technology solutions and digital capacity building for institutions and businesses.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-white/70">
                <Phone size={16} />
                <span className="text-sm">+2349048515646 Inquiries</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Mail size={16} />
                <span className="text-sm">info@pathfinderdigitech.org</span>
              </div>
            </div>


            <div className="flex gap-3 pt-2">
  <a
    href="https://www.facebook.com/PathFinderDigiTech"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-[hsl(var(--primary))] transition-colors cursor-pointer"
  >
    <Facebook size={18} />
  </a>

  <a
    href="https://twitter.com/pathfinder39644"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter"
    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-[hsl(var(--primary))] transition-colors cursor-pointer"
  >
    <Twitter size={18} />
  </a>

  <a
    href="https://www.linkedin.com/company/pathfinder-digitech-limited"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-[hsl(var(--primary))] transition-colors cursor-pointer"
  >
    <Linkedin size={18} />
  </a>

  <a
    href="https://www.instagram.com/PathFinderDigiTech"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-[hsl(var(--primary))] transition-colors cursor-pointer"
  >
    <Instagram size={18} />
  </a>

  <a
    href="https://www.youtube.com/@PathFinderDigiTech"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 transition-colors cursor-pointer"
  >
    <Youtube size={18} />
  </a>

  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-green-600 transition-colors cursor-pointer"
  >
    <MessageCircle size={18} />
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-[hsl(var(--secondary))] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/70 hover:text-[hsl(var(--secondary))] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-[hsl(var(--secondary))] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/70 hover:text-[hsl(var(--secondary))] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-white/70 hover:text-[hsl(var(--secondary))] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-[hsl(var(--secondary))] transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-[hsl(var(--secondary))] transition-colors"
                >
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-[hsl(var(--secondary))] transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-[hsl(var(--secondary))] transition-colors"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-[hsl(var(--secondary))] transition-colors"
                >
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[hsl(var(--secondary))] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@pathfinder.org"
                  className="text-white/70 hover:text-[hsl(var(--secondary))] transition-colors"
                >
                  info@pathfinder.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[hsl(var(--secondary))] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+2349048515646"
                  className="text-white/70 hover:text-[hsl(var(--secondary))] transition-colors"
                >
                  +2349048515646
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={20} className="text-[hsl(var(--secondary))] flex-shrink-0 mt-0.5" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[hsl(var(--secondary))] transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/10 mt-12 pt-12">
          <div className="max-w-2xl">
            <h4 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-white/70 mb-4">
              Get the latest updates on our services and industry insights delivered to your inbox.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[hsl(var(--primary))]"
              />
              <button
                type="submit"
                className="flex px-4 py-3 bg-[hsl(var(--secondary))] text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm">
              © {currentYear} Pathfinder. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-[hsl(var(--secondary))] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-[hsl(var(--secondary))] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/70 hover:text-[hsl(var(--secondary))] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
