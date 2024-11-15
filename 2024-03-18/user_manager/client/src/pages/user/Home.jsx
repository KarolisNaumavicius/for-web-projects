import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate();

  
    useEffect(() => {
      const localData = JSON.parse(localStorage.getItem('data'));

      if(localData)
        setData(localData);
    })

useEffect(() => {
  const fetchData = async () => {
  
    try {
      const response = await axios.get('http://localhost:3000/users');
      setData(response.data); // Atnaujiname data state'ą gautais duomenimis
    } catch (error) {
      console.error(error);
    }
  
  };

  fetchData();
}, []);
    

const handleUsersInfo = (id) => {

  navigate(`/users/${id}`);

}
    return (
      <>
        <h1 >Vartotojai</h1>
        <table>
          <thead>
            <tr>
              <th>Vardas</th>
              <th>Pavardė</th>
              <th>Elektroninis paštas</th>
              <th>Slaptažodis</th>
              <th>Nuotrauka</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {data.map((item) => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td><img src={`http://localhost:3000/files/${item.photo}`} /></td>
            <td><button onClick={() => handleUsersInfo(item._id)}>Detalesnė informacija</button></td>
          </tr>
        ))}
        </tbody>
        </table>
      </>
    );
  };

export default Home;


