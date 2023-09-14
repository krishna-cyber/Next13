/** @format */

const getAllUsers = async () => {
  const user = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!user.ok) {
    throw new Error("Failed to get users");
  }

  return user.json();
};

export default getAllUsers;
