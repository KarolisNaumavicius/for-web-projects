import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const BarberDetails = () => {
  const { barberId } = useParams();
  const barbers = JSON.parse(localStorage.getItem('barbers'));
  const barber = barbers.find((b) => b.id === parseInt(barberId));

  const navigate = useNavigate();


  console.log(barberId)

//   useEffect(() => {
//   if (!barber)
//    return <p>Barber Not Found!</p>;
// else{
//    navigate(`/barbers`);
// }
//   },[barberId]);


  const goHome = () => {

    console.log('mygtukas')

    navigate('/');


  }


  return (
    <>
      <h1>Barberiai</h1>
        <table className='next'>
          <thead>
            <tr>
              <th>Vardas</th>
              <th>Nuotrauka</th>
              <th>Telefono numeris</th>
              <th>Elektroninis paštas</th>
              <th>Valandinis įkainis</th>
              <th>Trumpas aprašymas</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          { barber && (<tr >
            <td>{barber.name}</td>
            <td><img src={barber.photo} /></td>
            <td>{barber.phone}</td>
            <td>{barber.email}</td>
            <td>{barber.payhour}</td>
            <td>{barber.about}</td>.
            <td><button onClick={goHome} >Back to home</button></td>
            </tr>
            )}
        </tbody>
        </table>
        </>
  );
};

export default BarberDetails;