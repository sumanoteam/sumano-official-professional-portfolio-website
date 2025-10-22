import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  EyeIcon,
  CalendarIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { StatusBadge } from '../../ui/StatusBadge';
import { FeatureList } from '../../ui/FeatureList';
import { IconButton } from '../../ui/IconButton';

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

export const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);


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
        <div className="absolute top-4 right-4">
          <StatusBadge 
            status={project.status as 'completed' | 'in-progress' | 'coming-soon'}
            size="sm"
            className="bg-white/90 backdrop-blur-sm"
          />
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
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            {project.liveUrl && (
              <IconButton
                icon={<EyeIcon className="w-5 h-5" />}
                label="View Live"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                className="bg-white text-gray-900 hover:bg-gray-100"
              />
            )}
            {project.githubUrl && (
              <IconButton
                icon={<CodeBracketIcon className="w-5 h-5" />}
                label="Code"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
                className="bg-gray-900 text-white hover:bg-gray-800"
              />
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
        <FeatureList 
          features={project.features}
          maxFeatures={3}
          showMoreText="more features"
          className="text-sm"
        />
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';
