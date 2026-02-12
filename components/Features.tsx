'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  'Expert team with 8+ years of experience',
  'Latest technologies and best practices',
  'Dedicated project managers',
  'Transparent communication',
  'On-time project delivery',
  'Post-launch support and maintenance',
];

export default function Features() {
  return (
    <section className="section-spacing bg-[hsl(var(--muted))]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <motion.div
            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/partner.avif"
              alt="Our services and expertise"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 bg-white text-[hsl(var(--primary))] rounded-full text-sm font-semibold">
                WHY CHOOSE US
              </div>
              <h2 className="heading-md">Why Partner with Pathfinder?</h2>
              <p className="subheading">
                We're committed to delivering exceptional results that exceed your expectations. Here's what sets us apart.
              </p>
            </div>

            <motion.ul
              className="space-y-3"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <CheckCircle2 size={24} className="text-[hsl(var(--primary))] flex-shrink-0" />
                  </motion.div>
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#contact"
                className="inline-block btn-primary"
              >
                Learn More About Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
