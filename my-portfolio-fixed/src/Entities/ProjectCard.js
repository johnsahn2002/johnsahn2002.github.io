import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
    >
      <div className="aspect-video overflow-hidden bg-gray-100">
        {project.image_url ? (
          <img 
            src={project.image_url} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
            <div className="text-4xl font-light text-gray-400">{project.title[0]}</div>
          </div>
        )}
      </div>
      
      <div className="p-8">
        <div className="mb-4">
          <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {project.description}
          </p>
        </div>

        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge 
                  key={techIndex} 
                  variant="secondary"
                  className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3">
          {project.project_url && (
            <Button 
              variant="outline" 
              size="sm"
              asChild
              className="border-gray-200 text-gray-700 hover:bg-gray-50 transition-all duration-300"
            >
              <a href={project.project_url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {project.github_url && (
            <Button 
              variant="outline" 
              size="sm"
              asChild
              className="border-gray-200 text-gray-700 hover:bg-gray-50 transition-all duration-300"
            >
              <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}