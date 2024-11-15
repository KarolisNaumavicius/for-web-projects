import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../context/Main.jsx';
import axios from 'axios';
import Post from '../components/post/Post.jsx';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { showNewPost, setUser } = useContext(MainContext);
  

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:3000/posts/')
            .then(resp => {
                setPosts(resp.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching posts:', err);
                if (err.response?.status === 401) {
                    setUser(false);
                    navigate('/login');
                }
                setLoading(false);
            });
    }, [showNewPost]);

    return (
        <>
            <h1>Instagram</h1>
            {loading ? (
                <p>Loading posts...</p>
            ) : posts.length > 0 ? (
                posts.map(post => (
                    <Post 
                        data={post} 
                        setLoading={setLoading} 
                        key={post._id} 
                    />
                ))
            ) : (
                <p>No posts found</p>
            )}
        </>
    );
}

export default Home;