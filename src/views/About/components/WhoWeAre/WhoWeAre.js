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
              Residential & Commercial Electricians
            </Typography>
            <br />

            <Divider />
            <br />
            <Typography component={'p'}>
              Our commercial and residential electricians are highly experienced and qualified, offering an extensive range of electrical installation services,
              repair, maintenance and upgrade projects for our clients.
            </Typography>
            <br />
            <Typography component={'p'}>
              The Mandarin Brothers Electrical Services team all share the same passion of striving to provide professional, honest and reliable services for our customers so that we leave them with a positive experience to remember.
            </Typography>
            <br />
            <Typography component={'p'}>
              We provide unmatched workmanship and reasonable prices to meet and exceed our customer’s expectations.

            </Typography>
            <br />
            <Typography component={'p'}>
              Our exceptional team understands that time is important, so we ensure prompt and efficient electrical services so that your home or business isn’t affected.
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
              Fully Licensed and Insured Team
            </Typography>
            <br />
            <Divider />
            <br />
            <Typography component={'p'}>
              Our licensed electricians have all the skills and know-how to meet your requirements and deliver exceptional electrical services.
            </Typography>
            <br />
            <Typography component={'p'}>
              The team clearly communicates the nature of the work being undertaken throughout the project and provide honest and helpful advice to find the best solution for you.
            </Typography>
            <br />
            <Typography component={'p'}>
              We will also provide a concise and itemised quote before we arrange a survey for potential electrical work needed.
            </Typography>
            <br />
            <Typography component={'p'}>
              Our professionals treat your home as if it were their own and go the extra mile to ensure that they provide minimal disruption as well as ensure they leave the premises in a clean and tidy state.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
