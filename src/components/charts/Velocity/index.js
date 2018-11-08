import React, { Component } from "react";
import { Table } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const columns = [
  {
    title: "Sprint",
    dataIndex: "sprint"
  },
  {
    title: "Commitment",
    dataIndex: "commitment",
    width: 150
  },
  {
    title: "Completed",
    dataIndex: "completed",
    width: 150
  }
];

const styles = {
  tableContainer: {
    marginTop: 10
  }
};

export default class Velocity extends Component {
  static defaultProps = {
    data: [
      { sprint: "C20D Sprint 4", commitment: 0, completed: 0 },
      { sprint: "C20D Sprint 5", commitment: 0, completed: 0 },
      { sprint: "C20D Sprint 6", commitment: 0, completed: 0 },
      { sprint: "C20D Sprint 7", commitment: 0, completed: 0 },
      { sprint: "C20D Sprint 8", commitment: 0, completed: 0 },
      { sprint: "C20D Sprint 9", commitment: 0, completed: 0 },
      { sprint: "C20D Sprint 10", commitment: 37, completed: 42 }
    ]
  };

  render() {
    const { data } = this.props;
    return (
      <div>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="sprint" padding={{ left: 20, right: 20 }} />
            <YAxis
              label={{
                value: "ISSUE COUNT",
                angle: -90,
                position: "insideLeft"
              }}
              padding={{ top: 40 }}
            />
            <Tooltip />
            <Legend
              iconSize={16}
              iconType="circle"
              align="left"
              verticalAlign="top"
              wrapperStyle={{ left: 0, top: 0, padding: "10px 0px 10px 90px" }}
            />
            <Bar dataKey="commitment" fill="#8884d8" />
            <Bar dataKey="completed" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
        <div style={styles.tableContainer}>
          <Table
            columns={columns}
            dataSource={data}
            size="small"
            pagination={false}
            bordered={false}
          />
        </div>
      </div>
    );
  }
}
