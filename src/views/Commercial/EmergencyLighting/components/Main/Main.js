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
            Emergency & Exit Lighting in Auckland
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginY: 4 }} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Mandarin Brothers Electrical Services offer emergency lighting installation as well as repairs and maintenance for businesses.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              It is vital for businesses to have a clear understanding of the rules around emergency and exit lighting and be fully aware that fines can be imposed on business owners who do not comply with specific regulations.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Emergency and exit lighting must be trialled and tested every 6 months to ensure its efficient use.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Not only will you comply with these standards but you will have peace of mind knowing that in the event of a power outtage, you will have sufficient lighting leading you and your employees safely out of the building.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={images.emergencyLighting.main}
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
