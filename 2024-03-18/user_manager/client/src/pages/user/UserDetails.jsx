
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const UserDetails = () => {
  const users = JSON.parse(localStorage.getItem('users'));
  const user = users.find((b) => b.id === parseInt(id));

  const navigate = useNavigate();


  console.log(id)

  const goHome = () => {

    console.log('mygtukas')

    navigate('/');


  }


  return (
    <>
      <h1>Vartotojai</h1>
        <table className='next'>
          <thead>
            <tr>
              <th>Vardas</th>
              <th>Pavardė</th>
              <th>Elektroninis paštas</th>
              <th>Slaptažodis</th>
              <th>Nuotrauka</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          { user && (<tr >
            <td>{user.name}</td>
            <td><img src={user.last_name} /></td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.photo}</td>
            <td><button onClick={goHome} >Back to home</button></td>
            </tr>
            )}
        </tbody>
        </table>
        </>
  );
};

export default UserDetails;