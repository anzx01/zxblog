import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section className="neob-container transform rotate-1 hover:rotate-0 transition-all duration-300">
      <h2 className="mb-12 neob-title neob-text-purple">
        更多文章
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:gap-x-12 gap-y-8 md:gap-y-12 mb-16">
        {posts.map((post, index) => (
          <div
            key={post.slug}
            className={`transform transition-all duration-300 hover:scale-105 ${
              index % 2 === 0 ? 'rotate-2 hover:rotate-1' : '-rotate-2 hover:-rotate-1'
            }`}
          >
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
