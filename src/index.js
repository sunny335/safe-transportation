import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from 'src/views/App';
// import configureStore from 'src/state/store';
import store from './store';
const Container = () => {
  // const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

  return (
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
};

ReactDOM.render(<Container />, document.getElementById('root'));
reportWebVitals();
