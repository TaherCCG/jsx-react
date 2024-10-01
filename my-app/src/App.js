// import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting/>
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="T" age="46" />
      <StatefulGreeting greeting="Im Stateful class!" />
      <StatefulGreetingWithCallback greeting="Im Stateful class With Callback!" />

    </div>
  );
}

export default App;
