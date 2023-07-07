import React from 'react';
import Banner  from '../Banner';
import Future from '../Future';
import style from './App.module.scss';
import SearchBar from '../SearchBar';
import { CityProvider } from '../../contexts/CityContext';

function App() {
  return (
    <div className={style.container}>
      <div className={style.App}>
          <CityProvider>
            <Banner>Cloudy</Banner>
            <Future />
            <SearchBar />
          </CityProvider>
      </div>
    </div>
  );
}

export default App;
