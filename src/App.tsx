import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar';

function App() {
  // Always Pass Date Props in MM/DD/YYYY formate beacuse new Date() will work with MM/DD/YYYY formate
  //  I can handle this but propblem is propsType , for handling error of  Calender component  i have declared date
 
  return (
    <div className="App">
      <div className="calenderContainer">
      <Calendar date ={new Date("08/08/2023")}/>
      </div>
    </div>
  );
}

export default App;
