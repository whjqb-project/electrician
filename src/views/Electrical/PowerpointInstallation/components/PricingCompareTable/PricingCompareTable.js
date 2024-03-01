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
    title: '1 x Double Power Point Installation External Wall',
    id: 1,
    price: 330,
  },
  {
    title: '1 x Double Power Point Installation Internal Wall',
    id: 2,
    price: 290,
  },
  {
    title: '1 x Quad Power Point Installation External Wall',
    id: 3,
    price: 490,
  },
  {
    title: '1 x Quad Power Point Installation Internal Wall',
    id: 4,
    price: 350,
  },
  {
    title: '1 x 15A Single Power Point Installation Internal Wall',
    id: 5,
    price: 450,
  },
  {
    title: '1 x 15A Single Power Point Installation External Wall',
    id: 6,
    price: 495,
  },
  {
    title: '1 x Weather Proof Power Point External Wall Installation',
    id: 7,
    price: 350,
  },
  {
    title: '1 x Weather Proof 15A Power Point Installation',
    id: 8,
    price: 495,
  },
];

const PricingCompareTable = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4} alignItems="center" justifyContent="center" display="flex" >
        <Typography fontWeight={700} variant={'h4'}>
          Powerpoint installation cost & cost of additional powerpoints:
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
