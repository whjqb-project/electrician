import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
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
            Mandarin Brothers Electrical is your trusted switchboard upgrade professionals!
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginY: 4 }} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Your switchboard is your main electrical distributor at home and the key to your electrical safety.
              In order to maintain your switchboard, it’s best you purposely trip or reset each circuit breaker regularly to ensure the safety device is working correctly before you call our team for a switchboard upgrade.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              If you experience unexplained circuit tripping of your safety devices or intermittent faults,
              our switchboard electricians can provide a detailed inspection to investigate whether a switchboard upgrade and switchboard installation are needed,
              as well as an itemised report of the health status of your switchboard.
            </Typography>
          </Box>
          <Box>
            <Typography component={'p'}>
              During a switchboard upgrade inspection, Mandarin Brothers switchboard electricians will investigate:
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Grid container spacing={1} sx={{ marginTop: 1 }}>
              {[
                'Condition of all connections to fuses/circuit breakers and safety switches within your meter box.',
                'Function of the circuit breakers and safety switches fitted to ensure the required level of protection is enabled.',
                'Condition of the power entry connections from the street or solar system.',
              ].map((item, i) => (
                <Grid item xs={12} key={i}>
                  <Box
                    component={ListItem}
                    disableGutters
                    width={'auto'}
                    padding={0}
                  >
                    <Box
                      component={ListItemAvatar}
                      minWidth={'auto !important'}
                      marginRight={2}
                    >
                      <Box
                        component={Avatar}
                        bgcolor={theme.palette.secondary.main}
                        width={20}
                        height={20}
                      >
                        <svg
                          width={12}
                          height={12}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Box>
                    </Box>
                    <ListItemText primary={item} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Switchboard installations are carefully evaluated and professionally installed to ensure no further malfunctions occur in future.
              We provide a hassle-free approach when it comes to switchboard installations.
              Your switchboard installation costs will be affordable and value for money as our expert electricians understand the issues that it can cause to the whole household or business.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Old wiring or faulty wiring can become a serious issue and you may need partial or full rewiring at your home or business, completed by a professional switchboard electrician.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={images.switchboard.main}
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
