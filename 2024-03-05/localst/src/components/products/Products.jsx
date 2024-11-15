import { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    // const [object, subObject ] = useState ({});

    // kad atsinaujinimu(refresh) nevyktu

    useEffect(() => {
        // duomenu paemimas is localstorage
        // patikrinimas ar negautas null rezultatas
        // Konvertuojami duomenys is JSON stringo

        let data = localStorage.getItem('data');

        if (!data)
            return;

        data = JSON.parse(data)

        //nurodom prie state informacija
        setProducts(data)
    }, [loading])


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {};

        for (const input of formData.entries()) {
            data[input[0]] = input[1];
        }

        const localData = localStorage.getItem('data');
        if (localData) {
            //Papildymas
            //Veiksmu seka: 
            // 1. Konvertuojame stringa is JSON formato
            // 2. Papildome masyva
            // 3. Konvertuojame masyva atgal i JSON stringa
            // 4. Issaugojame stringa localStorage
            let convertedData = JSON.parse(localData);
            convertedData.push(data);
            convertedData = JSON.stringify(convertedData);
            localStorage.setItem('data', convertedData);
        } else {
            localStorage.setItem('data', JSON.stringify([data]));

        }

        setLoading(!loading)

    }

    const removeProduct = (index) => {

        products.splice(index, 1);

        localStorage.setItem('data', JSON.stringify(products));

        setProducts([...products]);

        setLoading(!loading);


    }




    // console.log(data)
    return (
        <>
        <h1 className='align-items-center justify-content-between text-center' style={{marginTop: 10}}>Products</h1>
            <button
            className='btn btn-success justify-content-between align-items-center' 
            onClick={() => setShowForm(!showForm)} style={{marginTop: 20, marginBottom: 20}}>
                {showForm ? 'Hide Product Form' : 'Show Product Form' }
            </button>
            
       

            {/* jeigu objekto ieskom ar bent vienas egzistuoja, vienas is budu

            {
                JSON.stringify(object) === '{}' ? 'True' : 'False'
            } */}

            {products.length > 0 ?
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Photo</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((data, index) =>
                            <tr key={index}>
                                <td>{data.title}</td>
                                <td><img src={data.photo} style={{ maxWidth: 100 }} /></td>
                                <td>{data.price}</td>
                                <td>{data.qty}</td>
                                <button className="btn btn-danger" onClick={() => removeProduct(index)}>
                                    Delete</button>
                            </tr>
                        )}
                    </tbody>
                </table>
                :
                <h2 style={{marginTop: 20}}>No products</h2>
            }
            {showForm && 
            <>
            <form onSubmit={handleSubmit} >
                <div className="mb-3" >
                    <label htmlFor="">Produkto pavadinimas </label>
                    <input type="text"
                        className="form-control"
                        name="title"
                    />
                </div>
                <div className="mb-3" >
                    <label htmlFor="">Produkto nuotrauka </label>
                    <input type="text"
                        className="form-control"
                        name="photo"
                    />
                </div>
                <div className="mb-3" >
                    <label htmlFor="">Produkto kaina </label>
                    <input type="text"
                        className="form-control"
                        name="price"
                    />
                </div>
                <div className="mb-3" >
                    <label htmlFor="">Produkto kiekis </label>
                    <input type="text"
                        className="form-control"
                        name="qty"
                    />
                </div>
                <button className="btn btn-primary" >Pridėti</button>
            </form>
           </> }
        </>
    )
}

export default Products;
