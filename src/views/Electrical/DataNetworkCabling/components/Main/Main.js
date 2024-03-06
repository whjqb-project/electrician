import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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
            Versatile Applications of Data Cabling Services
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginY: 4 }} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Box marginBottom={3}>
            <Typography fontWeight={500} variant={'h5'}>
              Seamless WiFi Connections
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Need solid WiFi? Mandarin Brothers Electrical got your back. We specialise in internet cabling, perfect for homes and offices.
              Our home internet cabling services are designed to deliver a stable and powerful internet connection, crucial for all your online needs.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography fontWeight={500} variant={'h5'}>
              Uninterrupted Media Streaming
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Experience smooth and uninterrupted media streaming with our reliable data cabling.
              Perfect for entertainment or professional streaming, our cabling ensures that your streaming experience is free from buffering and interruptions.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography fontWeight={500} variant={'h5'}>
              Optimised Online Gaming
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              For gamers, a fast and stable connection is key. Our data cabling services provide the speed and reliability needed for seamless online gaming, making every session lag-free and more enjoyable.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography fontWeight={500} variant={'h5'}>
              Enhanced Security with Surveillance Camera Cabling
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Secure your premises with our specialised security camera cabling. Our data cabling solutions ensure that your security and surveillance cameras operate without fail, keeping your home or business safe.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography fontWeight={500} variant={'h5'}>
              Clear VoIP Communications
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              VoIP phone systems rely on clear and consistent data transmission. Our cabling services provide the reliable infrastructure needed for high-quality VoIP communication, ensuring every call is crystal clear.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={'https://www.finnleyelectrical.com.au/wp-content/uploads/2022/05/Data-cabling-for-home.jpg'}
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
