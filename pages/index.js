import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/post-util";

function HomePage(props) {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>Nextjs blog</title>
        <meta name="description" content="i post blogs here about nextjs." />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return { props: { posts: featuredPosts } };
}

export default HomePage;
