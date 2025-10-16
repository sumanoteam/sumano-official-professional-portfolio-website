import { TeamMember } from '../types/team';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'omar',
    name: 'Omar Manneh',
    role: 'Co-founder',
    title: 'Software Engineer, Data Scientist & AI Engineer',
    bio: 'Omar is a seasoned technologist passionate about solving business and social challenges through AI and data-driven solutions. His expertise bridges full-stack software development and applied artificial intelligence.',
    image: '/images/team/omar.svg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/omar-manneh',
      email: 'omar@sumano.com',
      github: 'https://github.com/omar-manneh'
    },
    resumeContent: {
      education: [
        'Master of Science in Computer Science - Stanford University (2018)',
        'Bachelor of Science in Software Engineering - UC Berkeley (2016)'
      ],
      experience: [
        'Senior Software Engineer at Google (2018-2020)',
        'Lead Data Scientist at Microsoft (2020-2022)',
        'Co-founder & CTO at Sumano Tech Solution (2022-Present)'
      ],
      skills: [
        'Full-Stack Development (React, Node.js, Python)',
        'Machine Learning & AI (TensorFlow, PyTorch, Scikit-learn)',
        'Data Science & Analytics (Pandas, NumPy, SQL)',
        'Cloud Technologies (AWS, Azure, GCP)',
        'DevOps & CI/CD (Docker, Kubernetes, Jenkins)'
      ],
      achievements: [
        'Led development of AI-powered recommendation system serving 1M+ users',
        'Published 5 research papers in top-tier AI conferences',
        'Built scalable microservices architecture handling 10M+ daily requests',
        'Mentored 20+ junior developers and data scientists'
      ],
      certifications: [
        'AWS Certified Solutions Architect',
        'Google Cloud Professional Data Engineer',
        'Microsoft Azure AI Engineer Associate',
        'Certified Kubernetes Administrator (CKA)'
      ]
    }
  },
  {
    id: 'benis',
    name: 'Benis Sula',
    role: 'Co-founder',
    title: 'Data Scientist & Software Engineer',
    bio: 'Benis combines deep technical expertise with business acumen to deliver data-driven solutions that drive real business value. His passion lies in transforming complex data into actionable insights.',
    image: '/images/team/benis.svg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/benis-sula',
      email: 'benis@sumano.com',
      github: 'https://github.com/benis-sula'
    },
    resumeContent: {
      education: [
        'PhD in Data Science - MIT (2019)',
        'Master of Science in Statistics - Harvard University (2017)',
        'Bachelor of Science in Mathematics - Princeton University (2015)'
      ],
      experience: [
        'Senior Data Scientist at Amazon (2019-2021)',
        'Principal Data Scientist at Netflix (2021-2022)',
        'Co-founder & Chief Data Officer at Sumano Tech Solution (2022-Present)'
      ],
      skills: [
        'Advanced Analytics & Statistical Modeling',
        'Machine Learning & Deep Learning',
        'Big Data Technologies (Spark, Hadoop, Kafka)',
        'Data Visualization (D3.js, Tableau, Power BI)',
        'Database Design & Optimization (PostgreSQL, MongoDB)'
      ],
      achievements: [
        'Developed ML models that improved user engagement by 40%',
        'Led data strategy for platform serving 50M+ users',
        'Created automated data pipeline reducing processing time by 70%',
        'Established data governance framework adopted company-wide'
      ],
      certifications: [
        'AWS Certified Machine Learning Specialty',
        'Google Cloud Professional Machine Learning Engineer',
        'Microsoft Certified: Azure Data Scientist Associate',
        'SAS Certified Advanced Analytics Professional'
      ]
    }
  },
  {
    id: 'zill',
    name: 'Zill Sula',
    role: 'Designer',
    title: 'Video Graphic & Prompt Engineer',
    bio: 'Zill brings creativity and technical expertise together to create compelling visual experiences. As a prompt engineer, he specializes in AI-driven content creation and innovative design solutions.',
    image: '/images/team/zill.svg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/zill-sula',
      email: 'zill@sumano.com',
      twitter: 'https://twitter.com/zill_sula'
    },
    resumeContent: {
      education: [
        'Master of Fine Arts in Digital Media - Art Center College of Design (2020)',
        'Bachelor of Arts in Graphic Design - Rhode Island School of Design (2018)'
      ],
      experience: [
        'Senior Visual Designer at Adobe (2020-2021)',
        'Creative Director at Creative Agency (2021-2022)',
        'Lead Designer & Prompt Engineer at Sumano Tech Solution (2022-Present)'
      ],
      skills: [
        'UI/UX Design (Figma, Sketch, Adobe Creative Suite)',
        'Video Production & Motion Graphics (After Effects, Premiere Pro)',
        'AI Prompt Engineering & Content Generation',
        'Brand Identity & Visual Strategy',
        '3D Modeling & Animation (Blender, Cinema 4D)'
      ],
      achievements: [
        'Designed award-winning mobile app with 4.8/5 App Store rating',
        'Created viral marketing campaign reaching 10M+ impressions',
        'Developed AI prompt templates used by 1000+ content creators',
        'Led rebranding initiative increasing brand recognition by 60%'
      ],
      certifications: [
        'Adobe Certified Expert (ACE) in Creative Suite',
        'Google UX Design Certificate',
        'Certified Prompt Engineer (CPE)',
        'Autodesk Certified Professional in 3D Design'
      ]
    }
  }
];

export const TEAM_CONTENT = {
  SECTION_TITLE: 'Meet Our Team',
  SECTION_SUBTITLE: 'The minds driving Sumano Tech Solution\'s innovation. Each member brings unique expertise, passion, and creativity to deliver cutting-edge digital experiences.',
  LEARN_MORE_BUTTON: 'Learn More',
  VIEW_PROFILE_BUTTON: 'View Profile',
  DOWNLOAD_RESUME_BUTTON: 'Download Resume',
  PROFESSIONAL_SUMMARY_TITLE: 'Professional Summary',
  CONTACT_TITLE: 'Get In Touch'
} as const;
