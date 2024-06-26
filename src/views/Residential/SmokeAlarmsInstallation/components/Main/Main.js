import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
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
            Mandarin Brothers Electrical is your trusted smoke alarm installation professionals!
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginY: 4 }} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Did you know that smoke alarms and smoke detectors are mandatory for every residential property in Auckland?
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Using a reliable smoke alarm installer is vital to ensuring the safety of your home or business.
              Mandarin Brothers Electrical Services can provide smoke detector and smoke alarm installation to keep your staff, colleagues and tenants safe from the risk of a fire within your building.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              There are two types of commonly used smoke alarm installations, being photoelectric and ionisation alarms.
              The main difference between these smoke alarm detectors is that Photoelectric smoke alarms can sense smoke from a smouldering fire,
              enabling early detection and allows time to control the fire or escape if necessary.
              However, these smoke alarms are poorly equipped to sense a well-established, flaming fire.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography component={'p'}>
              Ionisation smoke alarm installations by contrast can identify the presence of a flaming fire effectively but they are less able to provide early warning of a smouldering fire or potential breathing or visibility difficulties caused by heavy smoke.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={images.smokeAlarm.main}
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
