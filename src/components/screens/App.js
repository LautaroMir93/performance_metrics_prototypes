import React, { Component } from "react";
import CreatedVsResolved from "../charts/CreatedVsResolved/index";
import Velocity from "../charts/Velocity/index";
import TimeSheet from "../charts/TimeSheet/index";

const styles = {
  mainContainer: {
    margin: 20
  },
  chartsContainer: {
    margin: 20
  },
  chartContainer: {
    margin: "10px 0px"
  }
};

class App extends Component {
  render() {
    return (
      <div style={styles.mainContainer}>
        <h2>Charts</h2>
        <div style={styles.chartsContainer}>
          <div style={styles.chartContainer}>
            <h3>Created vs Resolved Chart</h3>
            <CreatedVsResolved />
          </div>
          <div style={styles.chartContainer}>
            <h3>Velocity Chart</h3>
            <Velocity />
          </div>
          <div style={styles.chartContainer}>
            <h3>Timesheet</h3>
            <TimeSheet />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
