'use client'
import { Box, Slider, Typography, Input } from '@mui/material';
import { useState } from 'react';

const InvestmentCalculator = () => {
  const [investment, setInvestment] = useState(1000000);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setInvestment(newValue as number);
  };

  return (
    <Box sx={{ padding: '40px 0', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Calculate Your Wealth
      </Typography>
      <Slider
        value={investment}
        min={250000}
        max={10000000}
        step={50000}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        sx={{ marginBottom: '20px' }}
      />
      <Input
        value={investment}
        onChange={(e) => setInvestment(Number(e.target.value))}
        inputProps={{ min: 250000, max: 10000000, type: 'number' }}
        sx={{ marginBottom: '20px', width: '200px' }}
      />
      <Typography variant="body1">
        Estimated Returns: ₹{(investment * 1.095).toFixed(2)}
      </Typography>
    </Box>
  );
};

export default InvestmentCalculator;
