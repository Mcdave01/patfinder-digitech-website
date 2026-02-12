import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[hsl(var(--muted))] to-white flex items-center justify-center px-4">
      <div className="container-custom max-w-2xl text-center">
        <div className="mb-8">
          <h1 className="text-9xl md:text-[120px] font-bold text-[hsl(var(--primary))] mb-4">
            404
          </h1>
          <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Page Not Found
          </p>
          <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed max-w-xl mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[hsl(var(--primary))] text-white rounded-lg hover:bg-[hsl(var(--primary))]/90 transition-colors font-semibold"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] rounded-lg hover:bg-[hsl(var(--primary))] hover:text-white transition-all font-semibold"
          >
            Contact Us
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-16 border-t border-[hsl(var(--border))]">
          <p className="text-[hsl(var(--muted-foreground))] mb-6">Quick Links:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--secondary))] font-semibold transition-colors">
              Home
            </Link>
            <span className="text-[hsl(var(--border))]">•</span>
            <Link href="/services" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--secondary))] font-semibold transition-colors">
              Services
            </Link>
            <span className="text-[hsl(var(--border))]">•</span>
            <Link href="/about" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--secondary))] font-semibold transition-colors">
              About
            </Link>
            <span className="text-[hsl(var(--border))]">•</span>
            <Link href="/blog" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--secondary))] font-semibold transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
