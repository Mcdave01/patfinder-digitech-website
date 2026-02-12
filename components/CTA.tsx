'use client';

import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  const whatsappMessage = encodeURIComponent(
    'Hello! I would like to discuss how Pathfinder can help transform my business. Please provide more details about your services.'
  );
  const whatsappLink = `https://wa.me/?text=${whatsappMessage}`;

  return (
    <section className="section-spacing bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white overflow-hidden">
      <div className="container-custom text-center">
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="heading-lg text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Let's work together to create digital solutions that drive real results. Contact us today for a free consultation.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                className="px-8 py-4 bg-white text-[hsl(var(--primary))] rounded-lg hover:bg-opacity-90 transition-all font-semibold flex items-center justify-center gap-2 group"
              >
                Schedule a Call
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: 2, duration: 1.5, repeatDelay: 2 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
            </motion.div>
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[hsl(var(--primary))] transition-all font-semibold flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          <motion.p
            className="text-sm text-white/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            No credit card required • Free 30-minute consultation
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
