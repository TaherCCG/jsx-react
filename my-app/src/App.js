// import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="Im Stateful prop!" />
      <FunctionalGreeting/>
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="T" age="46" />
    </div>
  );
}

export default App;
