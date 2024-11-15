import { useNavigate } from 'react-router-dom';

const NewBarber = () => {
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = {};
  
      for (const input of formData.entries()) {
        data[input[0]] = input[1];
      }
  
      const localData = JSON.parse(localStorage.getItem('barbers')) || [];
      if(localData) {
      data.id = localData.length ? localData[localData.length - 1].id + 1 : 1;
      localData.push(data);
      localStorage.setItem('barbers', JSON.stringify(localData));
      }
      else {
        localStorage.setItem('data', JSON.stringify([data]))
      }

      navigate('/admin')
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
                <button className="btn btn-primary blue-button">Pridėti</button>
            </form>

        </>
    );
}

export default NewBarber;
