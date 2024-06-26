import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';

const features = [
  {
    title: 'Supply and Replacement of LED Downlights',
    id: 1,
    price: 95,
  },
  {
    title: 'Supply and Installation of LED Downlights 1-10',
    id: 2,
    price: 125,
  },
  {
    title: 'Supply and Installation of LED Downlights 11-20',
    id: 3,
    price: 105,
  },
  {
    title: 'Supply and Installation of LED Downlights 21-30',
    id: 4,
    price: 95,
  },
  {
    title: 'Supply and Installation of LED Downlights 31-40',
    id: 5,
    price: 85,
  },
];

const PricingCompareTable = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4} alignItems="center" justifyContent="center" display="flex" >
        <Typography fontWeight={700} variant={'h4'}>
          Want to find out more about our LED Downlight installation cost?
        </Typography>
      </Box>
      <br />
      <Divider />
      <br />
      <Box>
        <TableContainer component={Paper} elevation={0}>
          <Table aria-label="caption table" sx={{ minWidth: 600 }}>
            <TableBody>
              {features.map((feature) => (
                <TableRow key={feature.id}>
                  <TableCell component="th" scope="row">
                    <Box
                      component={ListItem}
                      disableGutters
                      width={'auto'}
                      padding={0}
                    >
                      <Box
                        component={ListItemAvatar}
                        minWidth={'auto !important'}
                        marginRight={2}
                      >
                        <Box
                          component={Avatar}
                          bgcolor={theme.palette.secondary.main}
                          width={20}
                          height={20}
                        >
                          <svg
                            width={12}
                            height={12}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Box>
                      </Box>
                      <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 400 }}>
                        {feature.title}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                  </TableCell>
                  <TableCell align="center">
                  </TableCell>
                  <TableCell align="center">
                    <Typography color={'secondary'} variant={'h6'} gutterBottom sx={{ fontWeight: 600 }}>
                      {feature.price} excl GST
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default PricingCompareTable;
