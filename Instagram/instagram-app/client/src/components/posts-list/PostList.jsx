import { useNavigate } from 'react-router-dom';
import style from './PostList.module.css';

const PostsList = ({ posts }) => {
    const navigate = useNavigate();

    const handlePostClick = (id) => {
        navigate(`/posts/${id}`);
    };

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id} onClick={() => handlePostClick(post.id)}>
                    <img
                        src={post.image}
                        alt={post.title}
                        style={{ width: '200px', height: '150px', cursor: 'pointer' }}
                    />
                </div>
            ))}
        </div>
    );
};

export default PostsList;