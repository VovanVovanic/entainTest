import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/main';
import Auth from './pages/auth';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Main />
      {/* <Auth /> */}
      </div>
      </Provider>
  );
}

export default App;
