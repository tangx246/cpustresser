import * as React from 'react';
const AdderWorker = require('worker-loader!./AdderWorker');

class CPUTest extends React.Component<any, any> {
  constructor(props: Map<any, any>) {
    super(props);
    this.state = {workers: 8};
  }

  runAdder = () => {
    for (var i = 0; i < this.state.workers; i++) {
      new AdderWorker().postMessage({
        chunk: 999999999999999999
      });
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    var state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  render() {
    return (
      <div className="CPUTest">
        <label>Workers:
          <input type="text" name="workers" value={this.state.workers} onChange={this.handleChange}/>
        </label>

        <button onClick={this.runAdder}>Run Test</button>
      </div>
    );
  }
}

export default CPUTest;
