import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostfiles } from "../../lib/post-util";
import Head from "next/head";
function PostDetailsPage(props) {
  const post = props.post;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />;
    </>
  );
}

export function getStaticProps(context) {
  const slug = context.params;
  const post = getPostData(slug.slug);
  return { props: { post: post } };
}
export function getStaticPaths() {
  const postsFileNames = getPostfiles();
  const slugs = postsFileNames.map((postsFileName) =>
    postsFileName.replace(/\.md$/, "")
  );
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
}
export default PostDetailsPage;
