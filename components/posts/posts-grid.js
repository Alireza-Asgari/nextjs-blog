import clsses from "./posts-grid.module.css";
import PostItem from "./post-item";
function PostsGrid({ posts }) {
  return (
    <ul className={clsses.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
