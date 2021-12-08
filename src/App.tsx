import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <Provider  store={store}>
      <App />
    </Provider>
  );
}

export default App;
