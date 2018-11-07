import React, { Component } from "react";
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

export default class Velocity extends Component {
  static defaultProps = {
    data: [
      { date: "Day 1", commitment: 3, completed: 1 },
      { date: "Day 2", commitment: 15, completed: 4 },
      { date: "Day 3", commitment: 20, completed: 20 },
      { date: "Day 4", commitment: 30, completed: 30 },
      { date: "Day 5", commitment: 50, completed: 38 },
      { date: "Day 6", commitment: 90, completed: 50 },
      { date: "Day 7", commitment: 120, completed: 90 }
    ]
  };

  render() {
    const { data } = this.props;
    return (
      <ResponsiveContainer width="75%" height={300}>
        <BarChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend iconSize={16} />
          <Bar dataKey="commitment" fill="#8884d8" />
          <Bar dataKey="completed" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
