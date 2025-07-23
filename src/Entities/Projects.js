// src/Entities/Projects.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Project from '../Components/Project';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const staticProjects = [
        {
          id: "ribo-ltp",
          title: "Ribo LTP Data Analysis",
          description:
            "Analyzes ribosome profiling and RNA-seq data post-LTP using the NOISeq package in R. Includes biotype and GC content filtering, bias detection, and differential expression analysis.",
          image_url: "",
          project_url: "https://github.com/jahn5244/ribo-data-analysis",
          github_url: "https://github.com/jahn5244/ribo-data-analysis",
          technologies: ["R", "RNA-seq", "NOISeq", "Bioconductor"]
        },
        {
          id: "amazon-analysis",
          title: "Amazon Prime Data Analysis",
          description:
            "Built classification models leveraging viewing preferences and user engagement metrics to predict gender of Amazon Prime users, utilizing Logistic Regression and Random Forest with model evaluation and feature interpretation.",
          image_url: "",
          project_url: "https://github.com/jahn5244/amazon-data-analysis",
          github_url: "https://github.com/jahn5244/amazon-data-analysis",
          technologies: ["Python", "Logistic Regression", "Random Forest", "pandas"]
        },
        {
          id: "mice-protein",
          title: "Mice Protein Expression Analysis",
          description:
            "Performs statistical analysis of protein expression in mice using efficient data structures and algorithms, with built-in test cases to ensure reproducibility and analytical precision.",

          image_url: "",
          project_url: "https://github.com/jahn5244/mice-expression-project",
          github_url: "https://github.com/jahn5244/mice-expression-project",
          technologies: ["Python", "pandas", "unittest"]
        },
        {
            id: "telco-churn",
            title: "Telco Churn Prediction (Work in Progress)",
            description:
              "Developing a full-stack machine learning pipeline to predict customer churn from the Telco dataset. Focuses on business insights, feature engineering, and deployment.",
            image_url: "",
            project_url: "https://github.com/johnsahn2002/churn_telco_project",
            github_url: "https://github.com/johnsahn2002/churn_telco_project",
            technologies: ["Python", "ML Pipeline", "EDA", "Feature Engineering", "Churn"]
        },
        {
          id: "resume-matching",
          title: "AI-Powered Resume–Job Matching System (WIP)",
          description:
            "An end-to-end NLP system that parses resumes, scrapes live job listings, and matches candidates to roles using TF-IDF, spaCy, and Sentence-BERT. Features include A/B resume testing and skill gap detection.",
          image_url: "", // You can add a custom thumbnail image path if available
          project_url: "https://resumejobmatchingsystem.streamlit.app/",
          github_url: "https://github.com/johnsahn2002/resume_job_matching_system",
          technologies: [
            "Python",
            "NLP",
            "Streamlit",
            "TF-IDF",
            "Sentence-BERT",
            "BeautifulSoup",
            "PyTorch"
          ]
        }

      ];

      let fetchedProjects = [];

      try {
        fetchedProjects = await Project.list('-created_date');
      } catch (error) {
        console.warn('Project.list() failed, using static projects only:', error);
      }

      setProjects([...staticProjects, ...fetchedProjects]);
    } catch (err) {
      console.error('Unexpected error in loadProjects:', err);
      setProjects([]);  // fallback if something breaks
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Selected Work
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            A showcase of data-driven projects blending analytical depth with functional design and real-world impact.

          </p>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 animate-pulse">
                <div className="aspect-video bg-gray-200 rounded-2xl mb-6"></div>
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id || index} project={project} index={index} />
            ))}
          </div>
        )}

        {!loading && projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">
              More Projects coming soon. Check back later!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
