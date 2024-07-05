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
              Garden Lighting Experts Auckland
            </Typography>
            <br />

            <Divider />
            <br />
            <Typography component={'p'}>
              Are bolted into concrete and ideally used to brighten driveways or pathways.
            </Typography>
            <br />
            <Typography component={'p'}>
              The illumination spreads downward so spacing out your bollard garden lighting will provide a distinct look.
            </Typography>
            <br />
            <Typography component={'p'}>
              Having a professional electrician design your outdoor lighting installation can assist you in creating your desired aesthetic for your garden.
            </Typography>
            <br />
            <Typography component={'p'}>
              Mandarin Brothers Electrical Services can professionally install lighting fixtures that provide a certain ambiance to your garden for an affordable garden lighting installation cost.
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
              Garden Lighting Services
            </Typography>
            <br />
            <Divider />
            <br />
            <Typography component={'p'}>
              Some factors affecting garden lighting installation costs are:Your gardens soil conditions, the tougher the soil the harder it is to install lighting fixtures;The overall size of your property;The quality of the lighting fixtures you wish to have installed
            </Typography>
            <br />
            <Typography component={'p'}>
              Using outdoor LED lighting is an effective way to cut costs on your energy bill. In fact, LED lighting will reduce your energy usage by 50% in comparison to using incandescent lights.
            </Typography>
            <br />
            <Typography component={'p'}>
              Looking for a professional, honest and reliable Perth electrician that can install garden lighting for an affordable lighting installation cost? Look no further than Mandarin Brothers Electrical Services!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
