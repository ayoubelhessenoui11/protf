import React, { useState } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const projects = (t('projects', { returnObjects: true }) as unknown) as Project[];

  const filteredProjects = selectedCategory
    ? projects.filter(project => project.technologies.includes(selectedCategory))
    : projects;

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ color: '#58a6ff', mb: 6 }}>
        {t('projects_title')}
      </Typography>

      <Grid container spacing={4}>
        {filteredProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: '#161b22',
                borderRadius: 2,
                overflow: 'hidden',
                border: '1px solid #30363d',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  '& img': {
                    transform: 'scale(1.05)'
                  }
                }
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  paddingTop: '56.25%',
                  overflow: 'hidden'
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out'
                  }}
                />
              </Box>

              <Box sx={{ p: 3, flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom sx={{ color: '#c9d1d9', fontWeight: 600 }}>
                  {project.title}
                </Typography>
                
                <Typography variant="body2" sx={{ color: '#8b949e', mb: 2 }}>
                  {project.description}
                </Typography>

                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                  {project.technologies.map((tech) => (
                    <Box
                      key={tech}
                      onClick={() => setSelectedCategory(selectedCategory === tech ? null : tech)}
                      sx={{
                        bgcolor: selectedCategory === tech ? '#238636' : '#21262d',
                        color: '#7ee787',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: '0.75rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          bgcolor: '#238636'
                        }
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>

                <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        textDecoration: 'none',
                        color: '#58a6ff',
                        fontSize: '0.875rem',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        border: '1px solid #30363d',
                        transition: 'all 0.2s ease-in-out'
                      }}
                    >
                      GitHub
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        textDecoration: 'none',
                        color: '#7ee787',
                        fontSize: '0.875rem',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        border: '1px solid #30363d',
                        transition: 'all 0.2s ease-in-out'
                      }}
                    >
                      Demo
                    </motion.a>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
