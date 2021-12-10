import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router";
import Container from "../Container";
import styled from "styled-components";
const HomePage = () => {
  const history = useHistory();

  const onClickLogout = () => {
    history.replace("/");
    localStorage.clear();
  };
  console.log(`homepage-history`, history);
  return (
    <Container>
      <BodyHomePage>
        <h1>Home Page</h1>{" "}
        <Button
          type="primary"
          style={{ background: "green", borderColor: "white" }}
          onClick={() => history.replace("/covid19")}
        >
          CovidReport
        </Button>
        <Button
          type="primary"
          style={{ background: "blue", borderColor: "white" }}
          onClick={() => history.replace("/profile")}
        >
          profile
        </Button>
        <Button type="primary" onClick={onClickLogout} danger>
          logout
        </Button>
      </BodyHomePage>
    </Container>
  );
};

export default HomePage;

const BodyHomePage = styled.div`
  width: 300px;
  height: 200px;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  display: flex;
  text-align: center;
  align-items: center;
  border-radius: 5px;
`;
