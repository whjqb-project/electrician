/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

const WhoWeAre = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box alignItems="center" justifyContent="center" display="flex" marginBottom={3}>
        <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
          Knowledgeable & Strictly Compliant to New Zealand Standards
        </Typography>
      </Box>
      <Divider />
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
            <br />
            <Typography component={'p'}>
              Mandarin Brothers Electrical Services can provide functional and stylish shop light installations and office light installations,
              depending on your style and theme, as well as shop lighting automation and office light automation.
            </Typography>
            <br />
            <Typography component={'p'}>
              Smart lighting and automation are key for your office or retail space as you can change multiple settings at a touch of a button.
              We can install a Wi-Fi controlled automation system that allows you to control LED lights, security cameras and other electrical devices.
            </Typography>
            <br />
            <Typography component={'p'}>
              Our team of shop and office fitout experts can provide installation,
              repairs and testing of emergency lighting and exit lighting to ensure the safety of staff and customers and to comply with New Zealand standards.
              It may also be ideal for your commercial space to have energy-efficient lighting installed to save on your businesses electricity bills.
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
            <br />
            <Typography component={'p'}>
              Our team can help with data installation, metering separation and switchboard upgrades to get your business started.
              As well as installation, we have the ability to provide testing and tagging of your appliances to ensure it is up to code and working correctly.
            </Typography>
            <br />
            <Typography component={'p'}>
              Our local electricians can provide you with logbooks and reminders for re-testing your appliances so you have a clear understanding of when you should call your local electrician Perth again.
            </Typography>
            <br />
            <Typography component={'p'}>
              Mandarin Brothers Electrical Services offers reliable, efficient and prompt shop and office lighting fitouts Western Australia for your commercial space!
              Do not hesitate to call our professional and licenced electrical team to ensure the functionality, safety and style of your business.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
