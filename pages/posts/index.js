import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";
import Head from "next/head";

function AllPostsPage(props) {
  const posts = props.posts;

  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="a list of all posts" />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return { props: { posts: allPosts }, revalidate: 1000 };
}
export default AllPostsPage;
