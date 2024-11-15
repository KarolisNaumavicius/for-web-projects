
import { useContext } from 'react';
import MainContext from '../../context/Main.jsx';
import style from './NewComment.module.css';
import axios from 'axios';

const NewComment = ({ post_id, setLoading, fetchComments }) => {
  const { user } = useContext(MainContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Access the comment text from the form
    const text = e.target.text.value; // Get comment text from textarea
    const author = user._id;          // Use logged-in user's ID
    const post = post_id;              // Post ID to which the comment belongs

    try {
      // Send comment data as JSON
      const response = await axios.post('http://localhost:3000/comments', {
        text,        // The actual comment text
        author,      // Logged-in user ID
        post,        // Post ID the comment belongs to
      });

      console.log('Comment posted:', response.data);

      // Reset the form after submission
      e.target.reset();

      // Optional: Fetch and update the comments for this post (if needed)
      // fetchComments();
      if (fetchComments) {
        fetchComments();
      }

    } catch (err) {
      console.error('Error posting comment:', err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={style.commentForm} onSubmit={handleSubmit}>
      <textarea placeholder="Add a comment" name="text"></textarea>
      <button className={style.button} type="submit">Post</button>
    </form>
  );
};

export default NewComment;
