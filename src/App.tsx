import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar';

function App() {
  // Always Pass Date Props in MM/DD/YYYY format beacuse new Date() will work with MM/DD/YYYY format
  //  I can handle this but propblem is propsType , 
  //For handling error of  Calender component .I have declared props of calendar component as a Date
 
  return (
    <div className="App">
      <div className="calenderContainer">
      <Calendar date ={new Date("08/08/2023")}/>
      </div>
    </div>
  );
}

export default App;
