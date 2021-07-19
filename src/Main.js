import React, { useState, useEffect } from 'react';
import Head from './components/Head';
import Body from './components/Body';
import { connect } from 'react-redux';
import { showcalendar } from './modules/calendar/calendar.action';

const Main = ({ year, month, calendardatearr, totalDate, getToday }) => {
  useEffect(() => {
    totalDate();
  }, [month]);

  return (
    <div>
      <Head year={year} month={month} />
      <Body getToday={getToday} />
    </div>
  );
};
const mapStateToProps = ({
  caln: { year, month, calendardatearr, getToday },
}) => ({
  year,
  month,
  calendardatearr,
  getToday,
});
const mapDispatchToProps = (dispatch) => ({
  totalDate: (month, year) => dispatch(showcalendar(month, year)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
