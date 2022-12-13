import React, { useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/main';
import Auth from './pages/auth';
import { Provider} from 'react-redux';
import store from './store/store';
import { USER_KEY } from './constant'
import storage from './utils/storage'
import { setNotes } from './store/notes/actions';

function App() {
  const user = storage.get(USER_KEY)

  return (
    <Provider store={store}>
    <div className="App">
        { user ? <Main /> : <Auth />}
      </div>
      </Provider>
  );
}

export default App;
