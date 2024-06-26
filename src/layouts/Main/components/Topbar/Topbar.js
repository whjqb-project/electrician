import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import logo from './logo.png';
import Avatar from '@mui/material/Avatar';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  // const { mode } = theme.palette;
  const {
    // landings: landingPages,
    // secondary: secondaryPages,
    // company: companyPages,
    // account: accountPages,
    // portfolio: portfolioPages,
    // blog: blogPages,
    commercial: commercialPages,
    residential: residentialPages,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
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
            (mode === 'light' && !colorInvert)
              ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
              : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
          }
          height={1}
          width={1}
        /> */}
        <Box
          // marginTop={1}
          component={'img'}
          src={logo}
          height={1}
          width={{ xs: 240, md: 300 }}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        {/* <Box>
          <NavItem
            title={'Landings'}
            id={'landing-pages'}
            items={landingPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        <Box>
          <NavItem
            title={'Residential'}
            id={'residential-pages'}
            items={residentialPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Commercial'}
            id={'commercial-pages'}
            items={commercialPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="/not-found-cover"
            color={colorInvert ? 'common.white' : 'text.primary'}
          >
            Past Projects
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="/not-found-cover"
            color={colorInvert ? 'common.white' : 'text.primary'}
          >
            About US
          </Link>
        </Box>
        {/* <Box marginLeft={4}>
          <NavItem
            title={'About US'}
            id={'about-pages'}
            items={null}
            // items={commercialPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Contact'}
            id={'contact-pages'}
            items={null}
            // items={commercialPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Company'}
            id={'company-pages'}
            items={companyPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Account'}
            id={'account-pages'}
            items={accountPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Pages'}
            id={'secondary-pages'}
            items={secondaryPages}
            colorInvert={colorInvert}
          />
        </Box>  */}
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Blog'}
            id={'blog-pages'}
            items={blogPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Portfolio'}
            id={'portfolio-pages'}
            items={portfolioPages}
            colorInvert={colorInvert}
          />
        </Box>  */}

        <Box marginLeft={4}
          component={Avatar}
          bgcolor={theme.palette.primary.main}
          width={32}
          height={32}
        >
          {(
            <svg
              width={18}
              height={18}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          )}
        </Box>
        <Box>
          <Button
            variant="text"
            color="primary"
            component="p"
            target="blank"
            // href="https://material-ui.com/store/items/the-front-landing-page/"
            size="large"
          >
            021 688 156
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
