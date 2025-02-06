import React from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import project1Image from '../assets/images/project1.png';
import project3Image from '../assets/images/project3.png';
import project5Image from '../assets/images/project5.png';
import project6Image from '../assets/images/project6.png';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  github: string;
  demo: string;
}

const Home: React.FC = () => {
  const { t: languageT } = useLanguage();

  const skillsets = (languageT('skillsets') as unknown) as { [key: string]: string[] };
  const skills = (languageT('skills') as unknown) as { [key: string]: string[] };

  const projects: Project[] = [
    {
      id: 1,
      title: 'Application Mobile Barber',
      description: "Application mobile native avec interface utilisateur et administrateur. Design moderne et intuitif adapté aux smartphones. Interface double face optimisée pour une expérience mobile fluide.",
      images: [project1Image],
      technologies: ['Flutter', 'Firebase', 'Material Design', 'Figma', 'Adobe XD', 'UI/UX Mobile'],
      github: '#',
      demo: 'https://www.figma.com/design/CVEkYlLNbMwbJbsFqkOfhQ/Barber-App?node-id=0-1&p=f&t=svt7NAzgOuE4MbmA-0'
    },
    {
      id: 2,
      title: 'Application Mobile Crypto',
      description: "Application mobile de trading et suivi des cryptomonnaies. Interface optimisée pour le trading sur mobile avec support de multiples blockchains. Graphiques et analyses adaptés aux écrans de smartphones.",
      images: [project3Image],
      technologies: ['Flutter', 'Firebase', 'Chart.js Mobile', 'Blockchain', 'TRON API', 'CryptoCompare', 'GoingKu'],
      github: 'https://github.com/redalakouas/crypto-app',
      demo: '#'
    },
    {
      id: 3,
      title: 'Application Mobile Cabby',
      description: "Application mobile de VTC avec système de réservation en temps réel. Interface mobile intuitive pour les clients et les chauffeurs. Navigation GPS et paiements intégrés pour une expérience mobile complète.",
      images: [project5Image],
      technologies: ['Flutter', 'Firebase', 'Google Maps SDK', 'Real-time tracking', 'Mobile Payments'],
      github: '#',
      demo: 'https://www.figma.com/design/QffO0I98yaR4bAoXxruuA0/cabby-app?node-id=0-1&p=f&t=iW8YtWgMllCZriJ2-0'
    },
    {
      id: 4,
      title: 'Application Mobile Taurus Maroc',
      description: "Application mobile e-commerce développée en Java pour les appareils électroménagers Taurus. Expérience d'achat optimisée pour mobile avec navigation fluide et paiement sécurisé. Disponible sur PlayStore.",
      images: [project6Image],
      technologies: ['Java Android', 'Spring Boot', 'MySQL', 'Mobile REST API', 'Firebase', 'Mobile Payments'],
      github: 'https://github.com/redalakouas/taurus-maroc',
      demo: 'https://play.google.com/store/apps/details?id=com.taurusmaroce'
    },
    {
      id: 5,
      title: 'Application Mobile Alerte Nids de Poule',
      description: "Application mobile native Android pour signaler les nids de poule. Interface moderne avec Jetpack Compose, optimisée pour une utilisation mobile en déplacement. Géolocalisation et notifications push.",
      images: [project1Image],
      technologies: ['Kotlin Android', 'Firebase', 'Google Maps Mobile SDK', 'Jetpack Compose', 'Material Design 3'],
      github: '#',
      demo: 'https://www.figma.com/design/nLslRcFhyc0uUsrstx81zS/ned?node-id=0-1&p=f&t=ZqoGOjR3aLkC2Wqy-0'
    }
  ];

  return (
    <Box sx={{ bgcolor: '#0d1117', minHeight: '100vh', color: '#c9d1d9' }}>
      <AnimatedBackground />
      <Container maxWidth="lg" sx={{ pt: 8, pb: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: '100%' }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    mb: 4
                  }}
                >
                  <Box
                    component="img"
                    src={project1Image}
                    alt="Profile"
                    sx={{
                      width: { xs: 120, md: 150 },
                      height: { xs: 120, md: 150 },
                      borderRadius: '50%',
                      border: '4px solid #30363d'
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    component={motion.h1}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    sx={{ color: '#94A3B8', mb: 1 }}
                  >
                    👋 Salut, je suis
                  </Typography>

                  <Typography
                    component={motion.h2}
                    variant="h3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    sx={{
                      fontWeight: 700,
                      color: '#c9d1d9',
                      mb: 2
                    }}
                  >
                    Ayoub El Hessenoui
                  </Typography>

                  <Typography
                    component={motion.h3}
                    variant="h4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                      color: '#7ee787'
                    }}
                  >
                    Développeur Mobile
                  </Typography>
                </Box>
              </Box>

              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                sx={{ mb: 4 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: '#58a6ff',
                    mb: 2,
                    fontWeight: 600
                  }}
                >
                  À propos de moi
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#7ee787',
                        mb: 1,
                        fontWeight: 600
                      }}
                    >
                      Développement Mobile
                    </Typography>
                    <Typography
                      sx={{
                        color: '#8b949e',
                        lineHeight: 1.6,
                        pl: 3,
                        fontSize: '0.95rem',
                        letterSpacing: '0.5px'
                      }}
                    >
                      • Création d'applications mobiles performantes et intuitives<br />
                      • Expertise en développement natif et cross-platform<br />
                      • Focus sur l'expérience utilisateur et les performances
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#7ee787',
                        mb: 1,
                        fontWeight: 600
                      }}
                    >
                      Technologies
                    </Typography>
                    <Typography
                      sx={{
                        color: '#8b949e',
                        lineHeight: 1.6,
                        pl: 3,
                        fontSize: '0.95rem',
                        letterSpacing: '0.5px'
                      }}
                    >
                      • Développement mobile avec Flutter, Android & iOS<br />
                      • Intégration de Firebase et APIs REST<br />
                      • Design UI/UX avec Figma et Adobe XD
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                sx={{ mb: 4 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: '#58a6ff',
                    mb: 3,
                    fontWeight: 600
                  }}
                >
                  Compétences
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {Object.keys(skills).map((category) => (
                    <Box
                      key={category}
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        bgcolor: '#161b22',
                        border: '1px solid #30363d'
                      }}
                    >
                      <Typography variant="h6" sx={{ color: '#58a6ff', mb: 2, fontWeight: 'bold' }}>
                        {category}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {skills[category]?.map((skill: string) => (
                          <Box
                            key={skill}
                            sx={{
                              bgcolor: '#238636',
                              color: '#fff',
                              px: 1.5,
                              py: 0.5,
                              borderRadius: 1,
                              fontSize: '0.75rem'
                            }}
                          >
                            {skill}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  flexWrap: 'wrap',
                  mt: 4
                }}
              >
                <Link to="/projects" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#58a6ff',
                      color: '#fff',
                      '&:hover': { bgcolor: '#4993e6' }
                    }}
                  >
                    Voir mes projets
                  </Button>
                </Link>

                <Button
                  variant="outlined"
                  href="https://github.com/DevOam"
                  target="_blank"
                  sx={{
                    color: '#58a6ff',
                    borderColor: '#30363d',
                    '&:hover': { borderColor: '#58a6ff' }
                  }}
                >
                  GitHub
                </Button>

                <Button
                  variant="outlined"
                  href="https://www.linkedin.com/in/mohamed-reda-lakouas-3a8413264/"
                  target="_blank"
                  sx={{
                    color: '#58a6ff',
                    borderColor: '#30363d',
                    '&:hover': { borderColor: '#58a6ff' }
                  }}
                >
                  LinkedIn
                </Button>

                <Button
                  variant="outlined"
                  href="https://www.upwork.com/freelancers/~01a1f389407017db52"
                  target="_blank"
                  sx={{
                    color: '#4ade80',
                    borderColor: '#30363d',
                    '&:hover': { borderColor: '#4ade80' }
                  }}
                >
                  Upwork
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#58a6ff',
                  mb: 4,
                  fontWeight: 700
                }}
              >
                Projets Récents
              </Typography>

              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <Box
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
                        '&:hover': {
                          border: '2px solid #58a6ff'
                        }
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#58a6ff',
                          mb: 2,
                          fontWeight: 600,
                          textAlign: 'center'
                        }}
                      >
                        Vous avez un projet en tête ?
                      </Typography>
                      <Typography
                        sx={{
                          color: '#8b949e',
                          mb: 3,
                          textAlign: 'center',
                          lineHeight: 1.6,
                          maxWidth: '90%',
                          fontSize: '0.95rem',
                          letterSpacing: '0.5px'
                        }}
                      >
                        Discutons de votre projet et voyons comment je peux vous aider à le réaliser.
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: '#7ee787',
                          color: '#0d1117',
                          fontWeight: 600,
                          '&:hover': {
                            bgcolor: '#6bd474'
                          }
                        }}
                      >
                        Me contacter
                      </Button>
                    </Box>
                  </Link>
                </Grid>

                {projects.map((project, index) => (
                  <Grid item xs={12} key={project.id}>
                    <Box
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        overflow: 'hidden',
                        background: 'linear-gradient(145deg, #0d1117 0%, #161b22 100%)',
                        borderRadius: 2,
                        border: '1px solid #30363d',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 30px rgba(88, 166, 255, 0.1)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Box
                        component="img"
                        src={project.images[0]}
                        alt={project.title}
                        sx={{
                          width: '100%',
                          height: 200,
                          objectFit: 'cover'
                        }}
                      />
                      <Box sx={{ p: 3 }}>
                        <Typography variant="h6" sx={{ color: '#58a6ff', mb: 2 }}>
                          {project.title}
                        </Typography>
                        <Typography sx={{ color: '#8b949e', mb: 2 }}>
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
                                fontSize: '0.75rem'
                              }}
                            >
                              {tech}
                            </Box>
                          ))}
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                          <Button
                            href={project.github}
                            target="_blank"
                            sx={{
                              color: '#7ee787',
                              '&:hover': { bgcolor: 'rgba(126, 231, 135, 0.1)' }
                            }}
                          >
                            GitHub
                          </Button>
                          <Button
                            href={project.demo}
                            target="_blank"
                            sx={{
                              color: '#7ee787',
                              '&:hover': { bgcolor: 'rgba(126, 231, 135, 0.1)' }
                            }}
                          >
                            Demo
                          </Button>
                        </Box>
                      </Box>
                    </Box>
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
