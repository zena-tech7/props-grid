import './styles.css';

function Employees({ name, position, email, photo }) {
  return (<>
      <div class='card'>
          <img src={Employees.photo} alt="" />
          <div>{Employees.name}</div>
          <div>{Employees.photo}</div>
          <a href={Employees.email}></a>
      </div>
      </>
  );
}

export default Employees;