import React from 'react';
import { motion } from 'framer-motion';
import { TeamMemberProfile } from '../TeamMemberProfile';
import { TeamSectionProps } from '../../../types/team';
import { TEAM_CONTENT } from '../../../constants/team';

export const TeamSection: React.FC<TeamSectionProps> = ({ members }) => {
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
    <section id="our-team" className="bg-gray-50 py-20">
      <div className="container mx-auto text-center px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-4xl font-heading font-semibold text-brand-navy mb-4"
            variants={itemVariants}
          >
            {TEAM_CONTENT.SECTION_TITLE}
          </motion.h2>
          <motion.p 
            className="text-base font-roboto text-gray-600 max-w-2xl mx-auto mb-10"
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
                <TeamMemberProfile member={member} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
