import React, { useEffect, useState } from "react";
import Container from "../Container";
import styled from "styled-components";
import { Spin, Table } from "antd";
import axios from "axios";
import moment from "moment";
import { Button } from "antd";
import { useHistory } from "react-router";
const CovidReport = () => {
  const [dataReport, setDataReport] = useState([]);
  const [loading, setLoading] = useState(false);

  const colums = [
    {
      title: "วันที่",
      dataIndex: "txn_date",
      key: "txn_date",
      render: (data) => moment(data).format("DD/MM/YY"),
    },
    { title: "เคสใหม่", dataIndex: "new_case", key: "new_case" },
    {
      title: "รักษาหายแล้ว",
      dataIndex: "new_recovered",
      key: "new_recovered",
    },
    { title: "ยอดรวม", dataIndex: "total_case", key: "total_case" },
    { title: "ตาย", dataIndex: "new_death", key: "new_death" },
    { title: "ตายรวม", dataIndex: "total_death", key: "total_death" },
  ];

  useEffect(() => {
    getReportCovid();
  }, []);

  const getReportCovid = () => {
    axios
      .get("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all")
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
        <h2>CovidReport Page </h2>

        {loading ? (
          <Table
            columns={colums}
            dataSource={dataReport}
            rowKey="txn_date"
          ></Table>
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

export default CovidReport;

const BodyTable = styled.div`
  width: 800px;
  display: flex;
  background-color: white;
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
