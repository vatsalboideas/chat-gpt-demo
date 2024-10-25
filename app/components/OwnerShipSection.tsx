import { Box, Grid, Typography, Container, Paper } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import CallIcon from '@mui/icons-material/Call';

const OwnershipSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        py: 10,
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Text Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ color: '#FFB703', mb: 2 }}>
              About HedgeProp
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
              Minor Ownership, Major Impact
            </Typography>
            <Typography variant="body1" sx={{ color: '#A0A0A0', fontSize: '1.2rem', mb: 4 }}>
              HedgeProp is backed by the expertise of SriRam Savitri Builders and Logistics Pvt. We
              provide a secure investment platform in premium properties, backed by renowned tenants
              like Kirloskar, Zomato, and Samsung. With HedgeProp, your investments are secure.
            </Typography>
          </Grid>

          {/* Right Side - Image and Call to Action */}
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            {/* Image */}
            <Box
              component="img"
              src="/about.png" // Ensure the image is placed in the public folder as 'about.png'
              alt="Meeting Image"
              sx={{
                width: '100%',
                borderRadius: '16px',
                mb: 4,
              }}
            />
            {/* Call to Action Cards */}
            <Box
              sx={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              {/* Login/Signup */}
              <Paper
                elevation={4}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px 20px',
                  backgroundColor: '#2F2F2F',
                  color: '#FFB703',
                  mb: 2,
                  borderRadius: '10px',
                }}
              >
                <LoginIcon sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Login/Signup
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#A0A0A0' }}>
                    Ready to start? Log in or create an account!
                  </Typography>
                </Box>
              </Paper>

              {/* Talk to Experts */}
              <Paper
                elevation={4}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px 20px',
                  backgroundColor: '#2F2F2F',
                  color: '#FFB703',
                  borderRadius: '10px',
                }}
              >
                <CallIcon sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Talk To Experts
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#A0A0A0' }}>
                    Got questions? Let our experts ‘build’ your confidence!
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OwnershipSection;
