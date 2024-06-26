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
          Do You Need an Exhaust Fan in Your Home?
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginY: 4 }} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              If you are a Auckland homeowner, you probably need an exhaust fan installation. Why?
              Because exhaust fans are key in controlling moisture and odours in your home.
              They help keep the air clean.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Whether it is a bathroom exhaust fan installation to stop mould or a kitchen range hood installation to manage cooking fumes, a good exhaust system is important.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              In Auckland, keeping your home fresh and healthy is important. That is where Mandarin Brothers Electrical comes in.
              We are experts in exhaust fan installation.

            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Our team knows how to install different types of exhaust fans, from bathroom exhaust fans to kitchen range hoods. This means your home stays fresh, dry, and healthy.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={images.exhaustFan.main}
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
