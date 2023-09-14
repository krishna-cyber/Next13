/** @format */

export default async function getUserPosts(userID: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/?userID=${userID}`
  );

  if (!res.ok) throw new Error("failed to get userPost");
  return res.json();
}
