/** @format */
import { getSortedPosts } from "@/lib/posts";
import React from "react";
import Post from "./Post";
import { Container } from "@chakra-ui/react";

const Posts = () => {
  const posts = getSortedPosts();
  return (
    <>
      <p className=' text-2xl font-bold mt-4 text-white'>Blog Posts:</p>
      {posts.map((item) => {
        return <Post post={item} key={item.id} />;
      })}
    </>
  );
};

export default Posts;
