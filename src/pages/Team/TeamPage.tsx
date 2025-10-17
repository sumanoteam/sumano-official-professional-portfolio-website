import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const TeamPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to About page with team section anchor
    navigate('/about#our-team', { replace: true });
  }, [navigate]);

  return null;
};