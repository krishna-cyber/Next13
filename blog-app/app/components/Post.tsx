/** @format */

import { Divider } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import moment from "moment";

type Props = {
  post: BlogPost;
};

const Post = ({ post }: Props) => {
  const { id, title, date } = post;

  return (
    <>
      <li className=' list-none mt-8 text-lg font-semibold text-slate-200  '>
        <Link href={`posts/${id}`}>
          <h3>{title}</h3>
          <p className=' text-sm'>Posted: {moment(date).fromNow()}</p>
        </Link>
      </li>
      <Divider />
    </>
  );
};

export default Post;
