import * as React from 'react';

class CPUTest extends React.Component {
  runAdder = () => {
    var a = 0;
    for (var i = 0; i < 99999999999999999; i++) {
      a++;
    }
  }

  render() {
    return (
      <div className="CPUTest">
        <button onClick={this.runAdder}>Run Test</button>
      </div>
    );
  }
}

export default CPUTest;
