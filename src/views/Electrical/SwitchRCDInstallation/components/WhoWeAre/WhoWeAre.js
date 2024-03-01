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
            Mandarin Brothers Electrical Switch & RCD Installation Service
            </Typography>
            <br />
            <Divider />
            <br />
            <Typography component={'p'}>
              Our team of RCD safety switch installers can provide installation as well as RCD switch testing to ensure that your RCD safety switches are performing correctly by providing constant protection.
            </Typography>
            <br />
            <Typography component={'p'}>
              It is important to have your power switches tested every 3-13 months by a licensed electrician to prevent future electrical damages and risks of potential fires.
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
              Switch & RCD Installation Service Provider
            </Typography>
            <br />
            <Divider />
            <br />
            <Typography component={'p'}>
              Mandarin Brothers Electrical Services will first plan out the components involved in the RCD safety switch installation,
              investigate how the power switches will be used, where they will be located and how they will be inspected.
            </Typography>
            <br />
            <Typography component={'p'}>
              Our local electricians will ensure they provide the correct RCD safety switch installation depending on your needs,
              such as RCD combos or powerpoint RCD switches. Our electrical switch installers will monitor the process from beginning to end and test the installation to ensure the safety switch is performing safely.
            </Typography>
            <br />
            <Typography component={'p'}>
              In need of RCD installation? Brillare Electrical Services has you covered! Enquire about RCD power switches from our expert team today.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
