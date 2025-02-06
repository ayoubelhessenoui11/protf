import React from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';
import SchoolIcon from '@mui/icons-material/School';
import CertificateIcon from '@mui/icons-material/CardMembership';
import WorkIcon from '@mui/icons-material/Work';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';

interface Education {
  period: string;
  degree: string;
  school: string;
  details?: string;
}

interface Certification {
  name: string;
  provider: string;
  link: string;
}

const MotionBox = motion(Box);

const FormationCertificate: React.FC = () => {
  const { t } = useLanguage();
  
  const educationItems = t('education.items') as unknown as Education[];
  const certifications: Certification[] = [
    { name: 'Introduction to Android Mobile Application Development', provider: 'Meta', link: 'https://www.coursera.org/account/accomplishments/verify/B5RFUBH0TKKJ' },
    { name: 'Version Control', provider: 'Meta', link: 'https://www.coursera.org/account/accomplishments/verify/T122CGG50I1F' },
    { name: 'Make the Sale: Build, Launch, and Manage E-commerce Stores', provider: 'Google', link: 'https://www.coursera.org/account/accomplishments/verify/AEUK6SOVXE6N' },
    { name: 'Assess for Success: Marketing Analytics and Measurement', provider: 'Google', link: 'https://www.coursera.org/account/accomplishments/verify/VGJHODHZHXBO' },
    { name: 'From Likes to Leads: Interact with Customers Online', provider: 'Google', link: 'https://www.coursera.org/account/accomplishments/verify/LI02T4SK1FSL' },
    { name: 'Think Outside the Inbox: Email Marketing', provider: 'Google', link: 'https://www.coursera.org/account/accomplishments/verify/1AP34WLHCBAA' },
    { name: 'Attract and Engage Customers with Digital Marketing', provider: 'Google', link: 'https://www.coursera.org/account/accomplishments/verify/AXZ6O1CIPQDH' },
    { name: 'Foundations of Digital Marketing and E-commerce', provider: 'Google', link: 'https://www.coursera.org/account/accomplishments/verify/1A8ESVGRXVXH' },
    { name: 'Foundations: Data, Data, Everywhere', provider: 'Google', link: 'https://www.coursera.org/account/accomplishments/verify/7L9UUD6MQ4B6' },
    { name: 'Introduction to Information Technology and AWS Cloud', provider: 'Amazon Web Services', link: 'https://www.coursera.org/account/accomplishments/verify/23WJGBDPNAW9' },
    { name: 'Introduction to Project Management', provider: 'IBM', link: 'https://www.coursera.org/account/accomplishments/verify/AB44WE2666BN' },
    { name: 'Introduction to Software Engineering', provider: 'IBM', link: 'https://www.coursera.org/account/accomplishments/verify/BY2YBWJY37MW' },
    { name: 'Technical Support Fundamentals', provider: 'Google', link: 'https://www.coursera.org/account/accomplishments/verify/GBDR7C75K36A' },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#0d1117', position: 'relative' }}>
      <AnimatedBackground />
      
      <Container maxWidth="lg" sx={{ pt: 8, pb: 8, position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: '#58a6ff',
              mb: 6,
              textAlign: 'center',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              lineHeight: 1.2,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2
            }}
          >
            {t('formation.title')}
          </Typography>

          {/* Education Section */}
          <Box
            sx={{
              mb: 6,
              p: 3,
              bgcolor: '#161b22',
              borderRadius: 2,
              border: '1px solid #30363d'
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#58a6ff',
                mb: 4,
                fontWeight: 700,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2
              }}
            >
              <SchoolIcon sx={{ fontSize: 32 }} />
              {t('formation.education')}
            </Typography>

            <Grid container spacing={3}>
              {educationItems.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    sx={{
                      p: 2,
                      bgcolor: '#21262d',
                      borderRadius: 2,
                      border: '1px solid #30363d',
                      '&:hover': {
                        borderColor: '#58a6ff',
                        transform: 'translateX(8px)',
                        transition: 'all 0.3s ease-in-out'
                      }
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#7ee787',
                        mb: 1,
                        fontSize: '1rem',
                        fontWeight: 600
                      }}
                    >
                      {item.period}
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        color: '#c9d1d9',
                        mb: 1,
                        fontSize: '1.1rem',
                        fontWeight: 600
                      }}
                    >
                      {item.degree}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: '#8b949e',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          width: 6,
                          height: 6,
                          bgcolor: '#58a6ff',
                          borderRadius: '50%',
                          display: 'inline-block'
                        }}
                      />
                      {item.school}
                      {item.details && (
                        <Typography
                          component="span"
                          sx={{ color: '#8b949e', fontSize: '0.9rem' }}
                        >
                          • {item.details}
                        </Typography>
                      )}
                    </Typography>
                  </MotionBox>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Certifications Section */}
          <Box
            sx={{
              p: 3,
              bgcolor: '#161b22',
              borderRadius: 2,
              border: '1px solid #30363d'
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#58a6ff',
                mb: 4,
                fontWeight: 700,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2
              }}
            >
              <WorkIcon sx={{ fontSize: 32 }} />
              {t('formation.certificates')}
            </Typography>

            <Grid container spacing={2}>
              {certifications.map((cert, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Button
                    component="a"
                    href={cert.link || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      p: 0,
                      width: '100%',
                      height: '100%',
                      textAlign: 'left',
                      textTransform: 'none',
                      display: 'block',
                      '&:hover': {
                        bgcolor: 'transparent'
                      }
                    }}
                  >
                    <MotionBox
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      whileHover={{ 
                        y: -8,
                        transition: { duration: 0.2, ease: 'easeOut' }
                      }}
                      sx={{
                        p: 3,
                        bgcolor: '#21262d',
                        borderRadius: 2,
                        border: '1px solid #30363d',
                        minHeight: '180px',
                        cursor: 'pointer',
                        position: 'relative',
                        '&:hover': {
                          borderColor: '#58a6ff',
                          bgcolor: '#2d333b',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                          '& .cert-icon': {
                            transform: 'scale(1.1)',
                            transition: 'transform 0.2s ease-out'
                          }
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: '12px',
                          right: '12px',
                          width: '24px',
                          height: '24px',
                          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%2358a6ff\'%3E%3Cpath d=\'M0 0h24v24H0V0z\' fill=\'none\'/%3E%3Cpath d=\'M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\'/%3E%3C/svg%3E")',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'contain',
                          opacity: 0,
                          transform: 'translateY(8px)',
                          transition: 'all 0.3s ease-out'
                        },
                        '&:hover::after': {
                          opacity: 1,
                          transform: 'translateY(0)'
                        }
                      }}
                    >
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1.5, 
                        mb: 2
                      }}>
                        <Box
                          className="cert-icon"
                          sx={{
                            width: 32,
                            height: 32,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.2s ease-out'
                          }}
                        >
                          {cert.provider === 'Google' && (
                            <img 
                              src="https://www.gstatic.com/images/branding/product/2x/google_developers_64dp.png" 
                              alt="Google"
                              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            />
                          )}
                          {cert.provider === 'IBM' && (
                            <img 
                              src="https://www.ibm.com/favicon.ico" 
                              alt="IBM"
                              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            />
                          )}
                          {cert.provider === 'AWS' && (
                            <img 
                              src="https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico" 
                              alt="AWS"
                              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            />
                          )}
                        </Box>
                        <Typography
                          variant="body2"
                          component="span"
                          sx={{
                            color: '#7ee787',
                            fontWeight: 600,
                            fontSize: '1rem'
                          }}
                        >
                          {cert.provider}
                        </Typography>
                      </Box>

                      <Typography
                        variant="body1"
                        component="span"
                        sx={{
                          color: '#c9d1d9',
                          fontWeight: 500,
                          fontSize: '1.1rem',
                          lineHeight: 1.4,
                          display: 'block'
                        }}
                      >
                        {cert.name}
                      </Typography>
                    </MotionBox>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FormationCertificate;
