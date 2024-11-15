import { useNavigate } from 'react-router-dom';


const newUser = () => {

  const handleSubmit = async (e) => {
    // peradresavimo (redirect) kurimas
    e.preventDefault();

    //Formos duomenu persiuntimas POST metodu
    fetch('http://localhost:3000/users/', {
      method: 'POST',
      body: new FormData(e.target)
    })
      .then(resp => resp.text())
      .then(resp => {
        console.log(resp)
        navigate('/admin');
      });
  };



  return (
      <>
      <h2>Naujas Vartotojas</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Vardas</label>
          <input
            type="text"
            className="form-control"
            name="name"   
          />
        </div>
        <div className="mb-3" >
          <label>Pavardė</label>
          <input
            type="text"
            className="form-control"
            name="last_name"
          />
          </div>
          <div className="mb-3" >
            <label>Elektroninis paštas</label>
            <input
              type="email"
              className="form-control"
              name="text"
            />
          </div>
          <div className="mb-3" >
            <label>Slaptažodis</label>
            <input
              type="password"
              className="form-control"
              name="password"
            />
            </div>
            <div className="mb-3">
              <label>Nuotrauka</label>
              <input
                type="text"
                className="form-control"
                name="photo"
              />
            </div>
            <button className="btn btn-primary blue-button">Pridėti</button>
          </form>
        </>
        )
}

        export default newUser;
