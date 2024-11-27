import React from 'react';

const Projects = () => {
  const projects = [
    {

      title: 'Credit Card Defaulter Prediction ',
      description: 'It Predicts the wheather the customer defualt the payment or not.',
      imageUrl: "/CreditcardImg.jpg", // Use the path directly
      githubLink:'https://github.com/kakderushi/CreditCardPrediction',
    },
    {

      title: 'StudyNotion EdTeach Website ',
      description: 'Designed and developed the Study Notion EdTech website by implementing responsive layouts using React.js and Tailwind CSS.',
      imageUrl: "/stdunotion.jpg",  // Use the path directly
      githubLink:'https://github.com/kakderushi/StudyNotion/tree/master',
    }
    ,
    
    {
      title: 'Hospitality Domain Analysis',
      description: 'It Analysis the hospitality domain data based on that here we created Power BI Dashbord.',
      imageUrl: "/Hospitality.jpg",  // Use the path directly
      githubLink:'https://github.com/kakderushi/Hospitality_anlysis',
    },
    {
      title: 'Credit Card Finacial Report ',
      description: 'Credit Card Finacial Report helps to Understand the bank wheather they have to allocate credit card or not.',
      imageUrl: "/image.png",  // Use the path directly
      githubLink: 'https://github.com/kakderushi/Credti-Card-Analysis',
    },
    {
      title: 'Zomato Sales Analysis  ',
      description: 'It is Power BI Dashboard which helps to understand zomato sales analysis.',
      imageUrl: "/2nd.png",  // Use the path directly
      githubLink: 'https://github.com/kakderushi/Zomato-Analysis',
    },
    {
      title: 'Diamond Price Prediction',
      description: 'It helps to Predict the Price of the Diamond using Machine learning.',
      imageUrl: "/Diamond.png",  // Use the path directly
      githubLink:"https://github.com/kakderushi/DimondPricePrediction",
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
