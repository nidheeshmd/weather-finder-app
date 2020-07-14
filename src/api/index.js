import axios from 'axios';

const weatherURL = 'https://cors-anywhere.herokuapp.com/https://apps.qmet.de/v1/home_api';
const tokenURL ='https://cors-anywhere.herokuapp.com/https://apps.qmet.de/v1/token';

let date;
date = new Date();
const DateStruct = date.getFullYear() 
+ '-' + ((date.getMonth() + 1) < 10 ? '0' : '') 
+ (date.getMonth() + 1)  
+ '-' + (date.getDate() < 10 ? '0' : '') 
+ date.getDate();

/*axios.interceptors.request.use(
    confiq => {
      confiq.headers.authorization = `Bearer ${accessToken}`;
      return confiq;
    },
    error => {
      return Promise.reject(error);
    }
  )*/

  /*const authAxios = axios.create({
      baseURL: weatherURL,
      headers: {
          Authorization: `Bearer ${accessToken}`
      }
  })*/

export const fetchTempData = async () => {
    
    try {
        const tokenTata = await axios.get(tokenURL);
        const tokenString = tokenTata.data.data.token;

        const authAxios = axios.create({
            baseURL: weatherURL,
            headers: {
                Authorization: `Bearer ${tokenString}`
            }
        });

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
        const tokenTata = await axios.get(tokenURL);
        const tokenString = tokenTata.data.data.token;

        const authAxios = axios.create({
            baseURL: weatherURL,
            headers: {
                Authorization: `Bearer ${tokenString}`
            }
        });
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
        const tokenTata = await axios.get(tokenURL);
        const tokenString = tokenTata.data.data.token;

        const authAxios = axios.create({
            baseURL: weatherURL,
            headers: {
                Authorization: `Bearer ${tokenString}`
            }
        });
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