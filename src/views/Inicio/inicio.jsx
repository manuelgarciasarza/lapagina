import { useState } from "react";
import style from "./inicio.module.css";
import postsData from "../../utils/users";
import avatar from "../../img/avatar.jpg";

function Inicio() {
  const [posts, setPosts] = useState(postsData);
  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (newPost.trim() === "") return;
    const post = {
      id: Date.now(),
      user: "Dafne Ebertz",
      time: "Just now",
      content: newPost,
      comments: 0,
    };
    setPosts([post, ...posts]);
    setNewPost("");
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>LA PÁGINA</h1>
      <div className={style.sidebar}>
        <div className={style.card}>
          <h2 className={style.username}>Dafne Ebertz</h2>
          <div className={style.avatarWrapper}>
            <img src={avatar} alt="avatar" className={style.avatar} />
          </div>
          <p className={style.history}>View your history</p>
        </div>
      </div>
      <div className={style.feed}>
        <div className={style.newPost}>
          <textarea
            maxLength={200}
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className={style.textarea}
          />
          <button onClick={handlePost} className={style.postButton}>
            Post
          </button>
        </div>
        <div className={style.filters}>
          <select className={style.select}>
            <option value="">Sort by</option>
            <option value="comments">Comments</option>
            <option value="new">New</option>
          </select>
          <select className={style.select}>
            <option value="">Country</option>
            <option value="argentina">Argentina</option>
            <option value="mexico">Mexico</option>
            <option value="usa">USA</option>
            <option value="spain">Spain</option>
          </select>
        </div>

        {posts.map((post) => (
          <div key={post.id} className={style.postCard}>
            <h3 className={style.postUser}>{post.user}</h3>
            <p className={style.postTime}>{post.time}</p>
            <p className={style.postContent}>{post.content}</p>
            <p className={style.postComments}>{post.comments} comments</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio;
