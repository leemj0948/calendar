import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Dates = (props) => {
  const {
    lastDate,
    firstDate,
    elm,
    getEvent,
    idx,
    findToday,
    isTrue,
    month,
    year,
  } = props;

  return (
    <>
      <Form
        onClick={() => {
          getEvent(idx);
        }}
      >
        <DateNum
          lastDate={lastDate}
          firstDate={firstDate}
          findToday={findToday}
        >
          <TodayCSS findToday={findToday}>{elm}</TodayCSS>일
        </DateNum>
        {isTrue && <Modal elm={elm} month={month} year={year} />}
      </Form>
    </>
  );
};
const Form = styled.li`
  positon: relative;
  padding: 1vw 1.5vw 0 0;
  width: calc(100% / 7);
  height: 9vw;
  text-align: right;
  border-bottom: 1px solid #e4e3e6;
  border-left: 1px solid #e4e3e6;

  :nth-child(7n + 1),
  :nth-child(7n) {
    color: #969696;
    background-color: #f5f5f5;
  }
`;

const DateNum = styled.div`
  ${(props) =>
    props.idx < props.lastDate &&
    `
    color: #969696;
  `};

  ${(props) =>
    props.firstDate > 0 &&
    props.idx > props.firstDate - 1 &&
    `
    color: #969696;
  `};
`;
const TodayCSS = styled.span`
  ${(props) =>
    props.findToday &&
    ` position: relative;
    padding: .5vw;
    border-radius: 50%;
    font-size: 1.2vw;
    font-weight: 700;
    color: #FFFFFF;
    background-color:red
 `}
`;

export default Dates;
