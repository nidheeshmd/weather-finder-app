import axios from 'axios';

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJNcmlkdWwgU2hhcm1hIiwiaWF0IjoxNTk0Mjc3MzQ3LCJleHAiOjE1OTQzMzczNDd9.lWe9Ccu-aDnEZ8bvHJZQ4043ZDxbaJrQU1Q-AuRvn20';
const weatherURL = 'https://cors-anywhere.herokuapp.com/https://apps.qmet.de/v1/home_api';

let date;
date = new Date();
const DateStruct = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1)  + '-' + (date.getDate() < 10 ? '0' : '') + date.getDate();



  const authAxios = axios.create({
      baseURL: weatherURL,
      headers: {
          Authorization: `Bearer ${accessToken}`
      }
  })

export const fetchTempData = async () => {
    try {
        const { data } = await authAxios.get(`?city=Wiesbaden&date=${DateStruct}&lat=&lon=`);
        const modifiedData = data.data.data.hourlyTemp.map((dailyData) => ({
            hour: dailyData.hour,
            Temp: dailyData.Temp,
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchPrecipData = async () => {
    try {
        const { data } = await authAxios.get(`?city=Wiesbaden&date=${DateStruct}&lat=&lon=`);
        const modifiedData = data.data.data.today.map((dailyData) => ({
            hour: dailyData.hour,
            Temp: dailyData.Temp,
            Precipitation: dailyData.Precipitation,
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchData = async () => {
    try {
        const { data } = await authAxios.get(`?city=Wiesbaden&date=${DateStruct}&lat=&lon=`);
        const modifiedData = {
            current_temp: data.data.data.current_temp,
            t2m_max_day: data.data.data.t2m_max_day,
            t2m_min_night: data.data.data.t2m_min_night,
            AirPressure: data.data.data.AirPressure,
            Windspeed: data.data.data.Windspeed,
            uv_index: data.data.data.uv_index,
            Feeling: data.data.data.Feeling,
        }
        return modifiedData;
    }
    catch (error) {
        console.log(error);
    }
}