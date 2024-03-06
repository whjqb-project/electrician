import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import { useTheme } from '@mui/material/styles';
import logo from './logo.png';
import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
  // const theme = useTheme();
  // const { mode } = theme.palette;

  const {
    electrical: electricalPages,
    lighting: lightingPages,
    cctv: cctvPages,
    commercial: commercialPages,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="Mandarin Brothers Electrical"
          width={{ xs: 100, md: 120 }}
        >
          {/* <Box
            component={'img'}
            src={
              mode === 'light'
                ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
                : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
            }
            height={1}
            width={1}
          />
        </Box> */}
          <Box
            component={'img'}
            src={logo}
            height={1}
            width={220}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'Electrical'} items={electricalPages} />
        </Box>
        <Box>
          <NavItem title={'Lighting'} items={lightingPages} />
        </Box>
        <Box>
          <NavItem title={'CCTV Security'} items={cctvPages} />
        </Box>
        <Box>
          <NavItem title={'Commercial'} items={commercialPages} />
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="https://material-ui.com/store/items/the-front-landing-page/"
          >
            Free Qoute
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
