/** @format */

import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm"; // Optional: Enables GitHub Flavored Markdown

const BlogPost = ({ content }) => {
  return (
    <div className='blog-post'>
      <ReactMarkdown remarkPlugins={[gfm]} children={content} />
    </div>
  );
};

export default BlogPost;
