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
              Layout Planning In Auckland
            </Typography>
            <br />

            <Divider />
            <br />
            <Typography component={'p'}>
              Mandarin Brothers Electrical Services is experienced in both residential and commercial sectors and therefore are able to offer expert advice on new home electrical layouts when it comes to the compliance of specific installations.
            </Typography>
            <br />
            <Typography component={'p'}>
              Mandarin Brothers Electrical Services provides leading new home electrical layouts Perth and electrical layout planning Perth for commercial properties such as retail, educational, health and aged care.
            </Typography>
            <br />
            <Typography component={'p'}>
              Enquire with our experienced electrical design team today!
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
              Electrical Layout Planning Experts
            </Typography>
            <br />
            <Divider />

            <br />
            <Typography component={'p'}>
              Our team ensures any electrical design can be built according to relevant standards and guidelines, to avoid any costly surprises down the track.
            </Typography>
            <br />
            <Typography component={'p'}>
              Working closely with our managing director and licensed Local electrician team, our electrical design team remain on hand throughout the construction phase to answer any questions or clarify aspects of the design and electrical layout.
            </Typography>
            <br />
            <Typography component={'p'}>
              The result is a seamless construction period where the intent behind the design remains the key focus.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
