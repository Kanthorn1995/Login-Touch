import React from "react";
import styled from "styled-components";

const index = ({ children }) => {
  return <Container>{children}</Container>;
};

export default index;
const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1200px;
`;
