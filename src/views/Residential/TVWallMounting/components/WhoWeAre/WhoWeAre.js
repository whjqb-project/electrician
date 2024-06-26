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
            <Box marginBottom={4} alignItems="center" justifyContent="center" display="flex" >
              <Typography fontWeight={700} variant={'h4'} gutterBottom>
                TV wall mounting service
              </Typography>
            </Box>
            <Divider />
            <br />
            <Typography component={'p'}>
              Our team can provide advice on the most optimum placement and the best bracket to suits the needs of your room when mounting TV to wall.
            </Typography>
            <br />
            <Typography component={'p'}>
              We will provide you peace of mind knowing that the bracket and TV are secure and safe.
            </Typography>
            <br />
            <Typography component={'p'}>
              Our local Auckland electricians can also mount your TV speakers to provide the best sound quality for your TV wall mounting.
            </Typography>
            <br />
            <Typography component={'p'}>
              Whether you need a TV wall mounted to a brick wall or a whole home theatre set-up, our team of licensed electricians can assist you with your TV wall mounting service.
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
            <Box marginBottom={4} alignItems="center" justifyContent="center" display="flex" >
              <Typography fontWeight={700} variant={'h4'} gutterBottom>
                Best TV wall mounting
              </Typography>
            </Box>
            <Divider />
            <br />
            <Typography component={'p'}>
              Some popular TV wall mounting brackets that our team can install include:
            </Typography>
            <br/>
            <Grid container spacing={1} sx={{ marginTop: 1 }}>
              {[
                'Standard TV wall mounting bracket: a simple and cost-effective option for mounting TV to wall',
                'Adjustable TV wall mounting bracket: ideal for smaller TVs to view from every angle',
                'Swivel TV wall mounting bracket: ideal for larger TVs, very durable and can view from every angle',
                'Tilt TV wall mounting bracket: very heavy duty with the ability to tilt the TV up or down',
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
              Need a TV wall mounting service? Mandarin Brothers Electrical Services can have your TV up in no time, without the messy wires!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
