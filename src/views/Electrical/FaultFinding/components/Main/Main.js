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
            Mandarin Brothers Electrical is your trusted electrical fault finding professionals!
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginY: 4 }} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Our electrical fault finding experts are able to locate the problem, diagnose issues and repair electrical faults promptly.

              Have a short circuit or damaged plug sockets? We are your go-to electrical fault finding electricians.

              Our electrical fault finding electricians can efficiently assist with many electrical concerns, including:
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              Short circuit electrical fault finding:
            </Typography>
            <Typography component={'p'}>
              Short circuits occur when a live cable becomes exposed and makes contact with the green and yellow cables, which is called the earthing system.
              The deterioration of the cable’s insulation or water seeping into light fittings and outdoor powerpoints are all reasons for short-circuiting.
            </Typography>
          </Box>
          <Box>
            <Typography variant={'h5'} fontWeight={700} gutterBottom>
              Open circuit electrical fault finding:
            </Typography>
            <Typography component={'p'}>
              The circuit experiences a tear caused by a broken wire, burning or rusting.
              The flow of electricity is then interrupted which causes an open circuit fault.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={'https://ajbelectrical.com/wp-content/uploads/2021/04/Electrical-Fault-Finding.jpg'}
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
