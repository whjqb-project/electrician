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
            Electrical Layout Planning Experts in Auckland
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginY: 4 }} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              From concept to construction to completion, customers can expect our electrical layout planning team to listen and offer smart product choices.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Having over a decade of practical experience in the construction industry including project management and cost planning,
              allows us to create an electrical layout design Perth that is functional and offers value for money.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Our team of electrical layout planners start the process by listening to the client to understand the purpose of the installation and any specific requirements.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              This allows us to best meet the design brief. Through collaboration and consultation, an electrical design is developed that is comprehensive, functional and within budget.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Our team of expert electrical designers assist customers to reduce their carbon footprint and the cost of electrical services by guiding clients in the selection of sustainable products and offering consultation for automation systems and tailored LED lighting solutions.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              We assist individuals and businesses in planning an electrical design layout that meets green star ratings and we offer a comprehensive service including Return of Investment auditing and reporting.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Our team can provide the capability to operate remote-controllable devices, built-in wireless technology and the latest in entertaining hardware for new home electrical layouts.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={images.electricalLayoutPlanning.main}
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
