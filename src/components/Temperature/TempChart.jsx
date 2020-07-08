import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchTempData } from '../../api';

import chartStyle from './TempChart.module.css';

const TempChart = ({ data }) => {

    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchTempData());
        }
        fetchAPI();
    }, []);

    const lineChart = (

        dailyData.length
            ? (
                <Line data={{
                    labels: dailyData.map(({ hour }) => hour),
                    datasets: [{
                        data: dailyData.map(({ Temp }) => Temp),
                        Label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }],
                }}
                />) : null
    );
    return (
        <div>{lineChart}</div>
    )
}

export default TempChart;