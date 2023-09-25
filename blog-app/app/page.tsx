/** @format */

import { getSortedPosts } from "@/lib/posts";
import { Container } from "@chakra-ui/react";
import Posts from "./components/Posts";

export default function Home() {
  const posts = getSortedPosts();
  return (
    <main>
      <Container maxW={"container.xl"}>
        <Posts />
      </Container>
    </main>
  );
}
