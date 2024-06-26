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
          <Typography fontWeight={700} variant={'h4'} gutterBottom align='center'>
            LED Downlight Installation in Auckland
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginY: 4 }} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              The cost of LED downlights is a little higher than regular halogen lighting, however, they have a much longer lifespan and are less expensive to run.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              The benefits to your energy bill in the long term far outweigh the initial downlight installation cost.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Your local Auckland electrician can install an integrated colour switch allowing warm, cool or daylight settings at a push of a button.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              We can provide expert LED installation to help add more light or change the mood of a space and these are a popular option for residential homes, depending on your type of ceiling.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Our electricians can provide LED downlight installation by drilling holes within your ceiling to install LED lighting and the wiring is then fed through and connected to a wall switch.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Mandarin Brothers Electrical can also replace overhead lighting or halogen lights with LED lighting installation to improve their energy efficiency.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              LED lighting that is effective against wet weather conditions, are the perfect way to illuminate your decking area to create a glowing atmosphere or to place underneath each step to provide a stunning illuminated pathway.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={images.ledDownlight.main}
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
