import React from 'react';
import './style.css';
import Employee from './components/Employee';
import { EMPLOYEES } from './data';

function App() {
  return (
    <div className="container">
      <h1>Notre Équipe de Choc</h1>
      <div className="employee-grid">
        <Employee
          name={EMPLOYEES[0].name}
          position={EMPLOYEES[0].position}
          email={EMPLOYEES[0].email}
          photo={EMPLOYEES[0].photo}
        />
        <Employee
          name={EMPLOYEES[1].name}
          position={EMPLOYEES[1].position}
          email={EMPLOYEES[1].email}
          photo={EMPLOYEES[1].photo}
        />

        {/* Deux derniers employés : Spread Operator */}
        <Employee {...EMPLOYEES[2]} />
        <Employee {...EMPLOYEES[3]} />
      </div>
    </div>
  );
}

export default App;
