import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  EnvelopeIcon, 
  CodeBracketIcon, 
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline';
import { Button } from '../../ui/Button';
import { TeamMember } from '../../../types/team';

interface TeamMemberProfileProps {
  member: TeamMember;
  showFullProfile?: boolean;
}

export const TeamMemberProfile: React.FC<TeamMemberProfileProps> = ({ 
  member, 
  showFullProfile = false 
}) => {
  const {
    name,
    role,
    title,
    bio,
    image,
    socialLinks,
    resumeContent
  } = member;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  if (showFullProfile) {
    return (
      <motion.section 
        className="bg-white py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.img 
              src={image} 
              alt={name}
              className="w-64 h-64 rounded-full border-4 border-brand-teal object-cover shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="text-left">
              <motion.h2 
                className="text-3xl font-heading font-semibold text-brand-navy mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {name}
              </motion.h2>
              <motion.p 
                className="text-brand-orange font-medium mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {role} | {title}
              </motion.p>
              <motion.p 
                className="text-gray-700 font-roboto leading-relaxed mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                {bio}
              </motion.p>
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                {socialLinks.linkedin && (
                  <a 
                    href={socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-teal hover:text-brand-tealDark transition-colors"
                    aria-label={`${name} LinkedIn profile`}
                  >
                    <ChatBubbleLeftRightIcon className="h-6 w-6" />
                  </a>
                )}
                {socialLinks.email && (
                  <a 
                    href={`mailto:${socialLinks.email}`}
                    className="text-brand-teal hover:text-brand-tealDark transition-colors"
                    aria-label={`Email ${name}`}
                  >
                    <EnvelopeIcon className="h-6 w-6" />
                  </a>
                )}
                {socialLinks.github && (
                  <a 
                    href={socialLinks.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-teal hover:text-brand-tealDark transition-colors"
                    aria-label={`${name} GitHub profile`}
                  >
                    <CodeBracketIcon className="h-6 w-6" />
                  </a>
                )}
                {socialLinks.twitter && (
                  <a 
                    href={socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-teal hover:text-brand-tealDark transition-colors"
                    aria-label={`${name} Twitter profile`}
                  >
                    <ChatBubbleLeftRightIcon className="h-6 w-6" />
                  </a>
                )}
              </motion.div>
            </div>
          </div>

          {/* Professional Resume Section */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-heading font-semibold text-brand-navy mb-6">
              Professional Summary
            </h3>
            
            <div className="space-y-8">
              {/* Education */}
              <div>
                <h4 className="text-lg font-heading font-medium text-brand-navy mb-3">Education</h4>
                <ul className="space-y-2">
                  {resumeContent.education.map((edu, index) => (
                    <li key={index} className="text-gray-700 font-roboto">
                      • {edu}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experience */}
              <div>
                <h4 className="text-lg font-heading font-medium text-brand-navy mb-3">Experience</h4>
                <ul className="space-y-2">
                  {resumeContent.experience.map((exp, index) => (
                    <li key={index} className="text-gray-700 font-roboto">
                      • {exp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-lg font-heading font-medium text-brand-navy mb-3">Key Skills</h4>
                <ul className="space-y-2">
                  {resumeContent.skills.map((skill, index) => (
                    <li key={index} className="text-gray-700 font-roboto">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-lg font-heading font-medium text-brand-navy mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {resumeContent.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-700 font-roboto">
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-lg font-heading font-medium text-brand-navy mb-3">Certifications</h4>
                <ul className="space-y-2">
                  {resumeContent.certifications.map((cert, index) => (
                    <li key={index} className="text-gray-700 font-roboto">
                      • {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button 
                className="bg-brand-navy text-white px-6 py-3 rounded-xl hover:bg-brand-navyDark transition-colors"
                onClick={() => {
                  // In a real app, this would download the actual resume PDF
                  console.log(`Downloading ${name}'s resume...`);
                }}
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  // Team card view for the About page
  return (
    <motion.div 
      className="team-card bg-white rounded-2xl shadow-md hover:shadow-lg p-6 transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <motion.img 
        src={image} 
        alt={name}
        className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-brand-teal"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <h3 className="text-xl font-heading font-semibold text-brand-navy mb-2">{name}</h3>
      <p className="text-brand-orange font-medium mb-2">{role}</p>
      <p className="text-gray-600 text-sm mb-4 font-roboto">{title}</p>
      <Button 
        as={Link} 
        to={`/team/${member.id}`}
        className="bg-brand-teal text-white px-6 py-2 rounded-xl hover:bg-brand-tealDark transition-colors w-full"
      >
        Learn More
      </Button>
    </motion.div>
  );
};
