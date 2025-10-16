import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TeamMemberProfile } from '../../components/team/TeamMemberProfile';
import { TEAM_MEMBERS } from '../../constants/team';

export const TeamMemberPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const member = TEAM_MEMBERS.find(m => m.id === id);
  
  if (!member) {
    return <Navigate to="/about" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{member.name} — Sumano Tech Solution</title>
        <meta
          name="description"
          content={`Meet ${member.name}, ${member.role} at Sumano Tech Solution. ${member.bio}`}
        />
        <meta property="og:title" content={`${member.name} — Sumano Tech Solution`} />
        <meta
          property="og:description"
          content={`Meet ${member.name}, ${member.role} at Sumano Tech Solution. ${member.bio}`}
        />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${member.name} — Sumano Tech Solution`} />
        <meta
          name="twitter:description"
          content={`Meet ${member.name}, ${member.role} at Sumano Tech Solution. ${member.bio}`}
        />
      </Helmet>

      <main className="min-h-screen">
        <TeamMemberProfile member={member} showFullProfile={true} />
      </main>
    </>
  );
};
