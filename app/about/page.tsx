import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Target, Users, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Pathfinder - Our Story & Mission',
  description: 'Learn about Pathfinder Digital, our mission, values, and the team behind your success.',
};

const values = [
  {
    icon: Target,
    title: 'Client-Centric',
    description: 'Your success is our success. We focus on delivering solutions that exceed expectations.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We stay ahead of the curve with the latest technologies and creative approaches.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work as an extension of your team, ensuring seamless communication and alignment.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards of quality in everything we do.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-br from-white via-[hsl(var(--muted))] to-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-lg mb-6">About Pathfinder Digital</h1>
              <p className="subheading mx-auto mb-8">
                We're a team of passionate digital experts dedicated to transforming businesses through innovative technology and creative solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/team-image.jpg"
                  alt="Our team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="heading-md">Our Story</h2>
                <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
                  Founded in 2016, Pathfinder Digital started with a simple mission: to help businesses thrive in the digital age. What began as a small team of passionate developers has grown into a full-service digital agency serving clients across the globe.
                </p>
                <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
                  Over the years, we've delivered over 50 successful projects for companies of all sizes, from ambitious startups to established enterprises. Our success is built on a foundation of trust, expertise, and a genuine commitment to our clients' growth.
                </p>
                <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
                  Today, we continue to push boundaries and explore new possibilities in digital technology, always keeping our clients' needs at the center of everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-spacing bg-[hsl(var(--muted))]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-md">Our Values</h2>
              <p className="subheading mt-4 mx-auto">
                These core values guide every decision we make and every project we undertake.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[hsl(var(--muted))] mb-4">
                      <Icon size={32} className="text-[hsl(var(--primary))]" />
                    </div>
                    <h3 className="heading-sm mb-3">{value.title}</h3>
                    <p className="text-[hsl(var(--muted-foreground))]">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-spacing bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <p className="text-lg opacity-90">Projects Delivered</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">40+</div>
                <p className="text-lg opacity-90">Happy Clients</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">8+</div>
                <p className="text-lg opacity-90">Years of Experience</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">25+</div>
                <p className="text-lg opacity-90">Team Members</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-white">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <h2 className="heading-md mb-6">Ready to Work Together?</h2>
            <p className="subheading mb-8 mx-auto">
              Join the growing list of companies that have transformed their business with Pathfinder Digital.
            </p>
            <Link href="/#contact" className="btn-primary">
              Get Started Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
