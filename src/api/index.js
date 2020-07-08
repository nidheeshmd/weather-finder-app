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