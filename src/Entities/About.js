import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Frontend Development', icon: Code, description: 'React, Vue.js, TypeScript' },
    { name: 'UI/UX Design', icon: Palette, description: 'Figma, Adobe Creative Suite' },
    { name: 'Performance', icon: Zap, description: 'Optimization & Best Practices' },
    { name: 'Passion', icon: Heart, description: 'Creating meaningful experiences' }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            About Me
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            I'm a passionate developer and designer with over 5 years of experience creating 
            digital solutions that make a difference. I believe in the power of clean code, 
            beautiful design, and user-centered thinking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                <skill.icon className="w-8 h-8 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{skill.name}</h3>
              <p className="text-gray-600 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-light text-gray-900 mb-6">My Philosophy</h3>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              "Great design is not just about making things look pretty—it's about creating 
              experiences that feel effortless and meaningful. Every line of code and every 
              pixel should serve a purpose."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}