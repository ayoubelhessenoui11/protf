import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import AnimatedBackground from '../components/AnimatedBackground';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation, Trans } from 'react-i18next';
import profileImage from '../assets/profile.png';
import project1Image from '../assets/projects/project1.png';
import project2Image from '../assets/projects/project2.png';
import project4Image from '../assets/projects/project4.png';

// Import des images Coiffeur
import coiffeurImg1 from '../assets/projects/coiffeur/img1.jpg';
import coiffeurImg2 from '../assets/projects/coiffeur/img2.jpg';
import coiffeurImg3 from '../assets/projects/coiffeur/img3.jpg';
import coiffeurImg4 from '../assets/projects/coiffeur/img4.jpg';
import coiffeurImg5 from '../assets/projects/coiffeur/img5.jpg';
import coiffeurImg11 from '../assets/projects/coiffeur/img11.jpg';
import coiffeurImg12 from '../assets/projects/coiffeur/img12.jpg';
import coiffeurImg13 from '../assets/projects/coiffeur/img13.jpg';
import coiffeurImg14 from '../assets/projects/coiffeur/img14.jpg';
import coiffeurImg15 from '../assets/projects/coiffeur/img15.jpg';

// Import des images Crypto
import cryptoImg1 from '../assets/projects/crypto/img1.jpg';
import cryptoImg2 from '../assets/projects/crypto/img2.jpg';
import cryptoImg3 from '../assets/projects/crypto/img3.jpg';
import cryptoImg4 from '../assets/projects/crypto/img4.jpg';
import cryptoImg5 from '../assets/projects/crypto/img5.jpg';
import cryptoImg6 from '../assets/projects/crypto/img6.jpg';
import cryptoImg7 from '../assets/projects/crypto/img7.jpg';
import cryptoImg8 from '../assets/projects/crypto/img8.jpg';
import cryptoImg9 from '../assets/projects/crypto/img9.jpg';

// Import des images Taurus Maroc
import taurusA from '../assets/projects/taurusmaroc/a.jpg';
import taurusC from '../assets/projects/taurusmaroc/c.jpg';
import taurusD from '../assets/projects/taurusmaroc/d.jpg';
import taurusHome from '../assets/projects/taurusmaroc/home.png';
import taurusMore from '../assets/projects/taurusmaroc/more.png';

// Import des images Alert Nids
import alertImg1 from '../assets/projects/alertnids/img1.jpg';
import alertImg2 from '../assets/projects/alertnids/img2.jpg';
import alertImg3 from '../assets/projects/alertnids/img3.jpg';
import alertImg4 from '../assets/projects/alertnids/img4.jpg';
import alertImg5 from '../assets/projects/alertnids/img5.jpg';
import alertImg6 from '../assets/projects/alertnids/img6.jpg';

// Import des images Cabby
import cabbyImg1 from '../assets/projects/cabbyapp/img1.jpg';
import cabbyImg2 from '../assets/projects/cabbyapp/img2.jpg';
import cabbyImg3 from '../assets/projects/cabbyapp/img3.jpg';
import cabbyImg4 from '../assets/projects/cabbyapp/img4.jpg';
import cabbyImg5 from '../assets/projects/cabbyapp/img5.jpg';
import cabbyImg6 from '../assets/projects/cabbyapp/img6.jpg';
import cabbyImg7 from '../assets/projects/cabbyapp/img7.jpg';
import cabbyImg8 from '../assets/projects/cabbyapp/img8.jpg';
import cabbyImg9 from '../assets/projects/cabbyapp/img9.jpg';

import LaunchIcon from '@mui/icons-material/Launch';
import VideocamIcon from '@mui/icons-material/Videocam';

const MotionBox = motion(Box);
const MotionImage = motion.img;
const MotionCard = motion(Card);

interface Description {
  description: string[];
}

interface Certification {
  name: string;
  provider: string;
  link: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  technologies: string[];
  github: string;
  demo: string;
}

