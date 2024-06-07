import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import images from '../../../../image';

const Main = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box
        // display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box marginBottom={4} alignItems="center" justifyContent="center" display="flex" >
          <Typography fontWeight={700} variant={'h4'} gutterBottom>
            Your Expert EV Charger Installer in Auckland
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginY: 4 }} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Box marginBottom={4} marginTop={3}>
            <Typography component={'p'}>
              Save your money, time and the environment by making the switch to an Electric vehicle and choosing Mandarin Brothers Electricians for your install.
              We are experienced in installing a range of EV Chargers and encourage clients to take a step towards a greener future.
            </Typography>
          </Box>
          <Box marginBottom={4}>
            <Typography component={'p'}>
              We are fully licensed and experienced in EV Charger Installations and will ensure full compliance for your vehicles Warranty.
            </Typography>
          </Box>
          <Box marginBottom={4}>
            <Typography component={'p'}>
              When installing an Electric Vehicle Charger in your home it is important to consider whether your Switchboard is able to support an EV Charger.
              Mandarin Brothers Electricians will run a health check on your current switchboard and upgrade it to ensure a safe power supply for your EV Charger.
              We can also install the required Power Points to support your Electric Vehicle charger safely and efficiently to get your motor running in no time!
            </Typography>
          </Box>
          <Box>
            <Typography component={'p'}>
            There is nowhere more convenient to charge your Electric Vehicle than your own home. 
            Mandarin Brothers Electrical can install your Electric Vehicle Charger efficiently to ensure you are powered up each morning and save the hassle of finding a Charging Station. 
            With electric vehicles growing in popularity, we at Brillare can install a range of Electric Vehicle Chargers and upgrade your home’s power to ensure you are EV ready!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={images.evCharger.main}
            alt="..."
            effect="blur"
            boxShadow={3}
            borderRadius={2}
            maxWidth={600}
            sx={{
              filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
