import React, { useState, useEffect } from 'react';
import Head from './components/Head';
import Body from './components/Body';

const Main = () => {
  const DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;

  const PVLastDate = new Date(YEAR, MONTH - 1, 0).getDate();
  const PVLastDay = new Date(YEAR, MONTH - 1, 0).getDay();

  const ThisLasyDate = new Date(YEAR, MONTH, 0).getDate();
  const ThisLasyDay = new Date(YEAR, MONTH, 0).getDay();

  const [month, setMonth] = useState(MONTH);
  const [year, setYear] = useState(YEAR);

  const [thisDate, setThisDate] = useState(
    [...Array(ThisLasyDate + 1).keys()].slice(1)
  );

  const makeDate = (PVLastDay, ThisLasyDay) => {
    let PVLD = [];
    let TLD = [];
    if (PVLastDay !== 6) {
      for (let i = 0; i < PVLastDay + 1; i++) {
        PVLD.unshift(PVLastDate - i);
      }
    }

    for (let i = 1; i < 7 - ThisLasyDay; i++) {
      if (i === 0) {
        return TLD;
      }
      TLD.push(i);
    }
    let totalDate = PVLD.concat(thisDate, TLD);
    setThisDate(totalDate);
  };

  useEffect(() => {
    makeDate(PVLastDay, ThisLasyDay);
  }, []);

  return (
    <div>
      <Head year={year} month={month} />
      <Body thisDate={thisDate} />
    </div>
  );
};

export default Main;