const Home: React.FC = () => {
  const { t: languageT, language } = useLanguage();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const description = languageT('description');
  const skillsets = (languageT('skillsets') as unknown) as { [key: string]: string[] };

  const skillCategories = [
    'frontend',
    'backend',
    'mobile',
    'tools',
    'apis',
    'databases',
    'marketing'
  ];

  const certifications = (languageT('certifications.items') as unknown) as Certification[];

  const [currentImageIndices, setCurrentImageIndices] = useState<{ [key: number]: number }>({});
  const [coiffureVersion, setCoiffureVersion] = useState<'v1' | 'v2'>('v1');

  const nextImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndices(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndices(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const getCoiffureImages = () => {
    return coiffureVersion === 'v1' 
      ? [coiffeurImg1, coiffeurImg2, coiffeurImg3, coiffeurImg4, coiffeurImg5]
      : [coiffeurImg11, coiffeurImg12, coiffeurImg13, coiffeurImg14, coiffeurImg15];
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'Application Mobile de Coiffure',
      description: "Application mobile native avec interface utilisateur et administrateur. Design moderne et intuitif adapté aux smartphones. Interface double face optimisée pour une expérience mobile fluide.",
      images: getCoiffureImages(),
      technologies: ['Flutter', 'Firebase', 'Material Design', 'Figma', 'Adobe XD', 'UI/UX Mobile'],
      github: '#',
      demo: 'https://www.figma.com/design/CVEkYlLNbMwbJbsFqkOfhQ/Barber-App?node-id=0-1&p=f&t=svt7NAzgOuE4MbmA-0'
    },
    {
      id: 2,
      title: 'Application Mobile Crypto',
      description: "Application mobile de trading et suivi des cryptomonnaies. Interface optimisée pour le trading sur mobile avec support de multiples blockchains. Graphiques et analyses adaptés aux écrans de smartphones.",
      images: [cryptoImg1, cryptoImg2, cryptoImg3, cryptoImg4, cryptoImg5, cryptoImg6, cryptoImg7, cryptoImg8, cryptoImg9],
      technologies: ['Flutter', 'Firebase', 'Chart.js Mobile', 'Blockchain', 'TRON API', 'CryptoCompare', 'GoingKu'],
      github: 'https://github.com/redalakouas/crypto-app',
      demo: '#'
    },
    {
      id: 3,
      title: 'Application Mobile Cabby',
      description: "Application mobile de VTC avec système de réservation en temps réel. Interface mobile intuitive pour les clients et les chauffeurs. Navigation GPS et paiements intégrés pour une expérience mobile complète.",
      images: [cabbyImg1, cabbyImg2, cabbyImg3, cabbyImg4, cabbyImg5, cabbyImg6, cabbyImg7, cabbyImg8, cabbyImg9],
      technologies: ['Flutter', 'Firebase', 'Google Maps SDK', 'Real-time tracking', 'Mobile Payments'],
      github: '#',
      demo: 'https://www.figma.com/design/QffO0I98yaR4bAoXxruuA0/cabby-app?node-id=0-1&p=f&t=iW8YtWgMllCZriJ2-0'
    },
    {
      id: 4,
      title: 'Application Mobile Taurus Maroc',
      description: "Application mobile e-commerce développée en Java pour les appareils électroménagers Taurus. Expérience d'achat optimisée pour mobile avec navigation fluide et paiement sécurisé. Disponible sur PlayStore.",
      images: [taurusA, taurusC, taurusD, taurusHome, taurusMore],
      technologies: ['Java Android', 'Spring Boot', 'MySQL', 'Mobile REST API', 'Firebase', 'Mobile Payments'],
      github: 'https://github.com/redalakouas/taurus-maroc',
      demo: 'https://play.google.com/store/apps/details?id=com.taurusmaroce'
    },
    {
      id: 5,
      title: 'Application Mobile Alerte Nids de Poule',
      description: "Application mobile native Android pour signaler les nids de poule. Interface moderne avec Jetpack Compose, optimisée pour une utilisation mobile en déplacement. Géolocalisation et notifications push.",
      images: [alertImg1, alertImg2, alertImg3, alertImg4, alertImg5, alertImg6],
      technologies: ['Kotlin Android', 'Firebase', 'Google Maps Mobile SDK', 'Jetpack Compose', 'Material Design 3'],
      github: '#',
      demo: 'https://www.figma.com/design/nLslRcFhyc0uUsrstx81zS/ned?node-id=0-1&p=f&t=ZqoGOjR3aLkC2Wqy-0'
    },
    {
      id: 6,
      title: 'Plus de Projets Mobile',
      description: "J'ai d'autres projets mobiles intéressants à vous montrer lors d'une réunion Meet. Découvrez mon expertise en développement mobile !",
      image: project1Image,
      technologies: ['Flutter', 'React Native', 'Java', 'Kotlin', 'Mobile Development'],
      github: 'https://github.com/redalakouas',
      demo: 'https://meet.google.com/lookup/redalakouas'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#0d1117', position: 'relative' }}>
      <AnimatedBackground />
      
      <Container maxWidth="lg" sx={{ pt: 4, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '100%',
                maxWidth: '1200px',
                mx: 'auto',
                px: { xs: 2, md: 4 }
              }}
            >
              {/* Header Section with Image */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  mb: 4,
                  width: '100%'
                }}
              >
                {/* Profile Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                >
                  <Box
                    component="img"
                    src={profileImage}
                    alt="Profile"
                    sx={{
                      width: { xs: 120, md: 150 },
                      height: { xs: 120, md: 150 },
                      borderRadius: '15px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      border: '4px solid',
                      borderColor: 'primary.main'
                    }}
                  />
                </motion.div>

                {/* Text Content */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    sx={{ color: '#94A3B8', mb: 1 }}
                  >
                    👋 <Trans i18nKey="greeting" />
                  </Typography>

                  <Typography
                    variant="h2"
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    sx={{
                      fontWeight: 700,
                      mb: 2
                    }}
                  >
                    Mohamed Reda Lakouas
                  </Typography>

                  <Typography
                    variant="h4"
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    sx={{
                      fontWeight: 'bold',
                      color: '#7ee787'
                    }}
                  >
                    <Trans i18nKey="role" />
                  </Typography>
                </Box>
              </Box>

              {/* Main Content */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                sx={{
                  width: '100%',
                  maxWidth: '800px',
                  background: 'rgba(13, 17, 23, 0.3)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  p: 3,
                  mb: 4,
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  border: '1px solid',
                  borderColor: 'primary.dark',
                  height: '100%'
                }}
              >
                <Grid container spacing={2} direction="column">
                  {/* Section Conception */}
                  <Grid item xs={12}>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      sx={{ mb: 3, width: '100%' }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#7ee787',
                          fontWeight: 'bold',
                          mb: 1,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        🔹 Conception & Développement
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#8b949e',
                          lineHeight: 1.6,
                          pl: 3,
                          fontSize: '0.95rem',  // Improve readability
                          letterSpacing: '0.5px'  // Add letter spacing for clarity
                        }}
                      >
                        • Création d'applications mobiles performantes et intuitives<br />
                        • Expertise en développement natif et cross-platform<br />
                        • Intégration d'APIs, bases de données et gestion des performances
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Section Expérience */}
                  <Grid item xs={12}>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      sx={{ mb: 3, width: '100%' }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#7ee787',
                          fontWeight: 'bold',
                          mb: 1,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        🔹 Expérience & Compétences
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#8b949e',
                          lineHeight: 1.6,
                          pl: 3,
                          fontSize: '0.95rem',  // Improve readability
                          letterSpacing: '0.5px'  // Add letter spacing for clarity
                        }}
                      >
                        • Développement mobile avec Flutter, Android & iOS<br />
                        • Backend & APIs sécurisés, gestion en temps réel<br />
                        • UX/UI design & prototypage avec Figma
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Section Réputation */}
                  <Grid item xs={12}>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                      sx={{ mb: 3, width: '100%' }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#7ee787',
                          fontWeight: 'bold',
                          mb: 1,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        🔹 Réputation & Feedback
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#8b949e',
                          lineHeight: 1.6,
                          pl: 3,
                          fontSize: '0.95rem',  // Improve readability
                          letterSpacing: '0.5px'  // Add letter spacing for clarity
                        }}
                      >
                        • Freelance depuis 2022 avec des retours clients excellents<br />
                        • Consultez mes avis et projets réalisés sur Upwork
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Section Marketing */}
                  <Grid item xs={12}>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0 }}
                      sx={{ mb: 3, width: '100%' }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#7ee787',
                          fontWeight: 'bold',
                          mb: 1,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        🔹 Marketing & Publication
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#8b949e',
                          lineHeight: 1.6,
                          pl: 3,
                          fontSize: '0.95rem',  // Improve readability
                          letterSpacing: '0.5px'  // Add letter spacing for clarity
                        }}
                      >
                        • Optimisation et monétisation des applications<br />
                        • Publicité et acquisition d'utilisateurs<br />
                        • Publication sur Google Play & App Store
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                {/* Call to Action */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  sx={{ mt: 2 }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#7ee787',
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}
                  >
                    🎯 Besoin d'une application sur mesure ? Contactez-moi !
                  </Typography>
                </Box>
              </Box>

            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {skillCategories.map((category) => (
                <Grid item xs={12} sm={6} md={4} key={category}>
                  <Box sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 2,
                    bgcolor: '#0d1117',
                    border: '1px solid #30363d'
                  }}>
                    <Typography variant="h6" sx={{ color: '#58a6ff', mb: 2, fontWeight: 'bold' }}>
                      <Trans i18nKey={`skills.${category}`} />
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {skillsets[category]?.map((skill: string) => (
                        <Chip
                          key={skill}
                          label={`${skill} ${
                            skill === 'APIs' ? '80%' :
                            (skill === 'Laravel' || skill === 'React' || skill === 'Angular') ? '65-70%' : ''
                          }`}
                          sx={{
                            bgcolor: '#238636',
                            color: '#fff',
                            '&:hover': { bgcolor: '#2ea043' }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              sx={{
                display: 'flex',
                flexDirection: 'column',  // Change to vertical layout
                gap: 2,
                flexWrap: 'wrap',
                mt: 4,
                justifyContent: 'center',
                width: '100%',
                '& button': {
                  fontSize: '1.1rem',  // Increase button text size
                  padding: '12px 24px',  // Increase button padding
                  transition: 'transform 0.2s',  // Add transition for hover effect
                  '&:hover': {
                    transform: 'scale(1.05)',  // Scale up on hover
                  }
                }
              }}
            >
              <Button
                variant="contained"
                startIcon={<CodeIcon />}
                onClick={() => navigate('/projects')}
                sx={{
                  bgcolor: '#58a6ff',
                  color: '#fff',
                  '&:hover': {
                    bgcolor: '#4993e6',
                  }
                }}
              >
                <Trans i18nKey="buttons.projects" />
              </Button>

              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href="https://github.com/DevOam"
                target="_blank"
                sx={{
                  borderColor: '#30363d',
                  color: '#58a6ff',
                  '&:hover': { borderColor: '#58a6ff' }
                }}
              >
                <Trans i18nKey="buttons.github" />
              </Button>

              <Button
                variant="outlined"
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/mohamed-reda-lakouas-3a8413264/"
                target="_blank"
                sx={{
                  borderColor: '#30363d',
                  color: '#58a6ff',
                  '&:hover': { borderColor: '#58a6ff' }
                }}
              >
                <Trans i18nKey="buttons.linkedin" />
              </Button>

              <Button
                variant="outlined"
                startIcon={<WorkIcon />}
                href="https://www.upwork.com/freelancers/~01a1f389407017db52"
                target="_blank"
                sx={{
                  borderColor: '#30363d',
                  color: '#4ade80',
                  '&:hover': { borderColor: '#4ade80' }
                }}
              >
                <Trans i18nKey="buttons.upwork" />
              </Button>
            </Box>
          </Grid>

          {/* Projects Section */}
          <Grid item xs={12}>
            <Box
              sx={{
                mt: 6,
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
                <CodeIcon sx={{ fontSize: 32 }} />
                <Trans i18nKey="projects.title" />
              </Typography>

              <Grid container spacing={4}>
                {projects.map((project, index) => (
                  <Grid item xs={12} md={6} key={project.id}>
                    {project.id === 6 ? (
                      <Box
                        component={motion.div}
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 8px 30px rgba(88, 166, 255, 0.1)",
                          transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={() => navigate('/contact')}
                        sx={{
                          p: 4,
                          border: '2px dashed #30363d',
                          borderRadius: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          cursor: 'pointer',
                          position: 'relative',
                          overflow: 'hidden',
                          background: 'linear-gradient(145deg, #0d1117 0%, #161b22 100%)',
                          height: '100%',
                          '&:hover': {
                            border: '2px solid #58a6ff',
                            '& .shine': {
                              transform: 'translateX(100%)',
                            },
                            '& .code-icon': {
                              transform: 'rotate(360deg) scale(1.1)',
                            }
                          },
                          '& .shine': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(45deg, transparent, rgba(88, 166, 255, 0.1), transparent)',
                            transform: 'translateX(-100%)',
                            transition: 'transform 0.6s',
                            pointerEvents: 'none',
                          }
                        }}
                      >
                        <Box className="shine" />
                        <CodeIcon 
                          className="code-icon"
                          sx={{ 
                            fontSize: 60, 
                            color: '#58a6ff', 
                            mb: 2,
                            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                          }} 
                        />
                        <Typography
                          component={motion.h5}
                          initial={{ y: -20 }}
                          animate={{ y: 0 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          variant="h5"
                          sx={{ 
                            color: '#58a6ff', 
                            mb: 2, 
                            fontWeight: 600,
                            textAlign: 'center',
                            background: 'linear-gradient(45deg, #58a6ff, #88ccff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          <Trans i18nKey="contactCard.title" />
                        </Typography>
                        <Typography
                          component={motion.p}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          sx={{ 
                            color: '#8b949e', 
                            mb: 3, 
                            textAlign: 'center',
                            lineHeight: 1.6,
                            maxWidth: '90%',
                            fontSize: '0.95rem',  // Improve readability
                            letterSpacing: '0.5px'  // Add letter spacing for clarity
                          }}
                        >
                          <Trans i18nKey="contactCard.description" />
                        </Typography>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="contained"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate('/contact');
                            }}
                            sx={{
                              bgcolor: '#7ee787',
                              color: '#0d1117',
                              fontWeight: 600,
                              px: 4,
                              py: 1.5,
                              fontSize: '1.1rem',
                              '&:hover': {
                                bgcolor: '#6bd474',
                              }
                            }}
                          >
                            <Trans i18nKey="contactCard.button" />
                          </Button>
                        </motion.div>
                      </Box>
                    ) : (
                      <MotionCard
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          position: 'relative',
                          overflow: 'hidden',
                          background: 'linear-gradient(145deg, #0d1117 0%, #161b22 100%)',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: "0 8px 30px rgba(88, 166, 255, 0.1)",
                            '& .shine': {
                              transform: 'translateX(100%)',
                            }
                          },
                          '& .shine': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(45deg, transparent, rgba(88, 166, 255, 0.1), transparent)',
                            transform: 'translateX(-100%)',
                            transition: 'transform 0.6s',
                            pointerEvents: 'none',
                          }
                        }}
                      >
                        <Box className="shine" />
                        {project.images ? (
                          <div className="carousel-container">
                            <button 
                              onClick={() => prevImage(project.id, project.images?.length || 0)} 
                              className="nav-button prev-button"
                            >
                              &#8592;
                            </button>
                            <div className="image-container">
                              {project.id === 1 && (
                                <div style={{ 
                                  display: 'flex', 
                                  justifyContent: 'center', 
                                  gap: '15px',
                                  marginBottom: '15px',
                                  position: 'absolute',
                                  top: '15px',
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                  zIndex: 10,
                                  background: 'rgba(13, 17, 23, 0.85)',
                                  padding: '10px 15px',
                                  borderRadius: '20px',
                                  backdropFilter: 'blur(8px)',
                                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                                }}>
                                  <Button
                                    variant={coiffureVersion === 'v1' ? 'contained' : 'outlined'}
                                    onClick={() => setCoiffureVersion('v1')}
                                    size="medium"
                                    sx={{
                                      minWidth: '120px',
                                      borderRadius: '15px',
                                      textTransform: 'none',
                                      fontSize: '1rem',
                                      fontWeight: 600,
                                      padding: '8px 20px',
                                      bgcolor: coiffureVersion === 'v1' ? '#58a6ff' : 'transparent',
                                      borderColor: '#58a6ff',
                                      color: coiffureVersion === 'v1' ? '#fff' : '#58a6ff',
                                      '&:hover': {
                                        bgcolor: coiffureVersion === 'v1' ? '#4993e6' : 'rgba(88, 166, 255, 0.1)',
                                        borderColor: '#58a6ff',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 4px 12px rgba(88, 166, 255, 0.25)',
                                      },
                                      transition: 'all 0.3s ease',
                                      boxShadow: coiffureVersion === 'v1' ? '0 4px 12px rgba(88, 166, 255, 0.3)' : 'none',
                                    }}
                                  >
                                    Interface Client
                                  </Button>
                                  <Button
                                    variant={coiffureVersion === 'v2' ? 'contained' : 'outlined'}
                                    onClick={() => setCoiffureVersion('v2')}
                                    size="medium"
                                    sx={{
                                      minWidth: '120px',
                                      borderRadius: '15px',
                                      textTransform: 'none',
                                      fontSize: '1rem',
                                      fontWeight: 600,
                                      padding: '8px 20px',
                                      bgcolor: coiffureVersion === 'v2' ? '#58a6ff' : 'transparent',
                                      borderColor: '#58a6ff',
                                      color: coiffureVersion === 'v2' ? '#fff' : '#58a6ff',
                                      '&:hover': {
                                        bgcolor: coiffureVersion === 'v2' ? '#4993e6' : 'rgba(88, 166, 255, 0.1)',
                                        borderColor: '#58a6ff',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 4px 12px rgba(88, 166, 255, 0.25)',
                                      },
                                      transition: 'all 0.3s ease',
                                      boxShadow: coiffureVersion === 'v2' ? '0 4px 12px rgba(88, 166, 255, 0.3)' : 'none',
                                    }}
                                  >
                                    Interface Admin
                                  </Button>
                                </div>
                              )}
                              <img
                                src={project.images[currentImageIndices[project.id] || 0]}
                                alt={project.title}
                                className="project-image"
                              />
                            </div>
                            <button 
                              onClick={() => nextImage(project.id, project.images?.length || 0)} 
                              className="nav-button next-button"
                            >
                              &#8594;
                            </button>
                          </div>
                        ) : (
                          <CardMedia
                            component="img"
                            image={project.image}
                            alt={project.title}
                            sx={{
                              height: 200,
                              transition: 'transform 0.3s ease',
                            }}
                          />
                        )}
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h5" component="h2" sx={{ color: '#c9d1d9' }}>
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              color: '#8b949e',
                              lineHeight: 1.6,
                              maxHeight: '120px',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              fontSize: '0.95rem',  // Improve readability
                              letterSpacing: '0.5px'  // Add letter spacing for clarity
                            }}
                          >
                            {project.description}
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                            {project.technologies.map((tech) => (
                              <Box
                                key={tech}
                                sx={{
                                  bgcolor: '#21262d',
                                  color: '#7ee787',
                                  px: 1.5,
                                  py: 0.5,
                                  borderRadius: 1,
                                  fontSize: '0.75rem',
                                }}
                              >
                                {tech}
                              </Box>
                            ))}
                          </Box>
                        </CardContent>
                        <CardActions sx={{ p: 2, pt: 0 }}>
                          <Button
                            size="small"
                            href={project.github}
                            target="_blank"
                            startIcon={<GitHubIcon />}
                            sx={{
                              color: '#7ee787',
                              '&:hover': { bgcolor: 'rgba(126, 231, 135, 0.1)' },
                            }}
                          >
                            Voir sur GitHub
                          </Button>
                          <Button
                            size="small"
                            href={project.demo}
                            target="_blank"
                            startIcon={<LaunchIcon />}
                            sx={{
                              color: '#7ee787',
                              '&:hover': { bgcolor: 'rgba(126, 231, 135, 0.1)' },
                            }}
                          >
                            Voir le projet
                          </Button>
                        </CardActions>
                      </MotionCard>
                    )}
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
