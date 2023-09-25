/** @format */

import { Card, CardBody, Divider } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import moment from "moment";

import gfm from "remark-gfm"; // Optional: Enables GitHub Flavored Markdown

type Props = {
  post: BlogPost;
};

const Post = ({ post }: Props) => {
  const { id, title, date } = post;

  console.log(post);
  return (
    <>
      <li className=' list-none mt-8 text-lg font-semibold text-slate-200  '>
        <Link href={`${id}`}>
          <h3>{title}</h3>
          <p className=' text-sm'>Posted: {moment(date).fromNow()}</p>
        </Link>
      </li>
      <Divider />
    </>
  );
};

export default Post;
