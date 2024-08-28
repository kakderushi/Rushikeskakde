import React from 'react';
import Diamond from "../../public/Diamond.png";
import Hospitality from "../../public/Hospitality.jpg"
import Image from "../../public/image.png"

const Projects = () => {
  const projects = [
    {
      title: 'Diamond Price Prediction',
      description: 'It helps to Predict the Price of the Diamond using Machine learning.',
      imageUrl: Diamond,
      githubLink:"https://github.com/kakderushi/DimondPricePrediction",
    },
    {
      title: 'Hospitality Domain Analysis',
      description: 'It Analysis the hospitality domain data based on that here we created Power BI Dashbord.',
      imageUrl: Hospitality,
      githubLink:'https://github.com/kakderushi/Hospitality_anlysis',
    },
    {
      title: 'Credit Card Finacial Report ',
      description: 'Credit Card Finacial Report helps to Understand the bank wheather they have to allocate credit card or not.',
      imageUrl: Image,
      githubLink: 'https://github.com/yourusername/project-three',
    },
  ];

  const ProjectCard = ({ title, description, imageUrl, githubLink }) => {
    return (
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-500 hover:text-blue-700"
          >
            View on GitHub
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
