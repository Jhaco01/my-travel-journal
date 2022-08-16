import React from 'react';
import './App.css';
import { Header } from './components/Header';
import Data from './components/Data';
import { Place } from './components/Place';

export const App = () => {

  const places = Data.map( (data) => {
    return (< Place 
      {...data}
    />)
  } )

  return (
    <div className="App">
        < Header />
        {places}
    </div>
  );
}

