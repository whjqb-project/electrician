import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import images from '../../../image';

const data = [
  {
    title: 'Commercial Electrician',
    subtitle:
      'Your go-to local Auckland Electrician for commercial electrical services',
    pages: [
      {
        title: 'Quality Commercial Electrical Fitouts',
        href: '/commercial-electrical-fitouts',
        cover: images.commercialElectricalFitouts.hero,
      },
      {
        title: 'Electrical Layout Planning',
        href: '/electrical-layout-planning',
        cover: images.electricalLayoutPlanning.hero,
      },
      {
        title: 'Emergency & Exit Lighting',
        href: '/emergency-lighting',
        cover: images.emergencyLighting.hero,
      },
      {
        title: 'Warehouse & Industrial Lighting',
        href: '/warehouse-lighting',
        cover: images.warehouseLighting.hero,
      },
      {
        title: 'Data & Network Cabling',
        href: '/data-network-cabling',
        cover: images.dataNetwork.hero,
      },
      {
        title: 'CCTV Security',
        href: '/cctv',
        cover: images.cctv.hero,
      },
    ],
  },
];

const PageCommercial = () => {
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
          Mandarin Brothers Electrical services is your trusted commercial electrician in Auckland with 10 years of industry expertise. 
          Regardless of your needs, you can depend on us to offer your desired services. The electrical systems of commercial properties are notably more complex than residential ones, 
          so not every electrical company can handle these works. 
          We have a long history of providing commercial electrician services in Auckland. We are one of the most respected companies in the market with high-quality service.
        </Typography>
      </Box>
    </Box>
  );
};

export default PageCommercial;
