import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

import { fetchPrecipData } from '../../api';

import TableStyle from './Precipitation.module.css';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

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
                                <TableCell>Hour</TableCell>
                                <TableCell align="right">Temperature</TableCell>
                                <TableCell align="right">Precipitation</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dailyDataP.map((row) => (
                                <TableRow key={row.hour}>
                                    <TableCell component="th" scope="row">{row.hour}</TableCell>
                                    <TableCell align="right">{row.Temp}</TableCell>
                                    <TableCell align="right">{row.Precipitation}</TableCell>
                                </TableRow>
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