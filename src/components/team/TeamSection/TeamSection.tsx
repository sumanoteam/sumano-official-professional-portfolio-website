import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TeamMemberProfile } from '../TeamMemberProfile';
import { TeamMemberModal } from '../TeamMemberModal';
import { TeamSectionProps } from '../../../types/team';
import { TEAM_CONTENT } from '../../../constants/team';
import { Container } from '../../layout/Container';
import { TeamMember } from '../../../types/team';

export const TeamSection: React.FC<TeamSectionProps> = ({ members }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="our-team" className="bg-brand-light py-20">
      <Container className="text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="h2 mb-4"
            variants={itemVariants}
          >
            {TEAM_CONTENT.SECTION_TITLE}
          </motion.h2>
          <motion.p 
            className="body max-w-2xl mx-auto mb-10"
            variants={itemVariants}
          >
            {TEAM_CONTENT.SECTION_SUBTITLE}
          </motion.p>

          <motion.div 
            className="grid md:grid-cols-3 gap-10"
            variants={containerVariants}
          >
            {members.map((member, index) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="flex justify-center"
              >
                <TeamMemberProfile 
                  member={member} 
                  onOpenModal={() => handleOpenModal(member)}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
      
      {/* Team Member Modal */}
      <TeamMemberModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        member={selectedMember}
      />
    </section>
  );
};
