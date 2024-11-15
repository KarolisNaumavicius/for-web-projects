import style from './Post.module.css';
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments.jsx';
import MainContext from '../../context/Main.jsx';
import { useState, useContext } from 'react';
import axios from 'axios';

const Post = ({ data, setLoading }) => {
  const [showComments, setShowComments] = useState(false);
  const { user } = useContext(MainContext);


  const handleLike = (e) => {
    e.preventDefault()
    setLoading(true);

    axios.post('http://localhost:3000/likes/', {
      post: data._id,
      author: user._id,
    },
      {
        withCredentials: true, // Session cookies
      }

    )
    .then((resp) => {
      // After successfully liking the post, update the like count locally
      setLikeCount(prevCount => prevCount + 1);
    })
      .catch((err) => console.log("Axios error:", err))
      .finally(() => setLoading(false));
      window.location.reload();
  };

  const handleDelete = async (e) => {
e.preventDefault(); 
    try {
      await axios.delete(`http://localhost:3000/posts/${data._id}`, {
        withCredentials: true,
      });

      console.log(` ${data._id} istrintas`);
      window.location.reload();
    } catch (err) {
      console.log("Neveikia pasalinimo funkcija", err);
    } finally {
      setLoading(false);
    }

  }


  return (
    <div className={style.post}>
      <div className={style.user}>
        <div className={style.userPhoto}>
          <img src={`http://localhost:3000/uploads/${data.author.photo}`} />
        </div>
        <div className={style.userName}>
          <Link to={`/user/${data.author._id}`}>
            {data.author.user_name}
          </Link>
        </div>
      </div>
      <div className={style.photo}>
        <img src={`http://localhost:3000/uploads/${data.photo}`} />
      </div>
      <div className={style.actions}>
        <ul>
          <li>
            <button onClick={handleLike} className={style.iconButton}>
              <i className="bi bi-hand-thumbs-up"></i>
            </button>
          </li>
          <li>
            <button onClick={() => setShowComments(true)} className={style.iconButton} >
              <i className="bi bi-chat post-buttons"></i>
            </button>
          </li>
          {user._id === data.author._id && ( 
            <li>
              <button type="button" onClick={handleDelete} className={style.iconButton} >
                <i className="bi bi-trash post-buttons"></i>
              </button>
            </li>
          )}
        </ul>
      </div>
    
      <div className={style.likeCount}>
        <strong>{data.likes}</strong>
        <span>likes</span>
      </div>
      <div className={style.description}>
        <Link to={`/user/${data.author._id}`}>
          <strong className={style.userName}>
            {data.author.user_name}
          </strong>
        </Link>
        {data.description}
      </div>
      <div
        className={style.commentsLink}
        onClick={() => setShowComments(true)}
      >
        <span>View All Comments</span>
      </div>
      {showComments && (
        <Comments
          data={data}
          setShowComments={setShowComments}
        />
      )}
    </div>
  );
}

export default Post;