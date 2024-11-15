import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const Admin = () => {
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

const removeBarber = (barberId) => {

    console.log('SS')
    const updatedBarbers = [...barbers];
    const barberIndex = updatedBarbers.findIndex(barber => barber.id === barberId);

    if(barberIndex !== -1){ 
        updatedBarbers.splice(barberIndex, 1); // nuo indexo
        // updatedBarbers.splice((barberId -1), 1);
        setBarbers(updatedBarbers); 
  localStorage.setItem('barbers', JSON.stringify(updatedBarbers))

    }

}


const newBarber = () => {

    navigate(`/admin/new-barber`)
  
}

const editBarber = (barberId) => {

    navigate(`/admin/edit-barber/${barberId}`)
  
}



    return (
      <>
        <h1>Barberiai</h1>
        <table>
          <thead>
            <tr>
              <th>Vardas</th>
              <th>Nuotrauka</th>
              <th>Telefono numeris</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
 
          {barbers.map((data) =>  <tr key={data.id}>
            <td>{data.name}</td>
            <td><img src={data.photo} /></td>
            <td>{data.phone}</td>
            <td><button onClick={() => handleBarberInfo(data.id)}>Detalesnė informacija</button></td>
            <td><button onClick={() => editBarber(data.id)}>Redaguoti</button></td>
            <td><button onClick={() => removeBarber(data.id)}>Ištrinti</button></td>

            </tr>
            )}
        </tbody>
        </table>
        <button style={{marginTop: 40, marginLeft: 350}} onClick={newBarber}>Pridėti barberį</button>
     
      </>
    );
  };

export default Admin;


