import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.png';

const ProfileImage: React.FC = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      sx={{
        position: 'relative',
        width: '300px',
        height: '300px',
        margin: '0 auto',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(88, 166, 255, 0.1), rgba(126, 231, 135, 0.1))',
          zIndex: 1,
        },
        '&:hover': {
          '&::before': {
            background: 'linear-gradient(45deg, rgba(88, 166, 255, 0.2), rgba(126, 231, 135, 0.2))',
          },
          '& img': {
            transform: 'scale(1.05)',
          },
        },
      }}
    >
      <Box
        component="img"
        src={profileImage}
        alt="Mohamed Reda Lakouas"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s ease-in-out',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)',
          zIndex: 2,
          opacity: 0.5,
        }}
      />
      <Box
        component={motion.div}
        animate={{
          background: [
            'linear-gradient(0deg, rgba(88, 166, 255, 0.2), transparent)',
            'linear-gradient(180deg, rgba(126, 231, 135, 0.2), transparent)',
            'linear-gradient(360deg, rgba(88, 166, 255, 0.2), transparent)',
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 3,
        }}
      />
    </Box>
  );
};

export default ProfileImage;
