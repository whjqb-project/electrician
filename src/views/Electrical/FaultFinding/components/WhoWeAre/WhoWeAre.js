/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

const WhoWeAre = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid
          item
          container
          // alignItems={'center'}
          justifyContent="center"
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Electrical Fault Finding Service
            </Typography>
            <br />
            <Divider />
            <br />
            <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 500 }}>
              Earth electrical fault finding:
            </Typography>
            <Typography component={'p'}>
              Loose or damaged connections in appliances can result in an earth fault.
              This can cause electric shocks when touched.
            </Typography>
            <br />
            <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 500 }}>
              Defective safety switch fault-finding:
            </Typography>
            <Typography component={'p'}>
              Safety switches can fail due to age or electrical surges from the mainline.
              These faults should be tested at least every 6 months for correct operation.
            </Typography>
            <br />
            <Typography component={'p'}>
              Some appliances have been used for years and have reached their life span and no longer operate.
              Mowing through cable or spilling liquids over a device can also cause electrical faults.
              Our team can provide local electrical fault finding for all of these issues.
            </Typography>
            <br />
            <Typography component={'p'}>
              Mandarin Brothers electrical fault finding electricians will openly communicate any issues and the repairs needed and provide you with a comprehensive and affordable quote.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          // alignItems="center"
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Electrical Fault Finding Specialist
            </Typography>
            <br />
            <Divider />
            <br />
            <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 500 }}>
              How do you know if you need an electrical fault finding electrician?
            </Typography>
            <Typography component={'p'}>
              Here are some common issues that may require an electrical fault finding expert:
            </Typography>
            <Grid container spacing={1} sx={{ marginTop: 1 }}>
              {[
                'Your lights are flickering',
                'Your power outlet is very hot',
                'Sparks appear when you plug or unplug your electrical devices',
                'You smell burning plastic from your appliances (this suggests burning wires)',
                'You experience a power outage when plugging in your devices',
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
            <br />
            <Typography component={'p'}>
              Leave electrical fault finding to the professionals! Don’t attempt to fix faulty electrical equipment yourself.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
