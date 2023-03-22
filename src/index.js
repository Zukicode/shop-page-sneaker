import React from 'react';
import ReactDOM from 'react-dom/client';

//Components
import { App } from './components/App/App';

//Redux
import { store } from 'store/store';
import { Provider } from 'react-redux';

//Styles
import './styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
