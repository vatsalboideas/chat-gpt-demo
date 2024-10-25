import { Box, Typography, Button, Container } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url("/hero-bg.png")', // make sure the image is in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" sx={{ color: '#FFB703', mb: 2 }}>
          About Fractional Ownership
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Own a part of a kingdom!
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 4 }}>
          Fractional Ownership is a model where you can invest in our prime
          commercial real estate in shares. These investments will give you
          returns as the real estate market keeps booming.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ backgroundColor: '#FFB703', mr: 2 }}
        >
          Enquire Now
        </Button>
        <Button variant="outlined" color="primary" sx={{ color: '#FFB703' }}>
          Explore
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
