import axios from 'axios';

const weatherURL = 'https://apps.qmet.de/v1/home_api?city=Wiesbaden&date=2020-07-07&lat=&lon=';

export const fetchTempData = async () => {
    try{
        const { data } = await axios.get(`${weatherURL}`);
        const modifiedData = data.data.data.hourlyTemp.map((dailyData) => ({
            hour: dailyData.hour,
            Temp: dailyData.Temp,
        }));
        return modifiedData;
    }catch(error){
        console.log(error);
    }
}

export const fetchPrecipData = async () => {
    try{
        const { data } = await axios.get(`${weatherURL}`);
        const modifiedData = data.data.data.today.map((dailyData) => ({
            hour: dailyData.hour,
            Temp: dailyData.Temp,
            Precipitation: dailyData.Precipitation,
        }));
        //console.log(modifiedData);
        return modifiedData;
    }catch(error){
        console.log(error);
    }
}

export const fetchData = async () => {
    try{
        //const { data: {confirmed,recovered,deaths,lastUpdate,dailySummary,dailyTimeSeries,image,source,countries,countryDetail} } = await axios.get(weatherURL);
        //return {confirmed,recovered,deaths,lastUpdate,dailySummary,dailyTimeSeries,image,source,countries,countryDetail};

        const {data} = await axios.get(weatherURL);
        const modifiedData = {
            current_temp: data.data.data.current_temp,
            t2m_max_day: data.data.data.t2m_max_day,
            t2m_min_night: data.data.data.t2m_min_night,
            AirPressure: data.data.data.AirPressure,
            Windspeed: data.data.data.Windspeed,
            uv_index: data.data.data.uv_index,
            Feeling:data.data.data.Feeling,
        }
        console.log(modifiedData);
        return modifiedData;
    }
    catch(error){
        console.log(error);
    }
}