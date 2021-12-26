import {Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import MiniApps from './pages/MiniApps';
import Palindrome from './pages/palindrome';
import LeapYear from './pages/LeapYear';
import ReverseWords from './pages/ReverseWords';
import Fibonacci from './pages/Fibonacci';
import FizzBuzz from './pages/FizzBuzz';
import JsonManipulation from './pages/JsonManipulation';


function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/app">
            <MiniApps/>
        </Route>
        <Route path="/palindrome">
            <Palindrome/>
        </Route>
        <Route path="/leap-year">
            <LeapYear/>
        </Route>
        <Route path="/reverse-word">
            <ReverseWords/>
        </Route>
        <Route path="/fibonacci">
            <Fibonacci/>
        </Route>
        <Route path="/fizzbuzz">
            <FizzBuzz/>
        </Route>
        <Route path="/json-manipulation">
            <JsonManipulation/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
