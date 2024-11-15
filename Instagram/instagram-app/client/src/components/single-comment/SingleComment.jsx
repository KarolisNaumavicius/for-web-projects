import style from './SingleComment.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Pridėtas axios importas
import { useContext } from 'react';
import MainContext from '../../context/Main.jsx';

const SingleComment = ({ data, fetchComments }) => {
  const { user } = useContext(MainContext);

  const handleDelete = async () => {
    
    
    try {
      await axios.delete(`http://localhost:3000/comments/${data._id}`, {
        withCredentials: true,
      });
      fetchComments(); // Refresh comments after deletion
    } catch (err) {
      console.error('Error deleting comment:', err);
    }
  };

  return (
    <div className={style.comment}>
      <div className={style.userPhoto}>
        {data?.author?.photo && (
          <img src={`http://localhost:3000/uploads/${data.author.photo}`} />
        )}
      </div>
      <div>
        <div className={style.content}>
          {data?.author?.user_name && (
            <Link to={'/user/' + data.author._id}>
              <strong>{data.author.user_name}</strong>
            </Link>
          )}
          <span>{data.text}</span>
        </div>
        <div className={style.commentDate}>
          {data.created_at && new Date(data.created_at).toLocaleDateString()}
        </div>
      </div>
      {user?._id === data.author._id && (
        <button onClick={handleDelete} className={style.deleteButton}>Delete</button>
      )
      }
    </div>
  );
};

export default SingleComment;

