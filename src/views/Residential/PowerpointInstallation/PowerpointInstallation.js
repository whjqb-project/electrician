import React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  WhoWeAre,
  PricingCompareTable,
} from './components';

const PowerpointInstallation = () => {
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
    </Main>
  );
};

export default PowerpointInstallation;
