import React, { useEffect } from 'react';
import styled from 'styled-components';
import Dates from './Dates';
import axios from 'axios';
import { API } from '../Config';
import { KEY } from '../Config';
import { connect } from 'react-redux';

//일 ,월
const Body = ({ month, year, calendardatearr, getToday }) => {
  const lastDate = calendardatearr.indexOf(1);
  const firstDate = calendardatearr.indexOf(1, 7);

  //today
  const findToday = calendardatearr.indexOf(getToday);
  const getMonth = new Date().getMonth() + 1;

  // const runAxios = async () => {
  //   try {
  //     // const set = axios.set({ 'access-control-allow-origin': '*' });
  //     const res = await axios.get(
  //       `${API}solYear=${year}&solMonth=${month}&ServiceKey=${KEY}`
  //     );
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   // runAxios();
  //   fetch(`${API}solYear=${year}&solMonth=${month}&ServiceKey=${KEY}`).then(
  //     (res) => console.log(res)
  //   );
  // }, []);

  return (
    <Form>
      {calendardatearr === 0 ||
        calendardatearr.map((elm, idx) => {
          return (
            <Dates
              key={idx}
              idx={idx}
              lastDate={lastDate}
              firstDate={firstDate}
              elm={elm}
              findToday={findToday === idx && month === getMonth && findToday}
            ></Dates>
          );
        })}
    </Form>
  );
};

const Form = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const mapStateToProps = ({ caln: { month, year, calendardatearr } }) => ({
  month,
  calendardatearr,
  year,
});
export default connect(mapStateToProps, null)(Body);
