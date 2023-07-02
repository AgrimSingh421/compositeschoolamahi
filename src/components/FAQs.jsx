import React from "react";

const FAQs = () => {
  return (
    <div className="container text-center">
      <h2>How to generate image link?</h2>
      <div>
        <p>
          <b>Step 1: </b>{" "}
          <a href="https://postimages.org/" target="_blank">
            Click on this link
          </a>{" "}
          to go to PostImage.
        </p>
        <p>
          <b>Step 2: </b> <span>Click on the "Choose Images" button.</span>
        </p>
        <p>
          <b>Step 3: </b>{" "}
          <span>
            Select your desired image you want to generate the link of.
          </span>
        </p>
        <p>
          <b>Wait for the website to generate the link.</b>
        </p>
        <p>
          <b>Step 4:</b>{" "}
          <span>
            Copy the link beside the "Direct link" text and paste the link in
            the text box.
          </span>
        </p>
      </div>
    </div>
  );
};

export default FAQs;
