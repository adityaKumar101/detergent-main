import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import {
  Menu as MenuIcon,
  KeyboardArrowDown,
  Close
} from '@mui/icons-material';
// REMOVE this: import './Header.css';

const Header = () => {
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);
  const location = useLocation();

  const openInquiryForm = (type) => {
    setMobileDrawer(false);
    setMobileContactOpen(false);

    if (type === 'active') {
      window.openActiveDistributorForm?.();
    } else {
      window.openBecomeDistributorForm?.();
    }
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Special Achievements', path: '/achievements' },
    { label: 'Career', path: '/career' },
  ];

  return (
    <div className="header-wrapper"> {/* ADD THIS WRAPPER */}
      <AppBar position="fixed" className="appBar">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo */}
            {/* <Typography
              variant="h6"
              component={Link}
              to="/"
              className="logo"
              sx={{
                flexGrow: { xs: 1, md: 0 },
                textDecoration: 'none'
              }}
            >
              <span>Ghar</span>
            </Typography> */}
            {/* Round Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                flexGrow: { xs: 1, md: 0 },
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center'
              }}
              onClick={() => setMobileDrawer(false)}
            >
              <img
                src="images/logo.png"
                alt="Ghar Logo"
                style={{
                  height: '45px',
                  width: '45px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #ff6b35',
                  padding: '2px',
                  backgroundColor: 'white'
                }}
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.target.style.display = 'none';
                  const existingFallback = e.target.parentNode.querySelector('.logo-fallback');
                  if (!existingFallback) {
                    const fallback = document.createElement('div');
                    fallback.className = 'logo-fallback';
                    fallback.textContent = 'G';
                    fallback.style.cssText = `
          height: 45px;
          width: 45px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ff6b35, #e55a2b);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
          border: 2px solid #ff6b35;
        `;
                    e.target.parentNode.appendChild(fallback);
                  }
                }}
              />
            </Box>
            {/* Desktop Navigation */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', ml: 4 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  className={`navButton ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Button>
              ))}

              {/* Contact Us Dropdown */}
              <div className="dropdown">
                <Button
                  className="navButton dropdown-toggle"
                  endIcon={<KeyboardArrowDown className="dropdown-arrow" />}
                >
                  Contact Us
                </Button>

                <ul className="dropdown-menu">
                  <li>
                    <a onClick={() => openInquiryForm('active')}>
                      Active Distributor Inquiry
                    </a>
                  </li>
                  <li>
                    <a onClick={() => openInquiryForm('become')}>
                      Become a Distributor
                    </a>
                  </li>
                </ul>
              </div>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setMobileDrawer(true)}
              sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileDrawer}
        onClose={() => setMobileDrawer(false)}
        className="mobileDrawer"
      >
        <Box sx={{ p: 2, backgroundColor: '#1a3a6a', color: 'white', height: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              className="logo"
              sx={{ textDecoration: 'none', color: 'white' }}
              onClick={() => setMobileDrawer(false)}
            >
              Ghar
            </Typography>
            <IconButton
              onClick={() => setMobileDrawer(false)}
              className="closeButton"
            >
              <Close />
            </IconButton>
          </Box>

          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.label}
                className="mobileMenuItem"
                onClick={() => setMobileDrawer(false)}
                component={Link}
                to={item.path}
                sx={{ textDecoration: 'none', color: 'white' }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}

            <ListItem
              className="mobileMenuItem"
              onClick={() => setMobileContactOpen(!mobileContactOpen)}
              sx={{ cursor: 'pointer' }}
            >
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    Contact Us
                    <KeyboardArrowDown
                      sx={{
                        transform: mobileContactOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s'
                      }}
                    />
                  </Box>
                }
              />
            </ListItem>

            {mobileContactOpen && (
              <List sx={{ pl: 3, backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <ListItem
                  className="mobileMenuItem"
                  onClick={() => openInquiryForm('active')}
                  sx={{ pl: 3 }}
                >
                  <ListItemText primary="Active Distributor Inquiry" />
                </ListItem>
                <ListItem
                  className="mobileMenuItem"
                  onClick={() => openInquiryForm('become')}
                  sx={{ pl: 3 }}
                >
                  <ListItemText primary="Become a Distributor" />
                </ListItem>
              </List>
            )}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Header;