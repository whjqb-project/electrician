/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';

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
              Tailored Data Cabling for Your Home
            </Typography>
            <br />

            <Divider />
            <br />
            <Typography component={'p'}>
              Got a home in Auckland? Mandarin Brothers Electrical's residential network cabling and residential data cabling are just what you need.
              We customise home data cabling and home network cabling for all types of residences.
            </Typography>
            <br />
            <Typography component={'p'}>
              Our services make sure your connectivity is fast and reliable, no matter where you live.
            </Typography>
            <br />
            <Grid container spacing={1} sx={{ marginTop: 1 }}>
              {[
                'Homes & Residences',
                'Townhouses & Terraces',
                'Residential Apartments Buildings',
                'High-Rise Apartments',
                'Low-Rise Apartments',
                'Units & Flats',
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
              Your Top Electrical Service Provider
            </Typography>
            <br />
            <Divider />
            <br />
            <Typography component={'p'}>
              Looking for top-notch data cabling in Auckland? You've found the right place with Mandarin Brothers Electrical!
              We're all about making data cabling installation and network cabling installation smooth and stress-free.
              Whether you're kitting out your new office or getting your home network up to speed, we've got the skills to make it happen.
              At Mandarin Electrical Electrical, we mix expert know-how with friendly service to give you the best network cabling Perth has to offer.
              Let us handle the wires, and you enjoy seamless connectivity!
            </Typography>
            <br />
            <Typography component={'p'}>
              In the fast-paced digital world, having dependable data cabling and network cabling is no longer a luxury, it’s a necessity.
              Mandarin Brothers Electrical understands this better than anyone. Our top-notch cabling services are the backbone for high-speed internet that keeps you connected.
              Whether at home or in the office, our network and data cabling services guarantee that your digital life runs without a hitch, every single time.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
