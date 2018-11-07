import React, { Component } from "react";
import CreatedVsResolved from "../charts/CreatedVsResolved";
import Velocity from "../charts/Velocity";

const styles = {
  title: {
    marginLeft: 10
  }
};

class App extends Component {
  render() {
    return (
      <div>
        <h2 style={styles.title}>Charts</h2>
        <CreatedVsResolved />
        <Velocity />
      </div>
    );
  }
}

export default App;
