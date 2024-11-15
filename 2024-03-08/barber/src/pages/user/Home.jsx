import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Home = () => {
    const [barbers, setBarbers] = useState([])
    const [ show, setShow ] = useState(false);
    const navigate = useNavigate();
    
const { barberId } = useParams(); 
  
    useEffect(() => {
      let data = JSON.parse(localStorage.getItem('barbers'));
      if (!data) 
      return;
      
      setBarbers(data);
    }, []);

// loading?? siaip visai reiketu

const handleBarberInfo = (barberId) => {

  navigate(`/barbers/${barberId}`);

}

    return (
      <>
        <h1 >Barberiai</h1>
        <table>
          <thead>
            <tr>
              <th>Vardas</th>
              <th>Nuotrauka</th>
              <th>Telefono numeris</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
 
          {barbers.map((data) =>   <tr key={data.id}>
            <td>{data.name}</td>
            <td><img src={data.photo} /></td>
            <td>{data.phone}</td>
            <td><button onClick={() => handleBarberInfo(data.id)}>Detalesnė informacija</button></td>
            </tr>
            )}
        </tbody>
        </table>
      </>
    );
  };

export default Home;


