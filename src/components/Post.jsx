import React, { useState, useEffect } from "react";
import "./components.css";
import { useParams } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../firebase";

const Post = ({ user }) => {
  const [name, setName] = useState("");
  const [addComment, setAddComment] = useState("");
  const [postsData, setPostsData] = useState({});
  const [comments, setComments] = useState([]);

  document.title = `${postsData.title} | Composite School Lamahi`;

  const { postid } = useParams();

  useEffect(() => {
    if (user) {
      setName(user.displayName);
    } else {
      setName("Unknown User");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!addComment) {
      alert("Please write something in the comment box to add it!");
    } else if (addComment.length <= 1) {
      alert(
        "Your comment must be at least 2 characters long. If it is necessary to comment only 1 character, use the period(.) symbol after your comment."
      );
    } else {
      await addDoc(collection(db, "posts", postid, "comments"), {
        name,
        comment: addComment,
      });
      setAddComment("");
    }
  };

  async function showPostData() {
    const postRef = doc(db, "posts", postid);
    const postSnap = await getDoc(postRef);

    setPostsData(postSnap.data());
  }

  useEffect(() => {
    showPostData();
  }, []);

  useEffect(() => {
    const commentsRef = collection(db, "posts", postid, "comments");
    const q = query(commentsRef);

    onSnapshot(q, (snapshot) => {
      const allComments = snapshot.docs.map((docs) => ({
        id: docs.id,
        ...docs.data(),
      }));

      setComments(allComments);
    });
  }, []);
  return (
    <div className="post container text-center">
      <h2>{postsData.title}</h2>
      <img src={postsData.url} alt={postsData.alt} />
      <p className="mt-5">{postsData.description}</p>
      <form>
        <div className="form-input">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="name"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="form-input">
          <textarea
            name="add-comment"
            id="add-comment"
            className="add-comment"
            value={addComment}
            onChange={(e) => setAddComment(e.target.value)}
            placeholder="Enter Your Comment"
            cols="100"
            rows="3"
          ></textarea>
        </div>
        <button onClick={(e) => handleSubmit(e)} className="btn-warning">
          Submit
        </button>
      </form>

      <div className="comments">
        <p className="comment">
          {comments.length === 0 ? (
            <h3>No comments. Be the first to comment in this post</h3>
          ) : (
            comments.map((comment) => {
              console.log(comment);
              return (
                <div key={Math.random() * 100}>
                  <b>{comment.name}:</b> <span>{comment.comment}</span>
                </div>
              );
            })
          )}
        </p>
      </div>
    </div>
  );
};

export default Post;
