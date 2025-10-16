import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  EyeIcon,
  CalendarIcon,
  UserIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  category: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  client: string;
  year: number;
  status: 'completed' | 'in-progress' | 'coming-soon';
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusIcon = () => {
    switch (project.status) {
      case 'completed':
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <ClockIcon className="w-5 h-5 text-yellow-500" />;
      case 'coming-soon':
        return <ExclamationTriangleIcon className="w-5 h-5 text-blue-500" />;
      default:
        return null;
    }
  };

  const getStatusText = () => {
    switch (project.status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'coming-soon':
        return 'Coming Soon';
      default:
        return '';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4 flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          {getStatusIcon()}
          <span className="text-sm font-medium text-gray-700">{getStatusText()}</span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {project.category}
        </div>

        {/* Overlay Actions */}
        <motion.div
          className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <div className="flex space-x-4">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium flex items-center space-x-2 hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <EyeIcon className="w-5 h-5" />
                <span>View Live</span>
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CodeBracketIcon className="w-5 h-5" />
                <span>Code</span>
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Project Meta */}
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <CalendarIcon className="w-4 h-4" />
            <span>{project.year}</span>
          </div>
          <div className="flex items-center space-x-1">
            <UserIcon className="w-4 h-4" />
            <span>{project.client}</span>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Features Preview */}
        <div className="space-y-1">
          {project.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
              <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
          {project.features.length > 3 && (
            <div className="text-sm text-gray-500">
              +{project.features.length - 3} more features
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
