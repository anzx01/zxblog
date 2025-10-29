import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <div className="neob-container transform -rotate-1 hover:rotate-0 transition-all duration-300 mb-8">
        <PostTitle>{title}</PostTitle>
      </div>
      <div className="hidden md:block md:mb-12 transform rotate-2">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6 transform rotate-2">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 neob-card neob-bg-green inline-block transform rotate-1">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
