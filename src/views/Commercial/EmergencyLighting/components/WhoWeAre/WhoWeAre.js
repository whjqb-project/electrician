/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

const WhoWeAre = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid
          item
          container
          // alignItems={'center'}
          justifyContent="center"
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Best Emergency & Exit Lighting
            </Typography>
            <br />

            <Divider />
            <br />
            <Typography component={'p'}>
              It is vital that you speak to your local Auckland electrician to find out more information about exit lighting installation for your particular business before you risk the safety of yourself and your employees.
            </Typography>
            <br />
            <Typography component={'p'}>
              Our expert electricians will provide assistance on recommending the best position for your exit lighting installation on your site, followed by thorough testing to ensure it is operating efficiently. 
            </Typography>
            <br />
            <Typography component={'p'}>
              We aim to provide a prompt and efficient emergency lighting installation due to the time sensitive nature of the job
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          // alignItems="center"
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Emergency & Exit Lighting Solutions
            </Typography>
            <br />
            <Divider />
            <br />
            <Typography component={'p'}>
              Mandarin Brothers electricians will supply you with a certificate of compliance for the exit light and emergency light installation. 
            </Typography>
            <br />
            <Typography component={'p'}>
              It is up to the business owner to keep up to date with schedule dates to test your equipment in order to pass the compliance standards.
            </Typography>
            <br />
            <Typography component={'p'}>
              If you’re using a new building for your business operations and it does not have exit or emergency lighting, do not hesitate and call your local Auckland electrician today for your installation.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
