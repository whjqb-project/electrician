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
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box marginBottom={4} alignItems="center" justifyContent="center" display="flex" >
          <Typography fontWeight={700} variant={'h4'} gutterBottom align='center'>
            Warehouse & Industrial Lighting Experts in Auckland
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginY: 4 }} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Mandarin Brothers Electrical is a team of highly qualified and experienced industrial electrical contractors that can provide LED warehouse and industrial lighting installation for businesses and commercial properties.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Our professional Industrial Electricians, can provide you with installation, repairs and upgrades to your LED warehouse lighting.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Our industrial electrical contractors have the knowledge and expertise to provide you with quality advice on your warehouse lighting needs and building requirements.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Your local warehouse electricians can also provide thorough inspections to find any potential issues that may arise in the future.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              You may be thinking, “my regular warehouse lighting is good enough.” However, poor lighting can actually affect workers productivity and increase the risk of accidents.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              It is vital to have sufficient lighting within a warehouse or industrial space to maintain the safety of your workers.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={images.warehouseLighting.main}
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
