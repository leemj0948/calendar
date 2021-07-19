import React, { useEffect } from 'react';
import styled from 'styled-components';
import Dates from './Dates';
import axios from 'axios';
import { API } from '../Config';
import { KEY } from '../Config';

const Body = (props) => {
  const { totalDate, today, month, year } = props;
  const lastDate = totalDate.indexOf(1);
  const firstDate = totalDate.indexOf(1, 7);

  //today
  const findToday = totalDate.indexOf(today);
  const getMonth = new Date().getMonth() + 1;

  const runAxios = async () => {
    try {
      const res = await axios.get(
        `${API}solYear=${year}&solMonth=${month}&ServiceKey=${KEY}`
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    runAxios();
  });

  return (
    <Form>
      {totalDate.map((elm, idx) => {
        return (
          <Dates
            key={idx}
            idx={idx}
            lastDate={lastDate}
            firstDate={firstDate}
            elm={elm}
            findToday={findToday === idx && month === getMonth && findToday}
            month={month}
            year={year}
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
export default Body;
