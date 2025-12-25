import React from 'react';
import '../style.css';

const Employee = ({ name, position, email, photo }) => {
  return (
    <div className="employee-card">
      <img src={photo} alt={`${name} profile`} className="profile-img" />
      <h2 className="employee-name">{name}</h2>
      <p className="employee-position">{position}</p>
      <a href={`mailto:${email}`} className="email-link">
        Contacter
      </a>
    </div>
  );
};

export default Employee;
