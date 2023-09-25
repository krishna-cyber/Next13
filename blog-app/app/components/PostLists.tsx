/** @format */

import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm"; // Optional: Enables GitHub Flavored Markdown

const PostLists = ({ content }: any) => {
  return (
    <div className='blog-post'>
      <ReactMarkdown remarkPlugins={[gfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default PostLists;
