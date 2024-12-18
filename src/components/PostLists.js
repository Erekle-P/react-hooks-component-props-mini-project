import React from "react";
import Post from "./Post";

function PostList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

export default PostList;
