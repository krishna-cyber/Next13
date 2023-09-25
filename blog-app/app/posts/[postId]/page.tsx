/** @format */
import { getSortedPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

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
const page = ({ params }: { params: { postId: string } }) => {
  const { postId } = params;
  const posts = getSortedPosts();

  if (!posts.find((post) => post.id == postId)) {
    return notFound();
  }

  return <div>hello</div>;
};

export default page;
