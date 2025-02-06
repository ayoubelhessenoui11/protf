import React from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lng: 'fr' | 'en') => {
    setLanguage(lng);
    handleClose();
  };

  return (
    <Box>
      <IconButton
        onClick={handleClick}
        sx={{ color: '#58a6ff' }}
      >
        <LanguageIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            bgcolor: '#21262d',
            color: '#c9d1d9',
            border: '1px solid #30363d',
          }
        }}
      >
        <MenuItem 
          onClick={() => changeLanguage('fr')}
          selected={language === 'fr'}
          sx={{ '&:hover': { bgcolor: '#30363d' } }}
        >
          Français
        </MenuItem>
        <MenuItem 
          onClick={() => changeLanguage('en')}
          selected={language === 'en'}
          sx={{ '&:hover': { bgcolor: '#30363d' } }}
        >
          English
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
