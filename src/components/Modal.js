import React, { useState } from 'react';
import styled from 'styled-components';

const Modal = (props) => {
  const { elm, month, year } = props;

  // const [om, setOm] = useState();

  // console.log(om);

  return (
    <Form>
      <Header>Event 생성</Header>
      <ViewDate>
        날짜 {year}.{month}.{elm}
      </ViewDate>
      <Events>
        <Contexts placeholder="Event를 입력하세요"></Contexts>
      </Events>
      <Close
        onClick={() => {
          // setOm(true);
        }}
      >
        X 닫기
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
`;
const Header = styled.div`
  padding: 1vw 0 0.5vw 1vw;
  font-weight: 700;
  border-bottom: 2px solid #d3d3d3;
}
`;
const ViewDate = styled.div`
  padding: 0.4vw 0 0.3vw 1vw;
  border-bottom: 2px solid #d3d3d3;
`;
const Events = styled.div``;
const Contexts = styled.input`
  background-color: #fffae0;
  padding: 1vw 0 0 0.5vw;
  width: 100%;
`;
const Close = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0.4vw;
  font-size: 0.9rem;
  font-weight: 600;
`;
export default Modal;
