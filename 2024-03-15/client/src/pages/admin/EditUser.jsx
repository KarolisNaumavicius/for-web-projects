import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {

    const [form, setForm] = useState({});
  const [message, setMessage] = useState('');
    // const navigate = useNavigate();
    const { id } = useParams();
    

    useEffect(() => {

      // fetch('http://localhost:3000/users/' + id)
      // .then(resp => resp.json())
      // .then(resp => {
      //   console.log('Pavyko');
      //   setForm(resp)

//AXIOS uzklausos formavimas
           axios.get('http://localhost:3000/users/' + id)
          .then(resp => setForm(resp.data))
          .then(err => console.log(err.response.data))
    }
      ,[]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        axios.put('http://localhost:3000/users/' + id, formData)
        .then(resp => Navigate('/admin'))
        .then(err => setMessage(err.response.data))
    }
   
    return (
      <>
       <h2>Vartotojo redagavimas</h2>
       {message &&  <div className='alert alert-danger'>{message}</div>}
        <form onSubmit={handleSubmit}>
            <label>Vardas</label>
            <input
              type="text"
              className="form-control"
              name="name"
              required
              //reiksmes atvaizdavimas laukelyje
              defaultValue={form.name}
            />
      
            <label>Pavardė</label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              defaultValue={form.last_name}
            />

            <label>Elektroninis paštas</label>
            <input
              type="email"
              className="form-control"
              name="text"
              defaultValue={form.email}
            />
            <label>Slaptažodis</label>
            <input
              type="password"
              className="form-control"
              name="password"              
              defaultValue={form.password}
            />
            <label>Nuotrauka</label>
            <input
              type="file"
              className="form-control"
              name="photo"              
            />
                <button className="btn btn-primary">Pridėti</button>
            </form>
        </>
    );
}

export default EditUser;

