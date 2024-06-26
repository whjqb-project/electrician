import React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  Main as MainSection,
  PricingCompareTable,
} from './components';

const LEDDownlight = () => {
  const theme = useTheme();

  return (
    <Main>
      <Hero />
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <MainSection />
        </Container>
      </Box>
      <Divider />
      <Container>
        <PricingCompareTable />
      </Container>
    </Main>
  );
};

export default LEDDownlight;
