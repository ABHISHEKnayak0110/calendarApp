import React, { useState } from 'react'
import style from "./Calendar.module.scss"

interface dateProps {
  date : Date
}
function Calendar(props :dateProps) {
 
  const [currentMonth, setCurrentMonth] = useState(new Date(props.date));

  const daysInMonth = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };
  const getFirstDayOfMonth = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const totalDays = daysInMonth();
    const daysArray = [];
    const firstDay = getFirstDayOfMonth();
    const currentDate = new Date(props.date);
    // Render the days of the week
    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
      <div key={day} className= {`${style.calendarday}`}>
        {day}
      </div>
    ));
    daysArray.push(dayHeaders);

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(<div key={`empty-${i}`} className={`${style.calendarday} ${style.emptyday}`} />);
    }
     
      for (let day = 1; day <= totalDays; day++) {
        const isCurrentDate = day === currentDate.getDate() && currentMonth.getMonth() === currentDate.getMonth() && currentMonth.getFullYear() === currentDate.getFullYear();
       
      daysArray.push(
        <div key={day} id={"day"} className={`${style.calendarday} ${isCurrentDate ? style.today : ""}`}>
          {day}
        </div>
      );
    }

    return daysArray;
  };

  


  return (
    <div className={`${style.calendarWrapper}`}>
      <h2>{currentMonth.toLocaleString('default', { month: 'long' }) }  {currentMonth.getFullYear()}</h2>
      <div className={`${style.calendargrid}`}>
        {renderCalendar()}
      </div>
    </div>
  );
}


export default Calendar