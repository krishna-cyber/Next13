/** @format */

import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPost";
import UserPosts from "./components/UserPosts";
import { Suspense } from "react";

type params = {
  params: {
    userId: string;
  };
};

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

export default UserPage;
