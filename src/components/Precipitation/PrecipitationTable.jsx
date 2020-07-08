import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

import { fetchPrecipData } from '../../api';

import TableStyle from './Precipitation.module.css';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
      fontWeight:"bold",
      backgroundColor: "white",
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const PrecipitationTable = ({ data }) => {
   

    const [dailyDataP, setDailyDataP] = useState({});
    useEffect(() => {
        const fetchAPI = async () => {
            const DData = await fetchPrecipData();
            setDailyDataP(DData);
            //console.log(DData);
        }
        fetchAPI();
    }, []);

    console.log(dailyDataP);

    const PrecTeable = (

        dailyDataP.length
            ? (


                <TableContainer >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Hour</StyledTableCell>
                                <StyledTableCell align="center">Temperature</StyledTableCell>
                                <StyledTableCell align="center">Precipitation</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dailyDataP.map((row) => (
                               
                                <StyledTableRow key={row.hour}>
                                <StyledTableCell align="center">{row.hour}</StyledTableCell>
                                <StyledTableCell align="center">{row.Temp}</StyledTableCell>
                                <StyledTableCell align="center">{row.Precipitation}</StyledTableCell>
                              </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


            ) : null
    );

    return (

        <div>
            {PrecTeable}
        </div>
    )
}
export default PrecipitationTable;