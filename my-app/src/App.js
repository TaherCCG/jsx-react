// import logo from './logo.svg';
import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import NavBarSimple from './components/NavbarSimple';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <NavBarSimple/>
      <Sidebar/>
      {/* <FunctionalGreeting/>
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="T" age="46" />
      <StatefulGreeting greeting="Im Stateful class!" />
      <StatefulGreetingWithCallback greeting="Im Stateful class With Callback!" />
      <StatefulGreetingWithPrevState greeting="Im Stateful class With Previous State!" /> */}

    </div>
  );
}

export default App;
