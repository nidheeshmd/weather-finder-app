import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


import TempChart from './components/Temperature/TempChart';
import PrecipitationTable from './components/Precipitation/PrecipitationTable';
import CityWeather from './components/CityWeather/CityWeather';

import {fetchData} from './api';

import styles from './App.module.css';

class App extends React.Component {

    state = {
        data: {},
    }

async componentDidMount(){
    const fnFetchData = await fetchData();
    this.setState({data:fnFetchData});
}

    render() {
        const { data } = this.state;
        let date;
date = new Date();
const DateStruct = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1)  + '-' + (date.getDate() < 10 ? '0' : '') + date.getDate() + ' at ' + (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        return (
            <div className={styles.container}>
                <CssBaseline />
                <Container maxWidth="md" style={{ backgroundColor: '#cfe8fc' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Box m={2} pt={3}>
                                <Typography variant="h5" gutterBottom align="center" mt={15}>Wiesbaden Weather on  {DateStruct}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <CityWeather data={ data }/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h5" gutterBottom>Precipitation</Typography>
                            <PrecipitationTable></PrecipitationTable>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5" gutterBottom>Hourly Temperature</Typography>
                            <TempChart></TempChart>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default App;