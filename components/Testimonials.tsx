'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Anderson',
    company: 'Tech StartUp Inc',
    text: 'Pathfinder transformed our entire digital presence. The team was professional, creative, and delivered beyond expectations.',
    rating: 5,
  },
  {
    name: 'Lisa Martinez',
    company: 'Global Retail Corp',
    text: 'Working with Pathfinder was a game-changer. Their digital solutions increased our revenue by 45% within the first year.',
    rating: 5,
  },
  {
    name: 'Robert Chen',
    company: 'Financial Services Ltd',
    text: 'Exceptional quality and attention to detail. The security measures they implemented gave us complete peace of mind.',
    rating: 5,
  },
  {
    name: 'Patricia Wilson',
    company: 'Healthcare Solutions',
    text: 'Their mobile app development skills are outstanding. Our patients love the intuitive interface and seamless experience.',
    rating: 5,
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-spacing bg-gradient-to-b from-white to-[hsl(var(--muted))]">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 bg-[hsl(var(--muted))] text-[hsl(var(--primary))] rounded-full text-sm font-semibold mb-4">
            SUCCESS STORIES
          </div>
          <h2 className="heading-md">What Our Clients Say</h2>
          <p className="subheading mt-4 mx-auto">
            Hear directly from our satisfied clients about their experience working with PathFinder DigiTech.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 bg-white border-2 border-[hsl(var(--border))] rounded-xl hover:border-[hsl(var(--primary))] transition-all duration-300 shadow-md hover:shadow-xl"
              whileHover={{ y: -8 }}
            >
              {/* Star Rating */}
              <motion.div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  >
                    <Star
                      size={18}
                      className="fill-[hsl(var(--secondary))] text-[hsl(var(--secondary))]"
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Testimonial Text */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-[hsl(var(--border))] pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
