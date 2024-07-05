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
              Warehouse Lighting Service In Auckland
            </Typography>
            <br />

            <Divider />
            <br />
            <Typography component={'p'}>
              The benefits of having LED lighting for your warehouse is extremely beneficial when completed by a qualified industrial electrician.
            </Typography>
            <br />
            <Typography component={'p'}>
              Our customer’s businesses save greatly on their energy bills due to their energy-efficient lighting installation.
              LED lighting installation can save you up to 80% on your next energy bill. Ask your local Auckland warehouse electrician to make the switch today!
            </Typography>
            <br />
            <Typography component={'p'}>
              LED lighting typically have a lifespan of approximately 50,000 hours, whereas standard halogen globes can only last for up to 4000 hours.
            </Typography>
            <br />
            <Typography component={'p'}>
              Quality LED lights will give you a much higher return on investment.
              A typical retrofit of a standard business will pay itself off in 1-2 years and will begin to provide you with a financial return.
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
              Local Industrial Electrician in Auckland
            </Typography>
            <br />
            <Divider />
            <br />
            <Typography component={'p'}>
              Whatever your LED installation requirements are, our industrial electrical contractors have a solution that is right for you.
            </Typography>
            <br />
            <Typography component={'p'}>
              LED lighting is also more durable and so LED high bays have a higher resistance to vibrations and external stress for a warehouse.
            </Typography>
            <br />
            <Typography component={'p'}>
              Mandarin Brothers Electrical also provide a prompt response time and competitive pricing for your business.
            </Typography>
            <br />
            <Typography component={'p'}>
              Wondering where are industrial electricians near me? Look no further than Mandarin Brothers Electrical! Our warehouse electricians service across Auckland.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
