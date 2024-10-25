import { Box, Grid, Typography, Container, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const offeringsData = [
  {
    title: 'Best Asset Portfolio',
    description: 'With us, you will be investing in Grade A warehouses at prime locations throughout India. The strategic diversification is aimed at long-term capital appreciation.',
  },
  {
    title: 'Trusted / Blue-Chip Tenant Ecosystem',
    description: 'Your investment is secured by long-term leases from reputable tenants, including Fortune 500 companies like Swiggy, Zomato, Exide, and Kirloskar.',
  },
  {
    title: 'Hassle-Free Earnings',
    description: 'Earn a monthly passive income from high-quality tenants while our expert team manages your property. Enjoy regular payouts along with ongoing capital appreciation.',
  },
  {
    title: 'Unmatched Expertise',
    description: 'Our investment decisions are informed by global insights from Colliers, JLL, C&W, CBRE, Anarock, and 10+ years of expertise managing more than 500 crores of assets.',
  },
  {
    title: 'Legal Compliance',
    description: 'We ensure your interests are secured by strict adherence to all legal and financial regulations. We keep things crystal clear with you by providing regular updates.',
  },
  {
    title: 'Status At Your Fingertips',
    description: 'You can check the status of your investments anytime, anywhere through our tech-enabled platforms.',
  },
];

const OfferingsSection = () => {
  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: '#FFF',
        textAlign: 'center',
      }}
    >
      <Container>
        {/* Title */}
        <Typography variant="h6" sx={{ color: '#FFB703', mb: 2 }}>
          Offerings
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 6 }}>
          We believe in providing only the best.
        </Typography>

        {/* Offerings Grid */}
        <Grid container spacing={4}>
          {offeringsData.map((offering, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={0}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '20px',
                  backgroundColor: 'transparent',
                  border: 'none',
                }}
              >
                {/* Icon */}
                <CheckCircleIcon
                  sx={{
                    color: '#FFB703',
                    fontSize: '40px',
                    mr: 2,
                  }}
                />

                {/* Text */}
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {offering.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#5A5A5A' }}>
                    {offering.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OfferingsSection;
