import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import images from '../../../image';

const data = [
  {
    title: 'Residential Electrician',
    subtitle:
      'Your go-to local Auckland Electrician for residential electrical services',
    pages: [
      {
        title: 'LED Downlight Installation',
        href: '/led-downlight',
        cover: images.ledDownlight.hero,
      },
      {
        title: 'Outdoor Security Lighting Installation',
        href: '/outdoor-lighting',
        cover: images.outdoorLighting.hero,
      },
      {
        title: 'Garden Lighting Installation',
        href: '/garden-lighting',
        cover: images.gardenLighting.hero,
      },
      {
        title: 'Electrical Fault Finding',
        href: '/fault-finding',
        cover: images.electricalFaultFinding.hero,
      },
      {
        title: 'Powerpoint Installation',
        href: '/powerpoint-installation',
        cover: images.powerpoint.hero,
      },
      {
        title: 'EV Charger Installations',
        href: '/ev-charger-installation',
        cover: images.evCharger.hero,
      },
      {
        title: 'Electrical Wiring and Rewiring',
        href: '/wiring-and-rewiring',
        cover: images.electricalWiring.hero,
      },
      {
        title: 'Switch & RCD Installation',
        href: '/switch-rcd-installation',
        cover: images.switch.hero,
      },
      {
        title: 'Smoke Alarms Installation',
        href: '/smoke-alarms-installation',
        cover: images.smokeAlarm.hero,
      },
      {
        title: 'Ceiling Fan Installation',
        href: '/ceiling-fan-installation',
        cover: images.ceilingFan.hero,
      },
      {
        title: 'Switchboard Upgrade',
        href: '/switchboard-upgrade',
        cover: images.switchboard.hero,
      },
      {
        title: 'Exhaust Fan Installation',
        href: '/exhaust-fan-installation',
        cover: images.exhaustFan.hero,
      },
      {
        title: 'Home Theatre Installation',
        href: '/home-theatre-installation',
        cover: images.homeTheatre.hero,
      },
      {
        title: 'Smart Home System Installation',
        href: '/smart-home-installation',
        cover: images.smokeAlarm.hero,
      },
      {
        title: 'TV Wall Mounting',
        href: '/tv-wall-mounting',
        cover: images.tvMounting.hero,
      },
    ],
  },
];

const PageResidential = () => {
  const theme = useTheme();
  return (
    <Box>
      {data.map((item, i) => (
        <Box
          key={i}
          sx={{
            marginBottom: 4,
            paddingBottom: 4,
            borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          }}
        >
          <Box marginBottom={4} alignItems="center" justifyContent="center" display="flex">
            <Typography variant={'h4'} gutterBottom >
              {item.title}
            </Typography>
            {/* <br/>
            <Typography color={'text.secondary'} component={'p'}>
              {item.subtitle}
            </Typography> */}
          </Box>
          <Box marginBottom={4} alignItems="center" justifyContent="center" display="flex">
            <Typography color={'text.secondary'} component={'p'}>
              {item.subtitle}
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {item.pages.map((p, j) => (
              <Grid
                key={j}
                item
                xs={12}
                sm={6}
                md={4}
                component={'a'}
                href={p.href}
                sx={{ textDecoration: 'none !important' }}
                data-aos={'fade-up'}
                data-aos-delay={(i + j) * 200}
                data-aos-offset={100}
                data-aos-duration={600}
              >
                <Box
                  padding={1}
                  bgcolor={'background.paper'}
                  borderRadius={2}
                  overflow={'hidden'}
                  boxShadow={3}
                  marginBottom={2}
                >
                  <Box
                    component={LazyLoadImage}
                    effect="blur"
                    src={theme.palette.mode === 'dark' ? p.coverDark : p.cover}
                    alt={p.title}
                    height={243}
                    width={1}
                    sx={{
                      transition: 'opacity, transform ease 0.3s !important',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                </Box>
                <Box display={'flex'} justifyContent={'center'}>
                  <Typography
                    variant={'subtitle1'}
                    fontWeight={700}
                    color={'text.primary'}
                  >
                    {p.title}
                  </Typography>
                  {p.description ? (
                    <Typography
                      variant={'subtitle1'}
                      color={'text.primary'}
                      sx={{ marginLeft: 0.5 }}
                    >
                      ({p.description})
                    </Typography>
                  ) : null}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
      <Box marginTop={4}>
        <Typography
          variant={'h6'}
          component={'p'}
          gutterBottom
          align={'center'}
        >
          ...and more soon.
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
        >
          Mandarin Brothers Electrical Services is your local residential electrician with a combined 10 years of experience in the industry. 
          Our residential electricians Perth have carried out projects in new builds, listed buildings and all pre-existing homes, no matter their age.
        </Typography>
      </Box>
    </Box>
  );
};

export default PageResidential;
