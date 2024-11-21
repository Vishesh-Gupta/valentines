import React, { useEffect, useState } from 'react';
import Countdown from '../components/countdown'; // Importing the Countdown component

const MainPage = () => {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date();
  const birthdayDate = new Date(currentYear, 3, 14); // Birthday on April 14th
  const isBirthdayUpcoming = birthdayDate > currentDate; // Check if birthday is upcoming

  let YearComponent;

  useEffect(() => {
    const loadYearComponent = async () => {
      if (isBirthdayUpcoming) {
        YearComponent = () => <Countdown targetDate={birthdayDate} />; // Countdown to birthday
      } else {
        YearComponent = () => <div style={{ color: 'black' }}>Happy Birthday!</div>; // Show birthday message
      }
    };

    loadYearComponent();
  }, [currentYear, currentDate, isBirthdayUpcoming]);

  return (
    <div>
      <h1 style={{ color: 'black' }}>Welcome to the Main Page</h1>
      {YearComponent}
    </div>
  );
};

export default MainPage;
