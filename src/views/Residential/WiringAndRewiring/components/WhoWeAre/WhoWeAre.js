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
              Electrical Wiring and Rewiring Service
            </Typography>
            <br />
            <Divider />
            <br />
            <Typography component={'p'}>
              Home rewiring costs are dependent on the level of electrical wiring or electrical rewiring needed for your home or business.
              We provide budget-friendly home rewiring costs for our services.
            </Typography>
            <br />
            <Typography component={'p'}>
              It is important not to postpone your rewiring service as electrical wiring can deteriorate and cause potential fire hazards and electrical risks.
              Our team of rewiring electricians put safety at the forefront of our services so you have peace of mind employing our expert electricians.
            </Typography>
            <br />
            <Typography component={'p'}>
              As your local home rewiring electricians, we can wire a brand new building or provide professional assistance in rewiring an old house.
              You can rely on our prompt and efficient electrical wiring electricians to achieve your desired outcome when it comes to home rewiring.
            </Typography>
            <br />
            <Typography component={'p'}>
              Enquire with Mandarin Brothers Electrical Services today for electrical wiring and rewiring!
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
              Electrical Wiring and Rewiring Auckland
            </Typography>
            <br />
            <Divider />
            <br />
            <Typography component={'p'}>
              If you have an older home, our rewiring electricians may need to examine the following issues:
            </Typography>
            <Grid container spacing={1} sx={{ marginTop: 1 }}>
              {[
                'Excessive load on a single circuit – This can cause fuses to burn out and breakers to trip. Brillare can provide an electrical home rewiring electrician to add a circuit to split the load throughout the house.',
                'Main switchboard and earthing system are not up to current regulations – It is crucial to employ a rewiring electrician to keep this up to current Australian Standard regulations.',
                'DIY wiring from yourself or a previous homeowner – This is dangerous and could pose serious threats to your home. Electrical rewiring from a qualified home rewiring electrician is crucial to correct the damage made.',
                'Older electrical line materials and construction –  Outdated cabling can cause fires and electrical hazards. Find an electrical wiring electrician near me to have this changed immediately. ',
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
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
