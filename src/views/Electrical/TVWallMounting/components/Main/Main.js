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
        // display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box display={'flex'} justifyContent={'center'} align='cetner'>
          <Typography fontWeight={700} variant={'h4'} gutterBottom align='center'>
            Residential And Commercial TV Wall Mounting
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginY: 4 }} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Mounting TV to wall can be very difficult for someone who is not a licensed professional, that is why it is vital to contact a team like Mandarin Brothers Electrical to complete TV wall mounting because you may do more harm than good to your walls.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Mandarin Brothers Electrical provides a TV wall mounting service for residential and commercial spaces.
              Our process involves wall mounting the TV onto a sturdy frame and anchoring this onto the wall using wall studs.

            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              We ensure to install the mounting frame in the right position so that it is completely levelled.
              There is a range of wires and cables required for a TV installation, including; HDMI cables, audio cables, power cords and set-top box TV wiring.

            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Our expert electricians will ensure that they keep all of these cables neatly hidden away when TV wall mounting.
              Wall mounting TV hiding wires is a simple process for our team, so the end result will look perfect in your space.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={'https://lumiproduct.oss-cn-hongkong.aliyuncs.com/2022/08/12/62f63415327ffa0002ab7b48.jpg?x-oss-process=image/resize,m_lfit,h_500,w_500'}
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
