import React from 'react';
import { Box, Typography } from '@mui/material';

interface SkillBadgeProps {
  label: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ label }) => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        px: 2,
        py: 1,
        m: 0.5,
        borderRadius: '20px',
        backgroundColor: 'rgba(30, 41, 59, 0.5)',
        border: '1px solid #30363d',
        '&:hover': {
          backgroundColor: 'rgba(30, 41, 59, 0.8)',
          transform: 'translateY(-2px)',
        },
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: '#94A3B8',
          fontWeight: 500,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default SkillBadge;
