/** @format */

import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPost";
import UserPosts from "./components/UserPosts";
import { Suspense } from "react";
import type { Metadata, ResolvingMetadata } from "next";
import getAllUsers from "@/lib/getAllUsers";

type params = {
  params: {
    userId: string;
  };
};

//generating dynamic metadata
export async function generateMetadata({
  params: { userId },
}: params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user = await userData;

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

const UserPage = async ({ params: { userId } }: params) => {
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<UserPost[]> = getUserPosts(userId);

  const user = await userData;
  return (
    <>
      <h2>{user.name}</h2>
      <Suspense fallback={<h2>Loading</h2>}>
        <UserPosts promise={userPostData} />
      </Suspense>
    </>
  );
};
export async function generateStaticParams() {
  const userData: Promise<User[]> = await getAllUsers();
  const user = await userData;
  return user.map((singleUserData) => {
    userId: singleUserData.id.toString();
  });
}

export default UserPage;
