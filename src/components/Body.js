import React from 'react';
import styled from 'styled-components';
import Dates from './Dates';

const Body = (props) => {
  const { totalDate, today, month } = props;
  const lastDate = totalDate.indexOf(1);
  const firstDate = totalDate.indexOf(1, 7);
  const getId = (idx) => {
    console.log(idx);
  };
  //today
  const findToday = totalDate.indexOf(today);
  const getMonth = new Date().getMonth() + 1;
  return (
    <Form>
      {totalDate.map((elm, idx) => {
        return (
          <Dates
            key={idx}
            idx={idx}
            lastDate={lastDate}
            firstDate={firstDate}
            getId={getId}
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
// const Date = styled.li`
//   padding: 1vw 1.5vw 0 0;
//   width: calc(100% / 7);
//   height: 9vw;
//   text-align: right;
//   border-bottom: 1px solid #e4e3e6;
//   border-left: 1px solid #e4e3e6;

//   ${(props) =>
//     props.idx < props.lastDate &&
//     `
//     color: #969696;
//   `};

//   ${(props) =>
//     props.firstDate > 0 &&
//     props.idx > props.firstDate - 1 &&
//     `
//     color: #969696;
//   `};

//   :nth-child(7n + 1),
//   :nth-child(7n) {
//     color: #969696;
//     background-color: #f5f5f5;
//   }
// `;
export default Body;
