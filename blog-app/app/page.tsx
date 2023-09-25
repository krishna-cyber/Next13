/** @format */

import { getSortedPosts } from "@/lib/posts";
import PostLists from "./components/PostLists";
import { Container } from "@chakra-ui/react";

export default function Home() {
  const posts = getSortedPosts();
  return (
    <main>
      <Container maxW={"container.xl"}>
        <PostLists content={posts} />
      </Container>
    </main>
  );
}
