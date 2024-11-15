import { useState, useContext, useEffect } from 'react';
import SingleComment from '../single-comment/SingleComment.jsx';
import NewComment from '../new-comment/NewComment.jsx';
import style from './Comments.module.css';
import axios from 'axios';
import MainContext from '../../context/Main.jsx';

const Comments = ({ data, setShowComments }) => {
  const { user } = useContext(MainContext);
  const [commentsData, setCommentsData] = useState([]); // Default to empty array
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    if (loading || !data || !data._id) return;
    console.log('Fetching comments for post:', data._id); // Log for debugging
    setLoading(true);
    try {
      const resp = await axios.get(`http://localhost:3000/comments/${data._id}`);
      console.log('Response data:', resp.data); // Check the format of response data
      setCommentsData(Array.isArray(resp.data) ? resp.data : []); // Ensure it's always an array
    } catch (err) {
      console.error('Error fetching comments:', err);
    } finally {
      setLoading(false);
    }
  };

  // Use effect to fetch comments when the post (data) changes or is initially loaded
  useEffect(() => {
    fetchComments();
  }, [data]); // This will trigger every time the data changes

  return (
    <div className={style.comments}>
      <div className={style.close} onClick={() => setShowComments(false)}>
        <i className="bi bi-x"></i>
      </div>
      <div className={style.modal}>
        <div className={style.leftSide}>
          {data.photo && (
            <img
              src={`http://localhost:3000/uploads/${data.photo}`}
              className={style.mainPhoto}
              alt="Post"
            />
          )}
        </div>
        <div className={style.rightSide}>
          <div className={style.userInfo}>
            {data.author?.photo && (
              <img
                src={`http://localhost:3000/uploads/${data.author.photo}`}
                className={style.userPhoto}
                alt="User"
              />
            )}
            <strong className={style.userName}>{data.author?.user_name}</strong>
          </div>
          <div className={style.commentsList}>
            {commentsData.length === 0 ? (
              <div className={style.noComments}>No comments yet</div>
            ) : (
              commentsData.map(comment => (
                <SingleComment data={comment} key={comment._id} fetchComments={fetchComments} />
              ))
            )}
          </div>

          <div className={style.newComment}>
            {loading && <div className={style.loader}>Kraunasi...</div>}
            <NewComment post_id={data._id} setLoading={setLoading} fetchComments={fetchComments} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
