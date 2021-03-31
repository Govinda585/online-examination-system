import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const Exam = ({ onHandleAdd }) => {
  return (
    <>
      <Header>
        <h4> Online Exam List</h4>
        <Button onClick={onHandleAdd}>Add</Button>
      </Header>
    </>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Exam;
