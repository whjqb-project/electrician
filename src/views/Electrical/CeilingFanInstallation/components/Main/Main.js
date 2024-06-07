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
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box display={'flex'}>
          <Typography fontWeight={700} variant={'h4'} gutterBottom align='center'>
            Mandarin Brothers Electrical is your trusted ceiling fan installation professionals!
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginY: 4 }} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              At Mandarin Brothers Electrical Services, we understand how important it is to have a ceiling fan installation,
              so you can experience peak comfort, all year round. As licenced ceiling fan installers,
              we offer a comprehensive style and range of affordable ceiling fan installation services.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Ceiling fan installation must be undertaken by a professional, like Mandarin Brothers Electrical Services.
              We are licensed ceiling fan installers who can safely install your ceiling fan as well provide you with an array of options to choose from for your residential or commercial property.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Factors influencing ceiling fan installation cost include the fan size, style, in-built lighting features, motors and ease of installation.
              Our professional Ceiling fan installers will provide you with accurate and affordable quotes for all ceiling fan installation services, offering you peace of mind that every job is completed by a licensed and expert electrician
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Ceiling fan installations are the perfect way to cut costs to your electricity bill during the warmer months, without having to rely on costly air conditioning.
              Did you know that ceiling fan installation costs 3 cents per hour to run? This is the equivalent of leaving a 60 Watt globe on for an hour!
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Ceiling fans can improve the airflow within a room and in style too!
              Our professional team of ceiling fan installers can supply dozens of modern styles that will boost the aesthetic of your bedroom, dining area or outdoor entertaining area.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={images.ceilingFan.main}
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
