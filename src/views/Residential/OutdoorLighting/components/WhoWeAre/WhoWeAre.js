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
              Outdoor Security Lighting Services
            </Typography>
            <br />

            <Divider />
            <br />
            <Typography component={'p'}>
              Solar security lights can reduce your energy bills without undermining your security. 
            </Typography>
            <br />
            <Typography component={'p'}>
              As security lights typically illuminate your home all night, it may be an effective option to reduce your security lighting costs. 
            </Typography>
            <br />
            <Typography component={'p'}>
              Mandarin Brothers Electricians can assist you in finding the optimal placement for your solar security lighting installation for increased sunlight absorption.
            </Typography>
            <br />
            <Typography component={'p'}>
              Flood lights are also excellent for security purposes because of their high power and their ability to illuminate an entire area.
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
              Best Outdoor Lighting Solutions
            </Typography>
            <br />
            <Divider />
            <br />
            <Typography component={'p'}>
              Security lighting can be in the form of exterior wall lighting; 
              to brighten doorways to your home, lamp post lighting; ideally to highlight pathways and landscape lighting; 
              preferably installed around your patio and decking for full yard visibility.
            </Typography>
            <br />
            <Typography component={'p'}>
              At Mandarin Brothers Electrical Services Perth, we provide reliable and affordable security lighting installation pricing. 
            </Typography>
            <br />
            <Typography component={'p'}>
              Our professional electricians will visit your home for a site survey and provide you with a price estimate for cost of lighting and installation. 
              You will receive a comprehensive and itemised quote for our security lighting installation Auckland.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
