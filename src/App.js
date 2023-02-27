import React, { memo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import PDAppFooter from './components/app-footer';
import PDAppHeader from './components/app-header';
import CustomRouter from './router';

const App = memo(() => {
  return (
    <BrowserRouter>
      <PDAppHeader/>
      <CustomRouter/>
      <PDAppFooter/>
    </BrowserRouter>
  )
})

export default App