import React from 'react';
import styled from 'styled-components';

const Body = (props) => {
  const { totalDate } = props;
  const lastDate = totalDate.indexOf(1);
  const firstDate = totalDate.indexOf(1, 7);
  console.log(lastDate, firstDate);
  return (
    <Form>
      {totalDate.map((elm, idx) => {
        return (
          <Date key={idx} idx={idx} lastDate={lastDate} firstDate={firstDate}>
            {elm}일
          </Date>
        );
      })}
    </Form>
  );
};

const Form = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const Date = styled.li`
  padding: 1vw 1.5vw 0 0;
  width: calc(100% / 7);
  height: 9vw;
  text-align: right;
  border-bottom: 1px solid #e4e3e6;
  border-left: 1px solid #e4e3e6;

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

  :nth-child(7n + 1),
  :nth-child(7n) {
    color: #969696;
    background-color: #f5f5f5;
  }
`;
export default Body;
