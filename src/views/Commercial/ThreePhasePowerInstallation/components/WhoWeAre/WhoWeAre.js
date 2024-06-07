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
              Three Phase Power Installation Service in Auckland
            </Typography>
            <br />

            <Divider />
            <br />
            <Typography component={'p'}>
              Depending on the size of your home, it is recommended to have a few smoke alarm installations so it is easier for everyone to be alerted in case of a fire.
            </Typography>
            <br />
            <Typography component={'p'}>
              It’s vital to contact a professional electrician to have your smoke alarm system tested regularly to ensure its efficient operation.
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
              Smoke Alarm Installation Service Provider 
            </Typography>
            <br />
            <Divider />
            <br />
            <Typography component={'p'}>
              Mandarin Brothers electrical services are your local smoke alarm installers for residential and commercial properties.
              Our smoke detectors and smoke alarms are recommended by the Department of Fire and Emergency Services,
              so you can have peace of mind knowing our smoke alarms and smoke alarm installations are of the highest quality.
            </Typography>
            <br />
            <Typography component={'p'}>
              Our team of professional smoke alarm installers offer a comprehensive smoke alarm installation service,
              encompassing everything from the consultation and property survey through to the installation complying with AS3786:2014.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
