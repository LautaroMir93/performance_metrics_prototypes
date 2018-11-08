import React, { Component } from "react";
import { Table } from "antd";
import "./style.css";

const data = [
  {
    key: 1,
    name: "Roman Tam",
    d0: 7,
    d1: 8,
    d2: 7,
    d3: null,
    d4: null,
    d5: null
  },
  {
    key: 2,
    name: "Tomás Discoli",
    d0: 7,
    d1: 8,
    d2: 7,
    d3: null,
    d4: null,
    d5: null
  },
  {
    key: 3,
    name: "Sofía Cejas Almang",
    d0: 7,
    d1: 8,
    d2: 7,
    d3: null,
    d4: null,
    d5: null
  },
  {
    key: 4,
    name: "Maximiliano Navas Gago",
    d0: 7,
    d1: 8,
    d2: 7,
    d3: null,
    d4: null,
    d5: null
  }
];

const styles = {
  column: {
    fontFamily: "OpenSans-Regular",
    fontSize: 11,
    lineHeight: 13
  }
};

const getWeekColumns = () => {
  const days = [
    "Mon 29/ Oct",
    "Tue 30/ Oct",
    "Wed 31/ Oct",
    "Thu 01/ Oct",
    "Fri 02/ Oct",
    "Sat 03/ Oct"
  ];
  return days.map((d, index) => ({
    title: d,
    dataIndex: `d${index}`,
    key: `d${index}`,
    width: "6%",
    render: hours => <a href="javascript:;">{hours ? `${hours}hs` : ""}</a>
  }));
};

const columns = [
  {
    title: "",
    dataIndex: "name",
    key: "name",
    render: text => <a href="javascript:;">{text}</a>
  },
  ...getWeekColumns()
];

export default class TimeSheet extends Component {
  render() {
    return (
      <Table
        className="timesheet-table"
        dataSource={data}
        columns={columns}
        size="middle"
        bordered
        footer={() => "Footer"}
        pagination={false}
        onRow={r => console.log(r)}
        onHeaderRow={hr => console.log(hr)}
      />
    );
  }
}
