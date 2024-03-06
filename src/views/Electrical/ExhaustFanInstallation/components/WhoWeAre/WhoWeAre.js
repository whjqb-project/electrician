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
              Different Exhaust Fans for Your Home
            </Typography>
            <Divider />
            <br />
            <Box marginBottom={3}>
              <Typography fontWeight={500} variant={'h5'}>
                Bathroom Exhaust Fans
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography component={'p'}>
                A bathroom exhaust fan installation is essential in maintaining a moisture-free and odourless bathroom.
                Our expert team at Mandarin Brothers Electrical ensures that your bathroom exhaust fan is installed with precision, enhancing air quality and preventing mould growth.
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography fontWeight={500} variant={'h5'}>
                Kitchen Range Hoods
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography component={'p'}>
                Kitchen range hoods are pivotal in maintaining a clean and smoke-free cooking environment.
                Our kitchen range hood installation services guarantee an efficient removal of cooking odours and smoke, making your kitchen a pleasant space for culinary activities.
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography fontWeight={500} variant={'h5'}>
                Ceiling Mounted Exhaust Fans
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography component={'p'}>
                Opt for a ceiling exhaust fan installation to effectively manage air quality in various rooms of your home.
                Our ceiling-mounted exhaust fans are designed to blend seamlessly with your home decor while providing optimal air circulation.
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography fontWeight={500} variant={'h5'}>
                Wall Mounted Exhaust Fans
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography component={'p'}>
                Wall mount exhaust fan installation is an excellent choice for targeted ventilation.
                These fans are ideal for spaces where ceiling-mounted options are not feasible, providing efficient air extraction and circulation.
              </Typography>
            </Box>

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
              Exhaust Fans for All Types of Homes in Auckland
            </Typography>
            <Divider />
            <br />
            <Typography component={'p'}>
              Our exhaust fan systems work for many types of homes:
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
            <br/>
            <Typography component={'p'}>
              These systems ensure a comfortable environment in any home.
            </Typography>
            <br/>
            <Typography component={'p'}>
            At Mandarin Brothers Electrical, we offer a range of services. Besides exhaust fan installations, 
            we handle ceiling fan installations, emergency electrical services, and electrical fault finding. We're equipped to take care of all your electrical needs.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
