import React from 'react';

import TempChart from './components/Temperature/TempChart';
import PrecipitationTable from './components/Precipitation/PrecipitationTable';

import styles from './App.module.css';

class App extends React.Component{





    render()
    {
        return(
            <div className={styles.container}>
                <PrecipitationTable></PrecipitationTable>
                <TempChart></TempChart>

            </div>
        )
    }
}

export default App;