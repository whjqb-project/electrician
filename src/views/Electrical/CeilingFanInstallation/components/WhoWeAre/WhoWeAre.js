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
              Ceiling Fan Installation Service
            </Typography>
            <br />

            <Divider />
            <br />
            <Typography component={'p'}>
              When choosing your ceiling fan, our licensed ceiling fan installers recommend choosing a wooden blade fan over metal blades.
              This is because timber blades produce less noise when operating.
              If the room you’ve chosen for your ceiling fan installation is a bigger space in comparison to other rooms in your home,
              we suggest choosing a larger blade diameter, as the larger the blades, the larger the space it will cover when circulating air.
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
              Ceiling Fan Installation Experts
            </Typography>
            <br />
            <Divider />
            <br />
            <Typography component={'p'}>
              Need a ceiling fan installation? Call our professional and licensed ceiling fan installers today and we can provide you with quality advice,
              a site survey and a comprehensive quote for your ceiling fan installation.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
