import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("w-full border-4 border-black shadow-brutal", {
        "hover:shadow-brutal-hover transform -translate-x-1 -translate-y-1 transition-all duration-200": slug,
      })}
      width={1300}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0 transform rotate-1 hover:rotate-0 transition-transform duration-300">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title} className="block transform hover:scale-105 transition-transform duration-200">
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
