import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, BarChart2, Brain } from 'lucide-react';

export default function About() {
  const skills = [
    {
      name: 'Full-Stack Data Science',
      icon: Code,
      description: 'Python, R, SQL · Data Analysis, Machine Learning'
    },
    {
      name: 'Data Engineering & Cloud',
      icon: Database,
      description: 'Pandas, NumPy, Azure, Data Pipelines, APIs'
    },
    {
      name: 'Data Visualization',
      icon: BarChart2,
      description: 'Matplotlib, Seaborn, Power BI, Tableau'
    },
    {
      name: 'Machine Learning & Statistics',
      icon: Brain,
      description: 'Regression Analysis, A/B Testing, Hypothesis Testing'
    }
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
            I’m a driven data scientist and developer passionate about building intelligent systems 
            that create real-world impact. With hands-on experience across machine learning, data engineering, 
            and ethical AI, I craft end-to-end solutions that are both technically sound and user-focused.
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
              "Data is not just numbers — it's the story of human behavior. The deeper you listen, the better you build."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}