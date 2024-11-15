import { useState, useEffect } from 'react';



const Post = () => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [show, setshow] = useState('');


    useEffect(() => {

        let data = localStorage.getItem('data');

        if (!data)
            return;

        let newData = JSON.parse(data);

        setPosts(newData);

    }, [loading]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Mygtukas paspaustas');

        const formData = new FormData(e.target);

        const data = {};

        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }

        console.log(data)

        let localData = localStorage.getItem('data');
        console.log(localData)

        if (localData) {

            try {
                let convertedData = JSON.parse(localData);
                convertedData.push(data);
                let JSONdata = JSON.stringify(convertedData);
                localStorage.setItem('data', JSONdata);
            }
            catch (error) {
                console.log(error)
            }
        }
        else {
            localStorage.setItem('data', JSON.stringify([data]));
        }

        setLoading(!loading);

    }

    const removePost = (index) => {
        posts.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(posts))
        setPosts([...posts]);
    }


    return (
        <>
            <table>
                <tbody>
                    <div className='grid-container'>
                    {posts.map((data, index) =>
                        <tr 
                        style={{ maxWidth: 400, maxHeight: 800, overflow:'hidden' }}
                        key={index}>
                            <td><img src={data.authorImage}
                            /></td>
                            <td> <h5>  <span className="theme-class">{data.theme}</span>
  <span className="date-class">{data.date}</span></h5></td>
                            <td ><h3>{data.title}</h3></td>
                            <td ><p>{data.paragraph}</p></td>
                            <td><h6>{data.nameAndSurname}</h6></td>
                            <td><p>{data.jobTitle}</p></td>
                            {/* <button className="btn btn-danger" onClick={removePost} >Delete</button> */}
                        </tr>)} 
                        </div>
                </tbody>
            </table>
            
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="theme">Theme</label>
                <input type="text" name="theme" className="form-control" />
                <label htmlFor="theme">Date</label>
                <input type="text" name="date" className="form-control" />
                <label htmlFor="theme">Title</label>
                <input type="text" name="title" className="form-control" />
                <label htmlFor="theme">Paragraph</label>
                <input type="text" name="paragraph" className="form-control" />
                <label htmlFor="theme">Author Image</label>
                <input type="photo" name="authorImage" className="form-control" />
                <label htmlFor="theme">Name and Surname</label>
                <input type="text" name="nameAndSurname" className="form-control" />
                <label htmlFor="theme">Job Title</label>
                <input type="text" name="jobTitle" className="form-control" />
                <button className="btn btn-primary" >prideti</button>
            </form>

        </>

    )

}
export default Post;