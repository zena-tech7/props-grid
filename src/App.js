import './styles.css';
import Employees from './employees';

function App() {
  return (
    <div className="App">
      <Employees name={employes[0].name} />
      <Employees name={employes[1].name} />
      <Employees name={employes[2].name} />
      <Employees name={employes[3].name} />
    </div>
  );
}

export default App;
