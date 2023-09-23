/** @format */
import fs from "fs";
import matter from "gray-matter";
import path from "path";

//getting post directory
const postDirectory = path.join(process.cwd(), "blogposts");

export function getSortedPosts() {
  //getting all filenames in an array
  const filenames = fs.readdirSync(postDirectory);
  //const allPostDatas
  const allPostsData = filenames.map((filename) => {
    const id = filename.replace(/\.md$/, "");

    //getting fullpath
    const fullPath = path.join(postDirectory, filename);
    const fileContent = fs.readFileSync(fullPath, "utf-8");

    //extracting metadata
    const matterResult = matter(fileContent);
    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };

    //combine the data with id
    return blogPost;
  });

  return allPostsData.sort((a, b) => {
    a.date < b.date ? 1 : -1;
  });
}
