import React, { useEffect, useState } from "react";
import Container from "../Container";
import styled from "styled-components";
import { Spin, Table } from "antd";
import axios from "axios";
import { Button } from "antd";
import { useHistory } from "react-router";
const Profile = () => {
  const [dataReport, setDataReport] = useState([]);
  const [loading, setLoading] = useState(false);

  const colums = [
    {
      title: "name",
      dataIndex: "name",
    },
    { title: "username", dataIndex: "username" },
    {
      title: "email",
      dataIndex: "email",
    },
    {
      title: "address",
      dataIndex: "address",
      render: (render) => {
        const data = `
        ${render.street},${render.suite}
        
      `;
        return data;
      },
    },
    {
      title: "geo",
      dataIndex: "address",
      render: (render) => {
        const data = `
        ${render.geo.lat},${render.geo.lng}
        
      `;
        return data;
      },
    },
  ];

  useEffect(() => {
    getReportCovid();
  }, []);

  const getReportCovid = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setDataReport(response.data);
        setTimeout(() => {
          setLoading(true);
        }, 300);

        console.log(`response`, response);
      })
      .catch((error) => console.log(`error`, error));
  };

  const history = useHistory();
  const backHomepage = () => {
    history.replace("/homepage");
  };
  console.log(`loading`, loading);
  return (
    <Container>
      <BodyTable>
        <h2>https://jsonplaceholder.typicode.com/users </h2>

        {loading ? (
          <Table columns={colums} dataSource={dataReport} rowKey="id"></Table>
        ) : (
          <Spin tip="Loading..." size="large" />
        )}
        <div>
          <Button type="primary" onClick={backHomepage}>
            Black
          </Button>
        </div>
      </BodyTable>
    </Container>
  );
};

export default Profile;

const BodyTable = styled.div`
  width: 1200px;
  display: flex;
  background-color: white;
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
