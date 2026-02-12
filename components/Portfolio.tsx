'use client';

import Image from 'next/image';
import { ExternalLink, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const portfolioItems = [
  {
    title: 'Student Management System',
    category: 'Educational Technology',
    image: '/portfolio-image_sms.png',
    description: 'Comprehensive school management system with attendance, grades, and parent portal.',
  },
  {
    title: 'Hospital Management System',
    category: 'Healthcare Technology',
    image: '/portfolio-image_health.png',
    description: 'Patient records, billing, pharmacy, and lab management integrated platform.',
  },
  {
    title: 'Digital Space - IoT Infrastructure',
    category: 'Digital Infrastructure',
    image: '/portfolio-image_digital.png',
    description: 'Cloud infrastructure and IoT device management for smart institutions and buildings.',
  },
  {
    title: 'Data Analytics Dashboard',
    category: 'Data Analysis',
    image: '/portfolio-image_data.png',
    description: 'Real-time analytics and business intelligence dashboard for decision makers.',
  },
  {
    title: 'E-Learning Platform',
    category: 'Educational Technology',
    image: '/portfolio-image_e-learning.png',
    description: 'Interactive online learning platform with video content, assignments, and assessments.',
  },
  {
    title: 'Business Intelligence System',
    category: 'Data Analysis',
    image: '/portfolio-image_dataAnalysis.png',
    description: 'Advanced data analytics with predictive modeling and automated reporting.',
  },
  {
    title: 'Digital Marketing Portal',
    category: 'Digital Services',
    image: '/portfolio-image_marketing.png',
    description: 'SEO, social media management, and campaign analytics integrated platform.',
  },
  {
    title: 'Government Services Platform',
    category: 'Digital Solutions',
    image: '/portfolio-image_gov.png',
    description: 'Online service delivery and citizen engagement platform for government agencies.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-spacing bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 bg-[hsl(var(--muted))] text-[hsl(var(--primary))] rounded-full text-sm font-semibold mb-4">
            OUR PORTFOLIO
          </div>
          <h2 className="heading-md">Showcase of Our Work</h2>
          <p className="subheading mt-4 mx-auto">
            Explore the innovative projects we've delivered for institutions and businesses.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white border border-[hsl(var(--border))] cursor-pointer"
              whileHover={{ y: -8 }}
            >
              {/* Image Container */}
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))]/10 to-[hsl(var(--secondary))]/10">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
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
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink size={32} className="text-white" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  {item.category.includes('Data') && <BarChart3 size={16} className="text-[hsl(var(--primary))]" />}
                  <span className="text-xs text-[hsl(var(--primary))] font-semibold uppercase tracking-wide">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a href="#contact" className="btn-primary">
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
