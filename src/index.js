import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormApp from './FormApp';
import * as serviceWorker from './serviceWorker';

class Destructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRenderForm: true
    };
  }

  componentDidMount() {
    setTimeout(this.destroyForm, 10000);
  }

  destroyForm = () => {
    this.setState({
      shouldRenderForm: false
    });
  }

  render() {
    return (
      <div>
        {this.state.shouldRenderForm ? (
          <FormApp/>
        ) : null}
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Destructor />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
