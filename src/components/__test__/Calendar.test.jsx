import React from 'react';
import { render, screen } from '@testing-library/react';
import Calendar from '../Calendar';




describe('Calendar Component', () => {
  it('renders the current month and year', () => {
    const currentDate = new Date('08/15/2023');
    render(<Calendar date={currentDate} />);
    
    // Check if the component renders the current month and year
    const monthYearElement = screen.getByText('August 2023');
    expect(monthYearElement).toBeInTheDocument();
  });

  it('renders the days of the week', () => {
    const currentDate = new Date('08/15/2023');
    render(<Calendar date={currentDate} />);
    
    // Check if the component renders the days of the week
    expect(screen.getByText('Sun')).toBeInTheDocument();
    expect(screen.getByText('Mon')).toBeInTheDocument();
    expect(screen.getByText('Tue')).toBeInTheDocument();
    expect(screen.getByText('Wed')).toBeInTheDocument();
    expect(screen.getByText('Thu')).toBeInTheDocument();
    expect(screen.getByText('Fri')).toBeInTheDocument();
    expect(screen.getByText('Sat')).toBeInTheDocument();
  });

 
  it('renders the current date with a special style', () => {
    const currentDate = new Date('08/15/2023');
    render(<Calendar date={currentDate} />);
    
    // Check if the component renders the current date with a special style
    const currentDateElement = screen.getByText('15');
    expect(currentDateElement).toHaveClass('today');
  });
});

