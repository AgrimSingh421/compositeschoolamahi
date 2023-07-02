import React, { useState } from "react";
import "./components.css";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { NavLink } from "react-router-dom";

const AddAPost = ({ user }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [alt, setAlt] = useState("");
  const [url, setUrl] = useState("");
  const [createdAt, setCreatedAt] = useState(
    Timestamp.now().toDate().toString()
  );

  document.title = "Add A Post | Composite School Lamahi";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !url) {
      alert("Please fill all the fields proplerly!");
    } else if (title.length < 5) {
      alert("Title must be at least 5 characters long!");
    } else if (description.length < 20) {
      alert("Description must be at least 20 characters long!");
    } else {
      await addDoc(collection(db, "posts"), {
        createdBy: user.uid,
        title,
        description,
        alt,
        url,
        createdAt,
      })
        .then(() => {
          alert("Post created successfully!");
          window.location.replace("/");
        })
        .catch((err) => {
          alert(
            "An error occurred while creating the post. Please try again later."
          );
          console.log(err.message);
        });
    }
  };
  return (
    <div className="addapost container text-center">
      <h1 className="text-center" style={{ fontSize: "60px" }}>
        Add A Post
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            className="title"
            placeholder="Enter the Title of the Post"
            required
          />
        </div>
        <div className="form-input">
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            className="description"
            placeholder="Enter the Description of the Post"
            required
          ></textarea>
        </div>
        <div className="form-input">
          <input
            type="text"
            name="alt"
            value={alt}
            onChange={(e) => setAlt(e.target.value)}
            id="alt"
            className="alt"
            placeholder={`Enter the Alternate Text for the Image*`}
            required={false}
          />
          <h6>
            *When the device is not showing the image for any reason, alternate
            text will be shown instead. <i>(It is optional)</i>
          </h6>
        </div>
        <div className="form-input">
          <input
            type="url"
            name="url"
            id="url"
            className="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={`Enter image link**`}
            required
          />
          <h6>
            <NavLink to="/faqs">
              **Click here to learn how to generate a link of an image.
            </NavLink>
          </h6>
        </div>
        <button className="btn-warning">Submit</button>
      </form>
    </div>
  );
};

export default AddAPost;
