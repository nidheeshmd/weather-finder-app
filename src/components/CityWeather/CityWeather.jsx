import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import cardStyles from './CityWeather.module.css';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import FilterDramaOutlinedIcon from '@material-ui/icons/FilterDramaOutlined';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import LeakAddOutlinedIcon from '@material-ui/icons/LeakAddOutlined';
import FlareOutlinedIcon from '@material-ui/icons/FlareOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';


const CityWeather = ({data: {current_temp, t2m_max_day, t2m_min_night, AirPressure, Windspeed, uv_index, Feeling}}) => {
    if(!current_temp){ return 'Data is Loading!...';}
    return(
        <div className = {cardStyles.container}>
           <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FilterDramaOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={current_temp} secondary="Current Temperature" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WbSunnyOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={t2m_max_day} secondary="Maximum Temperature" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AcUnitOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={t2m_min_night} secondary="Minimum Temperature" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LeakAddOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={AirPressure} secondary="Air Pressure" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FlagOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={Windspeed} secondary="Wind Speed" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FlareOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={uv_index} secondary="UV" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CalendarTodayOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={Feeling} secondary="Feeling" />
      </ListItem>
    </List>
        </div>
    )
}

export default CityWeather;