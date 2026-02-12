'use client';

import Image from 'next/image';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Mr Adedotun Livingstone',
    role: 'Founder & CEO',
    bio: 'Strategic visionary with 10+ years in digital transformation',
    image: '/',
  },
  {
    name: 'Ayodele Oke',
    role: 'CTO & Lead Developer',
    bio: 'Full-stack expert specializing in scalable architectures',
    image: '/',
  },
  {
    name: 'Mr Mayowa Olaniran',
    role: 'Head of Design',
    bio: 'Award-winning UX/UI designer passionate about user experience',
    image: '/',
  },
  {
    name: 'Fuwad Olanrewaju',
    role: 'Project Manager',
    bio: 'Agile practitioner ensuring timely and quality delivery',
    image: '/',
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

export default function Team() {
  return (
    <section id="about" className="section-spacing bg-[hsl(var(--muted))]">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 bg-white text-[hsl(var(--primary))] rounded-full text-sm font-semibold mb-4">
            OUR TEAM
          </div>
          <h2 className="heading-md">Meet the Experts</h2>
          <p className="subheading mt-4 mx-auto">
            Our talented team brings diverse expertise and passion to every project.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-[hsl(var(--muted))]">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-1">{member.name}</h3>
                <p className="text-[hsl(var(--primary))] font-semibold text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Social Links */}
                <motion.div
                  className="flex items-center gap-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {[
                    { icon: Linkedin, label: 'LinkedIn' },
                    { icon: Twitter, label: 'Twitter' },
                    { icon: Mail, label: 'Email' },
                  ].map((social, idx) => {
                    const SocialIcon = social.icon;
                    return (
                      <motion.a
                        key={idx}
                        href="#"
                        aria-label={social.label}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[hsl(var(--muted))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition-colors"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        variants={{
                          hidden: { opacity: 0, scale: 0 },
                          visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ type: 'spring', stiffness: 200 }}
                      >
                        <SocialIcon size={16} />
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
