import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postDirectory = path.join(process.cwd(), "posts");
export function getPostfiles() {
  return fs.readdirSync(postDirectory);
}
export function getPostData(postIdentifir) {
  const postSlug = postIdentifir.replace(/\.md$/, "");
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

export function getAllPosts() {
  const postsFiles = getPostfiles();

  const allPosts = postsFiles.map((postsFile) => getPostData(postsFile));

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter(
    (featuredPost) => featuredPost.isFeatured
  );
  return featuredPosts;
}
