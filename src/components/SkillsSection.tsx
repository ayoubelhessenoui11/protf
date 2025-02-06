import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SkillBadge from './SkillBadge';

interface SkillsSectionProps {
  title: string;
  skills: string[];
  delay?: number;
}

const MotionBox = motion(Box);

const SkillsSection: React.FC<SkillsSectionProps> = ({ title, skills, delay = 0 }) => {
  return (
    <MotionBox
      sx={{
        p: 3,
        border: '1px solid #30363d',
        borderRadius: 2,
        backgroundColor: 'rgba(13, 17, 23, 0.3)',
        mb: 2,
      }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <Typography
        variant="h6"
        sx={{
          color: '#58a6ff',
          mb: 2,
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
      <Box>
        {skills.map((skill, index) => (
          <SkillBadge key={index} label={skill} />
        ))}
      </Box>
    </MotionBox>
  );
};

export default SkillsSection;
