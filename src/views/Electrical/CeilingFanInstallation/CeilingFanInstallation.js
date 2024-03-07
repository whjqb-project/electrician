import React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  Main as MainSection,
  WhoWeAre,
  PricingCompareTable,
} from './components';

const CeilingFanInstallation = () => {
  const theme = useTheme();

  return (
    <Main>
      <Hero />
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <WhoWeAre />
        </Container>
      </Box>
      <Divider />
      <Container>
        <PricingCompareTable />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <MainSection />
        </Container>
      </Box>
    </Main>
  );
};

export default CeilingFanInstallation;
