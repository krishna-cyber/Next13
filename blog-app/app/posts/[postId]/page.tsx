/** @format */
import { getPostData, getSortedPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import gfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Card, CardBody, Container } from "@chakra-ui/react";

export async function generateMetadata({
  params,
}: {
  params: { postId: string };
}) {
  const posts = getSortedPosts();
  const { postId } = params;

  const post = posts.find((post) => post.id == postId);

  if (!post) {
    return {
      title: "page not found   ",
    };
  }
  return {
    title: params.postId,
    description: params.postId,
  };
}
const page = async ({ params }: { params: { postId: string } }) => {
  const { postId } = params;
  const postContent = await getPostData(postId);
  const posts = getSortedPosts();
  if (!posts.find((post) => post.id == postId)) {
    return notFound();
  }

  return (
    <>
      <Container maxW={"container.xl"} color={"white"} fontSize={"xl"}>
        {" "}
        <Card>
          <CardBody>
            <h1 className=' text-center text-xl font-medium mt-2'>
              {postContent.data.title}
            </h1>
            <p className='text-center'>Posted on: {postContent.data.date}</p>
          </CardBody>
        </Card>
        <ReactMarkdown className=' mt-4' remarkPlugins={[gfm]}>
          {postContent.content}
        </ReactMarkdown>
      </Container>
    </>
  );
};

export default page;
