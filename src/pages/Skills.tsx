import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  LinearProgress,
  Tooltip,
} from '@mui/material';
import { motion } from 'framer-motion';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import BuildIcon from '@mui/icons-material/Build';
import WebIcon from '@mui/icons-material/Web';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

const MotionPaper = motion(Paper);
const MotionContainer = motion(Container);

interface Skill {
  name: string;
  level: number;
  tooltip?: string;
}

interface SkillCategory {
  category: string;
  icon: JSX.Element;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Développement Mobile',
    icon: <PhoneAndroidIcon />,
    skills: [
      { name: 'Flutter/Dart', level: 95, tooltip: 'Développement cross-platform, Widgets, State Management' },
      { name: 'Kotlin/Android', level: 90, tooltip: 'Android SDK, Jetpack Compose, MVVM' },
      { name: 'Swift/iOS', level: 85, tooltip: 'UIKit, SwiftUI, Core Data' },
      { name: 'React Native', level: 65, tooltip: 'Components, Navigation' },
    ],
  },
  {
    category: 'Backend & Spring Framework',
    icon: <DeveloperModeIcon />,
    skills: [
      { name: 'Spring Boot', level: 85, tooltip: 'REST APIs, Security, Microservices' },
      { name: 'Spring Data JPA', level: 80, tooltip: 'Repositories, Entities, Relations' },
      { name: 'Spring Security', level: 75, tooltip: 'Authentication, Authorization, JWT' },
      { name: 'Spring Cloud', level: 70, tooltip: 'Service Discovery, Config Server' },
    ],
  },
  {
    category: 'Développement Web',
    icon: <WebIcon />,
    skills: [
      { name: 'TypeScript', level: 80, tooltip: 'Types, Interfaces, Generics' },
      { name: 'React.js', level: 75, tooltip: 'Hooks, Context, Next.js' },
      { name: 'HTML5/CSS3', level: 75, tooltip: 'Flexbox, Grid, Responsive Design' },
      { name: 'Angular', level: 65, tooltip: 'Components, Directives, Services' },
    ],
  },
  {
    category: 'Business Intelligence & Data',
    icon: <StorageIcon />,
    skills: [
      { name: 'SQL Server Integration Services (SSIS)', level: 85, tooltip: 'ETL, Data Flow, Control Flow' },
      { name: 'SQL Server Analysis Services (SSAS)', level: 80, tooltip: 'Cubes OLAP, Data Mining' },
      { name: 'SQL Server Reporting Services (SSRS)', level: 85, tooltip: 'Rapports interactifs, Tableaux de bord' },
      { name: 'Data Warehouse', level: 80, tooltip: 'Modélisation dimensionnelle, ETL' },
      { name: 'Power BI', level: 85, tooltip: 'Visualisation de données, DAX' },
    ],
  },
  {
    category: 'DevOps & Outils',
    icon: <BuildIcon />,
    skills: [
      { name: 'Git & GitHub', level: 90, tooltip: 'Versioning, Branches, CI/CD' },
      { name: 'Docker', level: 80, tooltip: 'Conteneurisation, Docker Compose' },
      { name: 'Agile/Scrum', level: 85, tooltip: 'Sprint Planning, Daily Standups, Retrospectives' },
      { name: 'Jira & Confluence', level: 80, tooltip: 'Project Management, Documentation' },
    ],
  },
  {
    category: 'APIs & Intégrations',
    icon: <CodeIcon />,
    skills: [
      { name: 'GraphQL', level: 70, tooltip: 'Queries, Mutations, Subscriptions' },
      { name: 'REST APIs', level: 80, tooltip: 'CRUD, Authentication, Pagination' },
      { name: 'SOAP', level: 60, tooltip: 'XML, WSDL, Operations' },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <MotionContainer
      sx={{ py: 8 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          textAlign: 'center',
          mb: 6,
          fontWeight: 'bold',
          background: 'linear-gradient(90deg, #58a6ff, #7ee787)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Mes Compétences
      </Typography>

      <Grid container spacing={4}>
        {skillCategories.map((category, categoryIndex) => (
          <Grid item xs={12} md={6} key={category.category}>
            <MotionPaper
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              elevation={0}
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'primary.dark',
                background: 'rgba(88, 166, 255, 0.05)',
                '&:hover': {
                  borderColor: 'primary.main',
                  transform: 'translateY(-4px)',
                  transition: 'all 0.3s ease-in-out',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ color: 'primary.main', mr: 2 }}>
                  {category.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                  }}
                >
                  {category.category}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                {category.skills.map((skill) => (
                  <Tooltip
                    key={skill.name}
                    title={skill.tooltip || ""}
                    placement="top"
                    arrow
                  >
                    <Box
                      sx={{
                        mb: 3,
                        '&:hover .MuiLinearProgress-root': {
                          transform: 'scaleY(1.2)',
                          transition: 'transform 0.3s ease-in-out',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mb: 1,
                        }}
                      >
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" color="primary">
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: 'rgba(88, 166, 255, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                            background: 'linear-gradient(90deg, #58a6ff, #7ee787)',
                          },
                          transition: 'all 0.3s ease-in-out',
                        }}
                      />
                    </Box>
                  </Tooltip>
                ))}
              </Box>
            </MotionPaper>
          </Grid>
        ))}
      </Grid>
    </MotionContainer>
  );
};

export default Skills;
