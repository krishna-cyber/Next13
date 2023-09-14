/** @format */

import React from "react";

type props = Promise<UserPost[]>;

const UserPosts = async ({ promise }: props) => {
  const posts = await promise;

  const content = posts.map((post) => {
    return (
      <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
    );
  });
  return content;
};

export default UserPosts;
