import React, { Component } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

const styles = {
  container: {
    marginLeft: 20
  }
};

class CreatedVsResolved extends Component {
  state = {
    data: [],
    createdMax: 0
  };

  componentWillMount() {
    this.setState(
      {
        data: [
          { date: "Day 1", created: 3, resolved: 1 },
          { date: "Day 2", created: 15, resolved: 4 },
          { date: "Day 3", created: 20, resolved: 20 },
          { date: "Day 4", created: 30, resolved: 30 },
          { date: "Day 5", created: 50, resolved: 38 },
          { date: "Day 6", created: 90, resolved: 50 },
          { date: "Day 7", created: 120, resolved: 90 }
        ]
      },
      () => {
        this.setState({
          createdMax: Math.max(...this.state.data.map(d => d.created))
        });
      }
    );
  }

  render() {
    const { createdMax, data } = this.state;
    return (
      <div style={styles.container}>
        <h3>Created vs Resolved Chart</h3>
        <ResponsiveContainer width="75%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 10, left: 10, right: 30, bottom: 5 }}
          >
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              interval="preserveStartEnd"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={Array.from(Array(createdMax + 1).keys())}
              interval={19}
            />
            <CartesianGrid vertical={false} />
            <Line
              type="linear"
              dataKey="created"
              stroke="green"
              strokeWidth={3}
              dot={{ r: 5, strokeWidth: 3 }}
            />
            <Line
              type="linear"
              dataKey="resolved"
              stroke="red"
              strokeWidth={3}
              dot={{ r: 5, strokeWidth: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default CreatedVsResolved;
