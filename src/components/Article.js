import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {minutes && <p>Time to read: {minutes} minutes</p>} {/* Display minutes */}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
