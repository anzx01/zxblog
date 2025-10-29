import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="neob-card hover:shadow-brutal-hover transform transition-all duration-300">
      <div className="mb-5 -rotate-1">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="mb-3 neob-subtitle neob-text-green">
        <Link href={`/posts/${slug}`} className="neob-link hover:neob-text-purple">
          {title}
        </Link>
      </h3>
      <div className="mb-4 neob-card neob-bg-blue inline-block transform rotate-1">
        <DateFormatter dateString={date} />
      </div>
      <p className="neob-text leading-relaxed mb-4">{excerpt}</p>
      <div className="transform -rotate-1">
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </div>
  );
}
