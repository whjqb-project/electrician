import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import logo from './logo.png';
import NavItem from './components/NavItem';
import Avatar from '@mui/material/Avatar';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  // const { mode } = theme.palette;

  const {
    residential: residentialPages,
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
          <NavItem title={'Residential'} items={residentialPages} />
        </Box>
        <Box>
          <NavItem title={'Commercial'} items={commercialPages} />
        </Box>
        <Box marginTop={1} display={'flex'}>
          {/* <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="https://material-ui.com/store/items/the-front-landing-page/"
          >
            Free Qoute
          </Button> */}
          <Box marginTop={1}
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
          <Box marginBottom={2}>
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
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
