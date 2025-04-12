import React from 'react';
import { motion } from 'framer-motion';

import wanderlustImage from '../assets/wanderlust.jpg';
import blogsphereImage from '../assets/blogsphere.jpg';
import careerAdvisorImage from '../assets/careerAdvisor.png';
import personalNewsAggregatorImage from '../assets/personalNewsAggregator.jpg';
import simonGameImage from '../assets/simonGame.jpg';
import netflixHomePageImage from '../assets/netflixHomePage.png';

const projects = [
  {
    title: 'Wanderlust',
    description: 'A property renting web app similar to Airbnb. Built with MERN stack.',
    tech: 'React, Node.js, MongoDB',
    github: 'https://github.com/anujmishra786/wanderlust',
    demo: 'https://wanderlust-your-url.vercel.app',
    image: wanderlustImage
  },
  {
    title: 'BlogSphere',
    description: 'A blogging platform with authentication and rich text editing.',
    tech: 'React, Express, MongoDB',
    github: 'https://github.com/anujmishra786/blogsphere',
    demo: 'https://blogsphere-your-url.vercel.app',
    image: blogsphereImage
  },
  {
    title: 'Career Advisor AI',
    description: 'AI-powered career guidance system with resume upload and job recommendation.',
    tech: 'React, Flask, MySQL',
    github: 'https://github.com/anujmishra786/career-advisor',
    demo: 'https://career-advisor-your-url.vercel.app',
    image: careerAdvisorImage
  },
  {
    title: 'Personal News Aggregator',
    description: 'A news aggregator that uses machine learning to filter and recommend articles.',
    tech: 'Python, HTML, CSS, Flask, ML',
    github: 'https://github.com/anujmishra786/personal-news-aggregator',
    demo: 'https://personal-news-aggregator-your-url.vercel.app',
    image: personalNewsAggregatorImage
  },
  {
    title: 'Simon Game',
    description: 'A simple Simon game built with HTML, CSS, and JavaScript.',
    tech: 'HTML, CSS, JavaScript',
    github: 'https://github.com/anujmishra786/simon-game',
    demo: 'https://simon-game-your-url.vercel.app',
    image: simonGameImage
  },
  {
    title: 'Netflix Home Page',
    description: 'A replica of the Netflix homepage using HTML and CSS.',
    tech: 'HTML, CSS',
    github: 'https://github.com/anujmishra786/netflix-homepage',
    demo: 'https://netflix-homepage-your-url.vercel.app',
    image: netflixHomePageImage
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="bg-[#0f0f2e] text-white py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-12 underline">Projects</h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#1a1a3c] rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition duration-300 flex flex-col justify-between"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
              <p className="text-xs text-gray-400 italic mb-6">{project.tech}</p>
              <div className="flex justify-between mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-purple-500 text-purple-400 px-4 py-2 rounded-full text-sm hover:bg-purple-500 hover:text-white transition"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500 px-4 py-2 rounded-full text-sm hover:bg-purple-600 transition"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;
