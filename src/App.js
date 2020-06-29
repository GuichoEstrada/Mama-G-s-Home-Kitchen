import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const PastasPage = () => (
  <div>
    <h1>PASTAS PAGE</h1>
  </div>
)

const MainsPage = () => (
  <div>
    <h1>MAINS PAGE</h1>
  </div>
)

const DessertsPage = () => (
  <div>
    <h1>DESSERTS PAGE</h1>
  </div>
)

const ReadytoCookPage = () => (
  <div>
    <h1>READY TO COOK PAGE</h1>
  </div>
)
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/pastas' component={PastasPage} />
        <Route path='/mains' component={MainsPage} />
        <Route path='/desserts' component={DessertsPage} />
        <Route path='/readytocook' component={ReadytoCookPage} />
      </Switch>
    </div>
  );
}

export default App;