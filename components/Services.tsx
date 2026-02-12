'use client';

import Image from 'next/image';
import { Cloud, Laptop, Palette, Book, Video, BarChart3, BookOpen, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Cloud,
    title: 'Institutional Digital Transformation',
    description: 'Cloud-based management systems for schools, hospitals, and businesses. Student/Patient/Employee information management, E-Learning platforms, and automated billing systems.',
    image: '/service-digital-transform.avif',
  },
  {
    icon: Laptop,
    title: 'Computer Laboratory Solutions',
    description: 'Complete computer laboratory design, setup, hardware procurement, network configuration, and technical support services.',
    image: '/service-lab-solutions.webp',
  },
  {
    icon: Palette,
    title: 'Web & Graphic Design',
    description: 'Professional website design, corporate branding, logo design, UI/UX design, and marketing collateral creation.',
    image: '/service-web-design.jpg',
  },
  {
    icon: Book,
    title: 'Printing & Publishing Services',
    description: 'Digital and offset printing, book publishing (e-publication and hardcopy), academic materials, and branding services.',
    image: '/service-printing.jpg',
  },
  {
    icon: Video,
    title: 'Video Production & Multimedia',
    description: 'Corporate video production, educational content, animation, motion graphics, event coverage, and promotional videos.',
    image: '/service-video.jpg',
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing Services',
    description: 'SEO, social media marketing, content marketing, Google Ads, email campaigns, and comprehensive digital strategy development.',
    image: '/service-marketing.avif',
  },
  {
    icon: BookOpen,
    title: 'Technology Training & Consultation',
    description: 'Digital literacy training, Microsoft Office Suite training, system administration, and customized corporate training programs.',
    image: '/service-training.avif',
  },
  {
    icon: Lock,
    title: 'Cybersecurity Services',
    description: 'Security audits, network security, data protection, vulnerability assessment, and compliance management.',
    image: '/service-security.webp',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Business Intelligence',
    description: 'Advanced data analysis, predictive modeling, business intelligence dashboards, and data-driven insights for strategic decision making.',
    image: '/service-analytics.webp',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="section-spacing bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 bg-[hsl(var(--muted))] text-[hsl(var(--primary))] rounded-full text-sm font-semibold mb-4">
            CORE SERVICES
          </div>
          <h2 className="heading-md">Digital Solutions for Institutions & Businesses</h2>
          <p className="subheading mt-4 mx-auto">
            End-to-end digital transformation services designed to empower institutions and businesses across Nigeria and beyond.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white border border-[hsl(var(--border))] cursor-pointer"
                whileHover={{ y: -8 }}
              >
                {/* Image Container */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))]/10 to-[hsl(var(--secondary))]/10">
                  <Image
                    src={service.image || '/placeholder.svg'}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[hsl(var(--primary))]"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon size={24} className="text-white" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
