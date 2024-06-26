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
          <Typography fontWeight={700} variant={'h4'}>
            Outdoor Security Lighting Specialist
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginY: 4 }} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Outdoor security lighting Perth can protect your home as well as illuminate it’s best features.
              Security lighting installation is the most effective option to ward off criminals as properties that are well-lit have reduced crime rates because it increases the risk of intruders being spotted by neighbours.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Mandarin Brothers Electrical Services are your go-to security lighting installers!
              Our friendly electricians can install automatic security lighting to provide you with safety and awareness of any unusual activity occurring on your property.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Automatic security lighting around your home can brighten shadowed areas which deters intruders from your property and provides extra security for you and your family.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Our expert security lighting installers can assist you in choosing the most effective areas to install your security lighting to enhance your home and families protection.
              Without the correct placement, this limits visibility and causes glare, and as a result, reduces your security.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Outdoor sensor light installation can provide peace of mind as the lighting fixtures can brighten your home throughout the night and the motion sensor detection is particularly useful in alerting your home if there is an intruder nearby.
              Speak to our expert Perth electricians to find the best security sensor lighting to install.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={images.outdoorLighting.main}
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
