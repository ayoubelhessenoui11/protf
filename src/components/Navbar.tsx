import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useLanguage();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/formation-certificate', label: t('nav.formationCertificate') },
    { path: '/skills', label: t('nav.skills') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: 'rgba(22, 27, 34, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid',
        borderColor: 'primary.dark',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box
          component={motion.div}
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontSize: '1.5rem',
          }}
        >
          <RouterLink to="/" style={{ textDecoration: 'none' }}>
            <Typography
              variant="h6"
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                flexGrow: { xs: 1, md: 0 }
              }}
            >
              DEVOAM
            </Typography>
          </RouterLink>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: 'text.primary',
                    '&:hover': {
                      color: 'primary.main',
                      background: 'rgba(88, 166, 255, 0.1)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
          <LanguageSelector />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
