import React, { createContext, useContext, useState } from 'react';

type LanguageContextType = {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
  t: (key: string) => string;
};

const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      skills: 'Compétences',
      contact: 'Contact',
      formationCertificate: 'Formation & Certificats'
    },
    greeting: 'Bonjour, je suis',
    role: 'Développeur Mobile',
    description: [
      'Développeur d\'applications mobiles spécialisé en XML, Kotlin, Java, Swift, Flutter, Dart, SQLite, Room Database, API Retrofit, Volly et gestion de projets.',
      'Compétent en SQL, PHP, JavaScript, Python, HTML5, Laravel, CSS3 et algorithmes avancés.',
      'Expérience pratique avec Firebase pour la gestion des bases de données en temps réel, l\'authentification des utilisateurs et les notifications push.',
      'Familiarisé avec les diagrammes UML, les méthodologies agiles et les outils comme Figma pour le prototypage.',
      'Passionné par la technologie et l\'apprentissage continu.'
    ],
    buttons: {
      projects: 'Voir mes projets',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      upwork: 'Upwork'
    },
    skills: {
      mobile: 'Mobile',
      backend: 'Backend',
      frontend: 'Frontend',
      tools: 'Outils'
    },
    projects: {
      title: 'Mes Projets',
      subtitle: 'Découvrez une sélection de mes projets les plus récents et innovants',
      buttons: {
        github: 'Voir sur GitHub',
        demo: 'Voir le projet'
      },
      project1: {
        title: 'Application E-commerce',
        description: 'Application mobile de commerce électronique avec panier, paiement et gestion des commandes.'
      },
      project2: {
        title: 'Gestionnaire de Tâches',
        description: 'Application de gestion de tâches avec tableaux Kanban et collaboration en temps réel.'
      },
      project3: {
        title: 'Portfolio Personnel',
        description: 'Site web portfolio moderne avec animations et support multilingue.'
      },
      project4: {
        title: 'Application de Fitness',
        description: 'Application Android de suivi d\'entraînement avec plans personnalisés.'
      }
    },
    contact: {
      title: 'Contact',
      name: 'Nom',
      email: 'Email',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer',
      sending: 'Envoi en cours...',
      successMessage: 'Message envoyé avec succès !',
      errorMessage: 'Une erreur est survenue. Veuillez réessayer.',
      getInTouch: 'Restons en contact',
      phone: 'Téléphone',
      emailLabel: 'Email',
      address: 'Adresse',
      availability: 'Disponible pour des opportunités de freelance et des projets passionnants.'
    },
    education: {
      title: 'Formation',
      items: [
        {
          period: '2024-2025',
          degree: 'Licence d\'excellence en ingénierie des systèmes informatiques et technologies web',
          school: 'École Supérieure de Technologie'
        },
        {
          period: '2023-2024',
          degree: 'Formation en Marketing Digital',
          school: 'NTYC',
          details: 'présentiel tout au long de l\'année'
        },
        {
          period: '2021-2023',
          degree: 'Spécialisation en Développement d\'Applications Mobiles',
          school: 'ISGI Marrakech'
        },
        {
          period: '2021-2022',
          degree: 'Fondamentaux du Développement Digital et Web',
          school: 'ISGI Marrakech'
        },
        {
          period: '2020-2021',
          degree: 'Baccalauréat Sciences de la Vie et de la Terre',
          school: ''
        }
      ]
    },
    certifications: {
      title: 'Certifications',
      items: [
        {
          name: 'Introduction à l\'application mobile Android',
          provider: 'Google',
          link: ''
        },
        {
          name: 'Fondamentaux du marketing numérique et du commerce électronique',
          provider: 'Google',
          link: ''
        },
        {
          name: 'Construire, lancer et gérer des magasins de commerce électronique',
          provider: 'Google',
          link: ''
        },
        {
          name: 'Contrôle de version',
          provider: 'Google',
          link: ''
        },
        {
          name: 'Évaluer le succès : analyse et mesure du marketing',
          provider: 'Google',
          link: ''
        },
        {
          name: 'De likes à leads : interagir avec les clients en ligne',
          provider: 'Google',
          link: ''
        },
        {
          name: 'Penser en dehors de la boîte : marketing par courriel',
          provider: 'Google',
          link: ''
        },
        {
          name: 'Attirer et engager les clients avec le marketing numérique',
          provider: 'Google',
          link: ''
        },
        {
          name: 'Fondamentaux : données, données, partout',
          provider: 'Google',
          link: ''
        },
        {
          name: 'Introduction à la technologie de l\'information et à AWS Cloud',
          provider: 'AWS',
          link: ''
        },
        {
          name: 'Fondamentaux du support technique',
          provider: 'Google',
          link: ''
        },
        {
          name: 'Introduction à la gestion de projet',
          provider: 'IBM',
          link: ''
        },
        {
          name: 'Introduction à l\'ingénierie logicielle',
          provider: 'IBM',
          link: ''
        }
      ]
    },
    formation: {
      title: 'Formation & Certificats',
      education: 'Formation',
      certificates: 'Certificats'
    }
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      formationCertificate: 'Formation & Certificates'
    },
    greeting: 'Hello, I am',
    role: 'Mobile Developer',
    description: [
      'Mobile application developer specialized in XML, Kotlin, Java, Swift, Flutter, Dart, SQLite, Room Database, Retrofit API, Volley, and project management.',
      'Proficient in SQL, PHP, JavaScript, Python, HTML5, Laravel, CSS3, and advanced algorithms.',
      'Hands-on experience with Firebase for real-time database management, user authentication, and push notifications.',
      'Familiar with UML diagrams, agile methodologies, and tools like Figma for prototyping.',
      'Passionate about technology and continuous learning.'
    ],
    buttons: {
      projects: 'View my projects',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      upwork: 'Upwork'
    },
    skills: {
      mobile: 'Mobile',
      backend: 'Backend',
      frontend: 'Frontend',
      tools: 'Tools'
    },
    projects: {
      title: 'My Projects',
      subtitle: 'Discover a selection of my most recent and innovative projects',
      buttons: {
        github: 'View on GitHub',
        demo: 'View Project'
      },
      project1: {
        title: 'E-commerce App',
        description: 'Mobile e-commerce application with cart, payment, and order management.'
      },
      project2: {
        title: 'Task Manager',
        description: 'Task management application with Kanban boards and real-time collaboration.'
      },
      project3: {
        title: 'Personal Portfolio',
        description: 'Modern portfolio website with animations and multilingual support.'
      },
      project4: {
        title: 'Fitness App',
        description: 'Android fitness tracking app with personalized workout plans.'
      }
    },
    contact: {
      title: 'Contact',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      successMessage: 'Message sent successfully!',
      errorMessage: 'An error occurred. Please try again.',
      getInTouch: 'Let\'s Get in Touch',
      phone: 'Phone',
      emailLabel: 'Email',
      address: 'Address',
      availability: 'Available for freelance opportunities and exciting projects.'
    },
    education: {
      title: 'Education',
      items: [
        {
          period: '2024-2025',
          degree: 'Bachelor\'s Degree in Computer Systems Engineering and Web Technologies',
          school: 'School of Technology'
        },
        {
          period: '2023-2024',
          degree: 'Digital Marketing Training',
          school: 'NTYC',
          details: 'full-time throughout the year'
        },
        {
          period: '2021-2023',
          degree: 'Mobile Application Development Specialization',
          school: 'ISGI Marrakech'
        },
        {
          period: '2021-2022',
          degree: 'Digital and Web Development Fundamentals',
          school: 'ISGI Marrakech'
        },
        {
          period: '2020-2021',
          degree: 'Life and Earth Sciences Baccalaureate',
          school: ''
        }
      ]
    },
    certifications: {
      title: 'Certifications',
      items: [
        {
          name: 'Introduction to Android Mobile Application Development',
          provider: 'Google',
          link: ''
        },
        {
          name: 'Foundations of Digital Marketing and E-commerce',
          provider: 'Google',
          link: ''
        },
        {
          name: 'Make the Sale: Build, Launch, and Manage E-commerce Stores',
          provider: 'Google',
          link: ''
        },
        {
          name: 'Version Control',
          provider: 'Google',
          link: ''
        },
        {
          name: 'Assess for Success: Marketing Analytics and Measurement',
          provider: 'Google',
          link: ''
        },
        {
          name: 'From Likes to Leads: Interact with Customers Online',
          provider: 'Google',
          link: ''
        },
        {
          name: 'Think Outside the Inbox: Email Marketing',
          provider: 'Google',
          link: ''
        },
        {
          name: 'Attract and Engage Customers with Digital Marketing',
          provider: 'Google',
          link: ''
        },
        {
          name: 'Foundations: Data, Data, Everywhere',
          provider: 'Google',
          link: ''
        },
        {
          name: 'Introduction to Information Technology and AWS Cloud',
          provider: 'AWS',
          link: ''
        },
        {
          name: 'Technical Support Fundamentals',
          provider: 'Google',
          link: ''
        },
        {
          name: 'Introduction to Project Management',
          provider: 'IBM',
          link: ''
        },
        {
          name: 'Introduction to Software Engineering',
          provider: 'IBM',
          link: ''
        }
      ]
    },
    formation: {
      title: 'Formation & Certificates',
      education: 'Education',
      certificates: 'Certificates'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
