import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon, 
  ArrowDownTrayIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  LinkIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  TrophyIcon,
  CodeBracketIcon,
  UserGroupIcon,
  LightBulbIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { TeamMember } from '../../../types/team';
import { Button } from '../../ui/Button/Button';
import { generateResumePDF } from '../../../utils/pdfGenerator';

interface TeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMember | null;
}

export const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ 
  isOpen, 
  onClose, 
  member 
}) => {
  const [dimensions, setDimensions] = useState({
    width: Math.min(window.innerWidth * 0.95, 1200),
    height: Math.min(window.innerHeight * 0.9, 800)
  });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle resize functionality
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing || !modalRef.current) return;

      const rect = modalRef.current.getBoundingClientRect();
      const newDimensions = { ...dimensions };

      if (resizeDirection.includes('right')) {
        newDimensions.width = Math.max(400, Math.min(1200, e.clientX - rect.left));
      }
      if (resizeDirection.includes('bottom')) {
        newDimensions.height = Math.max(300, Math.min(800, e.clientY - rect.top));
      }
      if (resizeDirection === 'bottom-right') {
        newDimensions.width = Math.max(400, Math.min(1200, e.clientX - rect.left));
        newDimensions.height = Math.max(300, Math.min(800, e.clientY - rect.top));
      }

      setDimensions(newDimensions);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      setResizeDirection('');
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, resizeDirection, dimensions]);

  const handleResizeStart = (direction: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
    setResizeDirection(direction);
  };

  const handleDownload = () => {
    if (member) {
      try {
        generateResumePDF(member);
      } catch (error) {
        console.error('Error generating PDF:', error);
        // Fallback to a simple download
        const link = document.createElement('a');
        const blob = new Blob(['PDF generation failed. Please try again.'], { type: 'text/plain' });
        link.href = URL.createObjectURL(blob);
        link.download = `${member.name.replace(/\s+/g, '_')}_Resume.txt`;
        link.click();
      }
    }
  };

  if (!isOpen || !member) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999
        }}
      >
        <motion.div
          ref={modalRef}
          className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-brand-cta-blue/20 relative flex flex-col"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`,
            minWidth: '400px',
            minHeight: '300px',
            maxWidth: '1200px',
            maxHeight: '800px'
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-brand-primary truncate pr-4">
              {member.name}
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
              aria-label="Close modal"
            >
              <XMarkIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Resume Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            {/* Header with Image and Contact */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-200">
              {/* Image Section */}
              <div className="flex-shrink-0 flex justify-center sm:justify-start">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full object-cover object-top border-4 border-brand-cta-blue shadow-lg"
                />
              </div>
              
              {/* Contact and Summary */}
              <div className="flex-1 space-y-2 sm:space-y-3">
                <h1 className="text-xl sm:text-2xl font-bold text-brand-primary text-center sm:text-left">{member.name}</h1>
                <p className="text-base sm:text-lg font-medium text-brand-cta-blue text-center sm:text-left">{member.title}</p>
                
                {/* Contact Info */}
                {member.resumeContent.contact && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 text-brand-primary flex-shrink-0" />
                      <span className="truncate">{member.resumeContent.contact.location}</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <EnvelopeIcon className="w-3 h-3 sm:w-4 sm:h-4 text-brand-primary flex-shrink-0" />
                      <a 
                        href={`mailto:${member.resumeContent.contact.email}`}
                        className="text-brand-cta-blue hover:underline truncate"
                      >
                        {member.resumeContent.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <PhoneIcon className="w-3 h-3 sm:w-4 sm:h-4 text-brand-primary flex-shrink-0" />
                      <span className="truncate">{member.resumeContent.contact.phone}</span>
                    </div>
                    {member.socialLinks?.linkedin && (
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <LinkIcon className="w-3 h-3 sm:w-4 sm:h-4 text-brand-primary flex-shrink-0" />
                        <a 
                          href={member.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-cta-blue hover:underline truncate"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Professional Summary */}
            <section className="mb-6">
              <h3 className="text-lg font-semibold text-brand-primary mb-3">Professional Summary</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </section>

            {/* Two Column Layout for Content */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
              {/* Left Column */}
              <div className="space-y-4 sm:space-y-6">
                {/* Experience */}
                <section>
                  <h3 className="text-lg font-semibold text-brand-primary mb-3 flex items-center gap-2">
                    <BriefcaseIcon className="w-5 h-5" />
                    Experience
                  </h3>
                  <div className="space-y-4">
                    {member.resumeContent.experience.map((exp, index) => {
                      // Split the experience into title and bullet points
                      const lines = exp.split('\n');
                      const title = lines[0];
                      const bulletPoints = lines.slice(1);
                      
                      return (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-brand-primary text-sm mb-2">{title}</h4>
                          <ul className="space-y-1">
                            {bulletPoints.map((point, pointIndex) => {
                              // Remove existing bullet point if present
                              const cleanPoint = point.replace(/^•\s*/, '');
                              return (
                                <li key={pointIndex} className="flex items-start text-gray-700 text-sm leading-relaxed">
                                  <span className="text-brand-accent mr-2 mt-0.5">•</span>
                                  <span>{cleanPoint}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Education */}
                <section>
                  <h3 className="text-lg font-semibold text-brand-primary mb-3 flex items-center gap-2">
                    <AcademicCapIcon className="w-5 h-5" />
                    Education
                  </h3>
                  <div className="space-y-2">
                    {member.resumeContent.education.map((edu, index) => (
                      <div key={index} className="text-gray-600">
                        <p className="text-sm leading-relaxed">{edu}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Certifications */}
                <section>
                  <h3 className="text-lg font-semibold text-brand-primary mb-3 flex items-center gap-2">
                    <TrophyIcon className="w-5 h-5" />
                    Certifications
                  </h3>
                  <div className="space-y-1">
                    {member.resumeContent.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2"></div>
                        <span className="text-sm leading-relaxed">{cert}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div className="space-y-4 sm:space-y-6">
                {/* Technical Skills */}
                <section>
                  <h3 className="text-lg font-semibold text-brand-primary mb-3 flex items-center gap-2">
                    <CodeBracketIcon className="w-5 h-5" />
                    Technical Skills
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {member.resumeContent.skills.map((skill, index) => (
                      <div key={index} className="bg-blue-50 p-2 rounded text-xs text-gray-700 text-center">
                        {skill}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Projects */}
                {member.resumeContent.projects && member.resumeContent.projects.length > 0 && (
                  <section>
                    <h3 className="text-lg font-semibold text-brand-primary mb-3 flex items-center gap-2">
                      <LightBulbIcon className="w-5 h-5" />
                      Projects & Initiatives
                    </h3>
                    <div className="space-y-2">
                      {member.resumeContent.projects.map((project, index) => (
                        <div key={index} className="bg-green-50 p-3 rounded-lg">
                          <p className="text-gray-700 text-sm leading-relaxed">{project}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Leadership */}
                {member.resumeContent.leadership && member.resumeContent.leadership.length > 0 && (
                  <section>
                    <h3 className="text-lg font-semibold text-brand-primary mb-3 flex items-center gap-2">
                      <UserGroupIcon className="w-5 h-5" />
                      Leadership & Volunteer Work
                    </h3>
                    <div className="space-y-1">
                      {member.resumeContent.leadership.map((item, index) => (
                        <div key={index} className="flex items-start text-gray-600">
                          <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Soft Skills */}
                {member.resumeContent.softSkills && member.resumeContent.softSkills.length > 0 && (
                  <section>
                    <h3 className="text-lg font-semibold text-brand-primary mb-3 flex items-center gap-2">
                      <HeartIcon className="w-5 h-5" />
                      Soft Skills
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {member.resumeContent.softSkills.map((skill, index) => (
                        <div key={index} className="bg-purple-50 p-2 rounded text-xs text-gray-700 text-center">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>

          {/* Footer with Download Button */}
          <div className="flex justify-center sm:justify-end gap-4 p-4 sm:p-6 border-t border-gray-200 bg-white flex-shrink-0">
            <Button
              variant="primary"
              size="md"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 w-full sm:w-auto"
            >
              <ArrowDownTrayIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Download Resume (PDF)</span>
            </Button>
          </div>

          {/* Resize Handles */}
          {/* Right resize handle */}
          <div
            className={`absolute top-0 right-0 w-2 h-full cursor-ew-resize transition-colors ${
              isResizing && resizeDirection.includes('right') 
                ? 'bg-brand-cta-blue/30' 
                : 'hover:bg-brand-cta-blue/20'
            }`}
            onMouseDown={handleResizeStart('right')}
            style={{ zIndex: 10001 }}
          />
          
          {/* Bottom resize handle */}
          <div
            className={`absolute bottom-0 left-0 w-full h-2 cursor-ns-resize transition-colors ${
              isResizing && resizeDirection.includes('bottom') 
                ? 'bg-brand-cta-blue/30' 
                : 'hover:bg-brand-cta-blue/20'
            }`}
            onMouseDown={handleResizeStart('bottom')}
            style={{ zIndex: 10001 }}
          />
          
          {/* Corner resize handle */}
          <div
            className={`absolute bottom-0 right-0 w-3 h-3 cursor-nwse-resize transition-colors ${
              isResizing && resizeDirection === 'bottom-right' 
                ? 'bg-brand-cta-blue/40' 
                : 'hover:bg-brand-cta-blue/30'
            }`}
            onMouseDown={handleResizeStart('bottom-right')}
            style={{ zIndex: 10001 }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
