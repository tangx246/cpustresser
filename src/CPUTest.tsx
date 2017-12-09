import * as React from 'react';
const AdderWorker = require('worker-loader!./worker/AdderWorker');

class CPUTest extends React.Component<any, any> {
  workerStartTime: number = -1;
  workProcessed: number = 0;
  workerObjects: Worker[] = [];

  constructor(props: Map<any, any>) {
    super(props);
    this.state = {
      workers: 8,
      processedPerSecond: 0,
      errors: 0
    };

    setInterval(() => {
      if (this.workerObjects.length > 0) {
        this.setState({
          processedPerSecond: this.workProcessed / ((Date.now() - this.workerStartTime) / 1000)
        });
      }
    }, 1000);
  }

  runAdder = () => {
    this.stopAdder();

    // Create workers
    const workerObjects: Worker[] = [];
    for (var i = 0; i < this.state.workers; i++) {
      var worker: Worker = new AdderWorker();
      worker.postMessage('go');
      worker.addEventListener('message', (event: MessageEvent) => {
        this.workProcessed++;
        if (!event.data.success) {
          this.setState((prevState) => {
            return { errors: prevState.errors + 1 };
          });
        }
      });
      workerObjects.push(worker);
    }

    // Save workers to state
    this.workerObjects = workerObjects;
    this.workerStartTime = Date.now();
  }

  stopAdder = () => {
    // Terminate all current workers and then clear state
    this.workerObjects.forEach((worker: Worker) => {
      worker.terminate();
    });
    this.workerObjects = [];
    this.workProcessed = 0;
    this.setState({
      errors: 0
    });
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
        <div>Processed per second {this.state.processedPerSecond}</div>
        <div>Errors: {this.state.errors}</div>

        <button onClick={this.runAdder}>Run Stresser</button>
        <button onClick={this.stopAdder}>Stop Stresser</button>
      </div>
    );
  }
}

export default CPUTest;
