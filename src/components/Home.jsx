import React, { useState, useEffect } from "react";
import "./components.css";
import { NavLink } from "react-router-dom";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import Card from "./Card";
import img1 from "../img/gallery-img-1.png";
import img2 from "../img/gallery-img-2.jpg";
import img3 from "../img/gallery-img-3.jpg";
import img4 from "../img/gallery-img-4.jpg";

const Home = () => {
  const [posts, setPosts] = useState([]);

  document.title = "Home | Composite School Lamahi";

  useEffect(() => {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, orderBy("createdAt", "desc"));

    onSnapshot(q, (snapshot) => {
      const allPosts = snapshot.docs.map((docs) => ({
        id: docs.id,
        ...docs.data(),
      }));

      setPosts(allPosts);
    });
  }, []);
  return (
    <div className="home">
      <div className="links-div text-center">
        <h2>External Links</h2>
        <NavLink to="https://prernaup.in/" target="_blank" className="link1">
          Prerna UP
        </NavLink>
        <NavLink
          to="https://ehrms.upsdc.gov.in"
          target="_blank"
          className="link2"
        >
          Manav Sampada
        </NavLink>
      </div>
      <div className="posts-div text-center">
        <h2>Posts by Teachers</h2>
        {posts.length === 0 ? (
          <h3>No posts found</h3>
        ) : (
          posts.map((post) => {
            return (
              <Card
                title={post.title}
                description={post.description}
                alt={post.alt}
                url={post.url}
                link={post.id}
              />
            );
          })
        )}
      </div>
      <div className="gallery-div text-center">
        <h2>Gallery</h2>
        <div className="gallery">
          <img src={img1} alt="Gallery" />
          <img src={img2} alt="Gallery" />
          <img src={img3} alt="Gallery" />
          <img src={img4} alt="Gallery" />
        </div>
      </div>
    </div>
  );
};

export default Home;
