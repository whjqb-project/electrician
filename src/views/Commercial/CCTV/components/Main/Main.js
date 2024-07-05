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
            Garden Lighting Service In Auckland
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginY: 4 }} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Garden lighting is an effective tool to accentuate your garden features, illuminate a safe passage to walk along and even offer extra security for you and your family by eliminating dark corners for unwanted guests.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              There are many options available to illuminate your yard; spot lighting near walkways and fountains as well as around your deck, pool or verandah.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              With our garden lighting installation Perth service, you can illuminate a beautifully featured tree, highlight a garden sculpture, or showcase a water feature. Some options for garden lighting installations that are available include:
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Spike lights:
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Featured at the bottom of trees, spikes provide the perfect illumination to highlight its features. As the name suggests, they are spiked into the soil, and accentuate the height and foliage of your trees by providing a shadowy backdrop to your landscape.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              LED strip lighting:
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
            src={images.gardenLighting.main}
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
