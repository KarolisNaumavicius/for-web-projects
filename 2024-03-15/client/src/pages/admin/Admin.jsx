import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';



const Admin = () => {
   const [data, setData] = useState([]);
   const [loader, setLoader] = (false);
    const navigate = useNavigate();
    
  useEffect (() => { 
    // duomenu paemimas is serverio
    fetch('https://localhost:3000/users')
    .then(resp => resp.json())
    // duomenu priskyrimas prie state'o
    .then(resp => setData(resp));
  }, [loader]);

// istrynimo funckija

const handleDelete = (id) => {
console.log(id);

fetch('http://localhost:3000/users/' + id, {
  method: 'DELETE'
})
.then(resp => resp.text())
.then(resp => {
  console.log(resp)
  setLoader(!loader);
})

}

const newUser = (e) => {

    navigate(`/admin/new-user`)
  
}

const editUser = (id) => {

    navigate(`/admin/edit-user/${id}`)
  
}

const handleUsersInfo = (id) => {

  navigate(`/users/${id}`);

}

    return (
      <>
        <h1>Vartotojai</h1>
        <table>
          <thead>
            <tr>
              <th>Vardas</th>
              <th>Pavardė</th>
              <th>Elektroninis Paštas</th>
              <th>Slaptažodis</th>
              <th>Nuotrauka</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
 
          {data.map((item) =>  
          <tr key={item._id}>
            <td>{data.name}</td>
            <td>{data.last_name} </td>
            <td>{data.email}</td>
            <td>{data.password}</td>
            <td> <img src={data.photo} /> </td>
            <td><button onClick={() => handleUsersInfo(item._id)}>Detalesnė informacija</button></td>
            <td><button onClick={() => editUser(item._id)}>Redaguoti</button></td>
            <td><button onClick={() => handleDelete(item_id)}>Ištrinti</button></td>

            </tr>
            )}
        </tbody>
        </table>
        <button style={{marginTop: 40, marginLeft: 350}} onClick={newUser}>Pridėti Vartotoją</button>
     
      </>
    );
  };

export default Admin;


