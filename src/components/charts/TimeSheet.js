import React, { Component } from "react";
import { Table } from "antd";

const data = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street"
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  }
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  }
];

const styles = {
  container: {
    margin: "5px 5px 5px 5px"
  }
};

export default class TimeSheet extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Table dataSource={data} columns={columns} size="small" bordered />
      </div>
    );
  }
}
