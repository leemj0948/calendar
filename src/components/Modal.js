import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Modal = (props) => {
  const {
    elm,
    month,
    year,
    registEvent,
    setOpenModal,
    userInput,
    setUserInput,
  } = props;

  const userText = (e) => {
    let date = `${month}` + `${elm}`;

    setUserInput(`${date}_` + e.target.value);
  };

  return (
    <Form>
      <Header>Event 생성</Header>
      <ViewDate>
        날짜 {year}.{month}.{elm}
      </ViewDate>
      <Events>
        <Contexts
          placeholder="Event를 입력하세요"
          onChange={(e) => {
            userText(e);
          }}
        ></Contexts>
      </Events>
      <RegistBtn
        onClick={() => {
          registEvent(userInput);
        }}
      >
        등록
      </RegistBtn>
      <Close
        onClick={() => {
          setOpenModal(false);
        }}
      >
        닫기
      </Close>
    </Form>
  );
};

const Form = styled.div`
  position: absolute;
  width: 15vw;
  height: 10vw;
  border-radius: 10px;
  background-color: #fffae0;
  text-align: left;
  color: black;
  z-index: 999;
`;
const Header = styled.div`
  padding: 1vw 0 0.5vw 1vw;
  font-weight: 700;
  border-bottom: 2px solid #d3d3d3;
`;

const ViewDate = styled.div`
  padding: 0.4vw 0 0.3vw 1vw;
  border-bottom: 2px solid #d3d3d3;
`;
const Events = styled.div``;
const Contexts = styled.textarea`
  background-color: #fffae0;
  padding: 1vw 0 0 0.5vw;
  width: 100%;
  border: none;
`;
const RegistBtn = styled.div`
  position: absolute;
  margin: 0.4vw 0.9vw;
  padding: 0.3vw;
  width: 3vw;
  left: 0;
  bottom: 0;
  font-size: 0.9rem;
  font-weight: 600;
  background-color: #d3d3d3;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  z-index: 99;
`;

const Close = styled.div`
  position: absolute;
  margin: 0.4vw 0.9vw;
  padding: 0.3vw;
  width: 3vw;
  right: 0;
  bottom: 0;
  font-size: 0.9rem;
  font-weight: 600;
  background-color: #d3d3d3;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  z-index: 999;
`;
export default Modal;
