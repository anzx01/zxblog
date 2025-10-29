import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section className="neob-container transform -rotate-1 hover:rotate-0 transition-all duration-300">
      <div className="mb-8 md:mb-12 transform rotate-2">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-6 neob-heading neob-text-blue">
            <Link href={`/posts/${slug}`} className="neob-link hover:neob-text-purple">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 neob-card neob-bg-yellow inline-block transform -rotate-1">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div className="space-y-4">
          <p className="neob-text mb-6 leading-relaxed">{excerpt}</p>
          <div className="transform rotate-1">
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </div>
    </section>
  );
}
