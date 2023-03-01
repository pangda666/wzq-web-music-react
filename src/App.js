import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PDAppFooter from './components/app-footer';
import PDAppHeader from './components/app-header';
import CustomRouter from './router';
import store from './store';

const App = memo(() => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PDAppHeader/>
        <CustomRouter/>
        <PDAppFooter/>
      </Provider>
    </BrowserRouter>
  )
})

export default App