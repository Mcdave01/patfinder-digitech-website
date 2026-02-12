import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  const whatsappMessage = encodeURIComponent(
    'Hello! I am interested in your digital solutions. Please tell me more about your services.'
  );

  const whatsappNumber = '+2349048515646';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="section-spacing bg-gradient-to-br from-white via-[hsl(var(--muted))] to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 bg-[hsl(var(--muted))] text-[hsl(var(--primary))] rounded-full text-sm font-semibold">
                ✨ Welcome to Pathfinder
              </div>
              <h1 className="heading-lg">
                Transform Your Business with Digital Excellence
              </h1>
              <p className="subheading">
                We deliver cutting-edge digital solutions that help businesses grow, innovate, and succeed in the digital age. Your vision, our expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="btn-primary flex items-center justify-center sm:justify-start gap-2"
              >
                Start Your Journey
                <ArrowRight size={18} />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start gap-2 px-6 py-3 border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] rounded-lg hover:bg-[hsl(var(--primary))] hover:text-white transition-all font-semibold"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <div className="text-3xl font-bold text-[hsl(var(--primary))]">50+</div>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Projects Delivered</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[hsl(var(--primary))]">40+</div>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Happy Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[hsl(var(--primary))]">8+</div>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/hero-image.jpg"
              alt="Digital transformation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
