import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Code, Palette, Smartphone, BarChart3, Zap, Shield, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Our Services - Digital Solutions by Pathfinder',
  description: 'Explore our comprehensive range of digital services designed to transform your business.',
};

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with latest technologies',
    features: [
      'Responsive & Mobile-First Design',
      'High Performance & Scalability',
      'SEO Optimized',
      'Secure & Compliant',
      'API Integration',
      'Real-time Analytics',
    ],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful designs that engage and convert',
    features: [
      'User Research & Discovery',
      'Wireframing & Prototyping',
      'Visual Design System',
      'Responsive Design',
      'Usability Testing',
      'Design Documentation',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-Platform Solutions',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
    ],
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions for growth',
    features: [
      'SEO Optimization',
      'Content Marketing',
      'Social Media Strategy',
      'PPC Campaigns',
      'Email Marketing',
      'Analytics & Reporting',
    ],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast loading and optimal user experience',
    features: [
      'Speed Optimization',
      'Image Optimization',
      'Caching Strategies',
      'Code Minification',
      'CDN Integration',
      'Performance Monitoring',
    ],
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security measures',
    features: [
      'SSL/TLS Certificates',
      'Data Encryption',
      'GDPR Compliance',
      'HIPAA Compliance',
      'Security Audits',
      '24/7 Monitoring',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-br from-white via-[hsl(var(--muted))] to-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-lg mb-6">Our Services</h1>
              <p className="subheading mx-auto">
                Comprehensive digital solutions tailored to meet your unique business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group p-8 bg-white border-2 border-[hsl(var(--border))] rounded-xl hover:border-[hsl(var(--primary))] hover:shadow-xl transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-[hsl(var(--muted))] group-hover:bg-[hsl(var(--primary))] transition-colors mb-6">
                      <Icon size={28} className="text-[hsl(var(--primary))] group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="heading-sm mb-3">{service.title}</h3>
                    <p className="text-[hsl(var(--muted-foreground))] mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-[hsl(var(--primary))] flex-shrink-0" />
                          <span className="text-sm text-[hsl(var(--muted-foreground))]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/#contact"
                      className="inline-block text-[hsl(var(--primary))] font-semibold hover:text-[hsl(var(--secondary))] transition-colors"
                    >
                      Learn More →
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-spacing bg-[hsl(var(--muted))]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-md">Our Process</h2>
              <p className="subheading mt-4 mx-auto">
                A structured approach to delivering exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery', description: 'We understand your goals and requirements' },
                { step: '02', title: 'Planning', description: 'We create a detailed roadmap for your project' },
                { step: '03', title: 'Development', description: 'We build high-quality solutions with precision' },
                { step: '04', title: 'Launch & Support', description: 'We deploy and provide ongoing support' },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-[hsl(var(--primary))] mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <h2 className="heading-md mb-6">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-white text-[hsl(var(--primary))] rounded-lg hover:bg-opacity-90 transition-all font-semibold"
            >
              Schedule Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
