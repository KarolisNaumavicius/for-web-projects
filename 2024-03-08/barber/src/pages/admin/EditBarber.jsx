import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBarber = () => {
    // const navigate = useNavigate();
    const { barberId } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {};
      
        for (const input of formData.entries()) {
          data[input[0]] = input[1];
        }
      
        const barbers = JSON.parse(localStorage.getItem('barbers'));
        const updatedBarberIndex = barbers.findIndex((b) => b.id === parseInt(barberId));
      
        if (updatedBarberIndex !== -1) { // Check if barber found
          barbers[updatedBarberIndex] = { ...barbers[updatedBarberIndex], ...data }; // Update barber object
          localStorage.setItem('barbers', JSON.stringify(barbers));
        } else {
          // Handle case where barber not found (optional)
          console.error('Barber not found!');
        }
      };
  
    return (
      <>
       <h2>Naujas Barberis</h2>
        <form onSubmit={handleSubmit}>
            <label>Vardas Pavardė</label>
            <input
              type="text"
              className="form-control"
              name="name"
              required
            />
      
            <label>Nuotrauka</label>
            <input
              type="text"
              className="form-control"
              name="photo"
              required
            />

            <label>Telefono numeris</label>
            <input
              type="number"
              className="form-control"
              name="phone"
              required
            />
            <label>Elektroninis paštas</label>
            <input
              type="text"
              className="form-control"
              name="email"
              required
            />
            <label>Valandinis įkainis Eurais</label>
            <input
              type="number"
              className="form-control"
              name="payhour"
              required
            />
            <label>Trumpas aprašymas</label>
            <input
              type="text"
              className="form-control"
              name="about"
              required
            />
                <button className="btn btn-primary">Pridėti</button>
            </form>
        </>
    );
}

export default EditBarber;

