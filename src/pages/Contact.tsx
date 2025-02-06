import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
  Snackbar,
  Paper,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("dpc9-WRxh_MwkkmM-");
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_wwzn0n9';
  const EMAILJS_TEMPLATE_ID = 'template_yyd7oro';
  const EMAILJS_USER_ID = 'dpc9-WRxh_MwkkmM-';
  const TO_EMAIL = 'devoam5@gmail.com';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: TO_EMAIL
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      setSnackbar({
        open: true,
        message: t('contact.successMessage'),
        severity: 'success'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSnackbar({
        open: true,
        message: t('contact.errorMessage'),
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: 'left',
                mb: 4,
                color: '#58a6ff',
                fontWeight: 700
              }}
            >
              {t('contact.title')}
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                bgcolor: '#161b22',
                p: 4,
                borderRadius: 2,
                border: '1px solid #30363d'
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="name"
                    label={t('contact.name')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#30363d',
                        },
                        '&:hover fieldset': {
                          borderColor: '#58a6ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#58a6ff',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#8b949e',
                      },
                      '& .MuiOutlinedInput-input': {
                        color: '#c9d1d9',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="email"
                    label={t('contact.email')}
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#30363d',
                        },
                        '&:hover fieldset': {
                          borderColor: '#58a6ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#58a6ff',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#8b949e',
                      },
                      '& .MuiOutlinedInput-input': {
                        color: '#c9d1d9',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="subject"
                    label={t('contact.subject')}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#30363d',
                        },
                        '&:hover fieldset': {
                          borderColor: '#58a6ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#58a6ff',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#8b949e',
                      },
                      '& .MuiOutlinedInput-input': {
                        color: '#c9d1d9',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="message"
                    label={t('contact.message')}
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#30363d',
                        },
                        '&:hover fieldset': {
                          borderColor: '#58a6ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#58a6ff',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#8b949e',
                      },
                      '& .MuiOutlinedInput-input': {
                        color: '#c9d1d9',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    startIcon={<SendIcon />}
                    sx={{
                      bgcolor: '#238636',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        bgcolor: '#2ea043'
                      }
                    }}
                  >
                    {loading ? t('contact.sending') : t('contact.send')}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </MotionBox>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={5}>
          <MotionPaper
            elevation={0}
            sx={{
              p: 4,
              bgcolor: '#161b22',
              borderRadius: 2,
              border: '1px solid #30363d',
              height: '100%'
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                color: '#58a6ff',
                fontWeight: 600
              }}
            >
              {t('contact.getInTouch')}
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <PhoneIcon sx={{ color: '#58a6ff', mr: 2, fontSize: '1.5rem' }} />
                <Box>
                  <Typography variant="body1" sx={{ color: '#c9d1d9', fontWeight: 500 }}>
                    {t('contact.phone')}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#8b949e' }}>
                    +212 772-321613
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <EmailIcon sx={{ color: '#58a6ff', mr: 2, fontSize: '1.5rem' }} />
                <Box>
                  <Typography variant="body1" sx={{ color: '#c9d1d9', fontWeight: 500 }}>
                    {t('contact.emailLabel')}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#8b949e' }}>
                    devoam5@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <LocationOnIcon sx={{ color: '#58a6ff', mr: 2, fontSize: '1.5rem' }} />
                <Box>
                  <Typography variant="body1" sx={{ color: '#c9d1d9', fontWeight: 500 }}>
                    {t('contact.address')}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#8b949e' }}>
                    Marrakech
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Divider sx={{ my: 3, borderColor: '#30363d' }} />

            <Typography variant="body1" sx={{ color: '#8b949e', mb: 2 }}>
              {t('contact.availability')}
            </Typography>
          </MotionPaper>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
      >
        <Alert
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
