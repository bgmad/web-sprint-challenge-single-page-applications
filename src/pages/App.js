import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Form from './Form';
import Home from './Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/pizza'>
          <Form/>
        </Route>
      </BrowserRouter>
    </div>
  );
};
export default App;
