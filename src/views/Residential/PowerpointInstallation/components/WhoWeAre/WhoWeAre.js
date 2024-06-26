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
              Best Powerpoint installation In Auckland
            </Typography>
            <br/>
            <Divider/>
            <br/>
            <Typography component={'p'}>
              Single, double, triple or even quad configurations are readily available, some powerpoint installations are provided with USB outlets for charging digital devices,
              some with a supplementary switch to control a light or fan or some may even have a pilot light to show when the powerpoint is on and live.
            </Typography>
            <br />
            <Typography component={'p'}>
              As expert powerpoint installers in Auckland, we will usually provide a double outlet as part of your powerpoint installation for your convenience,
              however, we can install triple or quad powerpoints, which can be completed promptly and easily.
              The cost of additional powerpoints may increase per additional powerpoint installed.
              See below for information on powerpoint installation cost.
            </Typography>
            <br />
            <Typography component={'p'}>
              In need of a powerpoint installation Perth for your outdoor living areas? Our team of licensed local electricians can provide water-resistant powerpoint installations to enhance your outdoor lifestyle.
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
              Powerpoint installation Service In Auckland
            </Typography>
            <br/>
            <Divider/>
            <br/>
            <Typography component={'p'}>
              Our powerpoint installers Perth can assist you in deciding the best and safest powerpoint installation option for your home either during construction,
              renovation or just for added convenience in your pre-existing home. Some advice our expert local electricians can provide you with on your powerpoint installation include:
            </Typography>
            <Grid container spacing={1} sx={{ marginTop: 1 }}>
              {[
                'We can recommend the best powerpoint installation style and finish according to your plans',
                'Ensure your electrical safety is guaranteed by checking the potential electrical load that might be applied to the circuit',
                'Check your switchboard to make sure that suitable circuit breaker or safety switched are installed',
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
              Mandarin Brothers Electrical can provide you with an affordable powerpoint installation cost for your home without compromising on quality and safety.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
