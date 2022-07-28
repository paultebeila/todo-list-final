import './App.css';

import React, { useState } from 'react';
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signup';
import ForgotPass from './components/forgotPassword';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const [transection, setTransection]=useState([]);

  const addTransaction=((plan, priority)=>{
    console.log(transection)
    setTransection((items)=>[...items, {
      plan:plan,
      priority:priority
    }])
    
  })
  return (

    

    <Router>
      <Switch>
        <Route  exact path="/" component={Login}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
        <Route path="/forgotPassword" component={ForgotPass}></Route>

        <Route path="/home">
        <Home list={transection} add={addTransaction} />
        </Route>
      </Switch>
    </Router>
    // <div>
    //   <Home list={transection} add={addTransaction} />
    // </div>
  );
}

export default App;


