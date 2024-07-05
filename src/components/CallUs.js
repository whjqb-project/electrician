import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const CallUs = ({isMd}) => (
  <Box
    display="flex"
    flexDirection={{ xs: 'column', sm: 'row' }}
    alignItems={{ xs: 'stretched', sm: 'flex-start' }}
    marginTop={4}
  >
    <Button
      component={'a'}
      variant="contained"
      color="primary"
      size="large"
      fullWidth={isMd ? false : true}
      href={'/home'}
    >
      Call us 021 688 156
    </Button>
  </Box>
);

CallUs.propTypes = {
  isMd: PropTypes.node.isRequired,
};

export default CallUs;
