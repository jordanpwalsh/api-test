import React, { Fragment, useState } from 'react';
import './App.css';
import { One, Two } from './components/tests'

function App() {
  return (
    <Fragment>
      <One></One>
      <Two propTest="jordan"></Two>
    </Fragment>
  );
}

export default App;
