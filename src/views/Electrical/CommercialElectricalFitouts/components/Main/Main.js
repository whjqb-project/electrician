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
        <Box alignItems="center" justifyContent="center" display="flex">
          <Typography fontWeight={700} variant={'h4'} gutterBottom align='center'>
            What’s involved in shop and office lighting fitouts?
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginY: 4 }} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              When we provide a shop and office lighting fitout Perth, we start with a site establishment, taking the time to learn your site layout,
              to ensure the highest quality of safety and electrical work.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Mandarin Brothers Electrical Services has developed a turnkey solution for shop and office lighting fitouts.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              This system, alongside trained and local Auckland electricians to implement it, ensures the delivery of productive,
              professional and quality-driven shop and office fitout projects in a timely and cost-efficient manner.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Our team of shop and office lighting fitout experts implement the latest technology to enable us to deliver projects promptly and to streamline the process for a competitive edge.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Our team can provide expert advice from particular shop light installations and office lighting installations to shop lighting automation and office light automation to suit all your requirements.
              Above all, we ensure your site is cleaned daily and left in a tidy manner.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={'https://tkecs.co.uk/wp-content/uploads/2024/01/326242201_180479381268203_674424118897670271_n-1.jpg'}
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
