import React from 'react';
import { MagazineViewer } from '../../components/magazine/MagazineViewer';

export const TeamPage: React.FC = () => {
  const teamPages = [
    <div>
      <h1 className="text-3xl font-bold mb-4">Sumano Tech Magazine</h1>
      <p className="text-lg opacity-90">Innovating Digital Experiences</p>
    </div>,
    "At Sumano, we develop modern websites, portals, and management systems that help businesses grow.",
    "From diagnostic tools to scalable web apps — our team delivers efficient, fast, and elegant digital solutions.",
    <div>
      <h2 className="text-xl font-bold mb-2">Our Vision</h2>
      <p>To simplify technology through creativity and innovation.</p>
    </div>,
    "Contact us: hello@sumanotech.com",
  ];

  return <MagazineViewer pages={teamPages} />;
};
