import styles from './UserPosts.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Comments from '../comments/Comments.jsx';

const UserPosts = ({ data }) => {
    const [showComments, setShowComments] = useState(false);
    console.log(data);

    const navigate = useNavigate();

    const gothere = async (id) => {

        navigate(`/posts/${id}`); 
    };

    return (
        <div className={styles.posts}>
            {data.map(post =>
                <div className='style.post' key={post._id}>
                    <img onClick={() => gothere(post._id)} src={'http://localhost:3000/uploads/' + post.photo} />
                </div>)}

                s

        </div>
    )
}

export default UserPosts;