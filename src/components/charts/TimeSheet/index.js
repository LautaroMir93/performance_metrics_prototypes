import React, { Component } from "react";
import { Table, Icon, Button } from "antd";
import "./style.css";

const getWeekColumns = () => {
  const days = [
    "Mon 29/ Oct",
    "Tue 30/ Oct",
    "Wed 31/ Oct",
    "Thu 01/ Oct",
    "Fri 02/ Oct",
    "Sat 03/ Oct",
    "Sun 04/ Oct"
  ];
  return days.map((d, index) => ({
    title: d,
    dataIndex: `d${index}`,
    key: `d${index}`,
    width: "6%",
    render: (hours, row) => {
      return row.footer ? (
        <span>{hours ? `${hours}hs` : ""}</span>
      ) : (
        <a href="javascript:;">{hours ? `${hours}hs` : ""}</a>
      );
    }
  }));
};

const columns = [
  {
    title: "",
    dataIndex: "name",
    key: "name",
    render: (text, row) => {
      return row.footer ? (
        <span>{text}</span>
      ) : (
        <a href="javascript:;">{text}</a>
      );
    }
  },
  ...getWeekColumns()
];

const styles = {
  pagination: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    marginTop: 15
  },
  paginationButton: {
    display: "flex",
    alignItems: "center"
  }
};

export default class TimeSheet extends Component {
  static defaultProps = {
    data: [
      {
        key: 1,
        name: "Roman Tam",
        d0: 7,
        d1: 7,
        d2: 7,
        d3: null,
        d4: null,
        d5: null,
        d6: null
      },
      {
        key: 2,
        name: "Tomás Discoli",
        d0: 7,
        d1: 7,
        d2: 7,
        d3: null,
        d4: null,
        d5: null,
        d6: null
      },
      {
        key: 3,
        name: "Sofía Cejas Almang",
        d0: 7,
        d1: 7,
        d2: 7,
        d3: null,
        d4: null,
        d5: null,
        d6: null
      },
      {
        key: 4,
        name: "Maximiliano Navas Gago",
        d0: 7,
        d1: 7,
        d2: 7,
        d3: null,
        d4: null,
        d5: null,
        d6: null
      },
      {
        key: 5,
        name: "Total",
        d0: 42,
        d1: 42,
        d2: 42,
        d3: null,
        d4: null,
        d5: null,
        d6: null,
        footer: true
      }
    ]
  };

  render() {
    const { data } = this.props;
    return (
      <div>
        <Table
          className="timesheet-table"
          dataSource={data}
          columns={columns}
          size="middle"
          bordered
          pagination={false}
        />
        <div style={styles.pagination}>
          <Button>
            <Icon type="arrow-left" />
            <span>{"Previous week"}</span>
          </Button>
          <Button>
            <span>{"Next week"}</span>
            <Icon type="arrow-right" />
          </Button>
        </div>
      </div>
    );
  }
}
