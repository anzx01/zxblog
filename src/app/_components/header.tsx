import Link from "next/link";

const Header = () => {
  return (
    <div className="mb-20 mt-8">
      <div className="neob-container neob-bg-purple transform -rotate-2 hover:rotate-0 transition-all duration-300 inline-block">
        <h2 className="neob-subtitle text-white">
          <Link href="/" className="neob-link text-white hover:text-neob-yellow">
            ← 返回首页
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Header;
