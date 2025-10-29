import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="neob-container w-full md:w-auto transform rotate-1 hover:rotate-0 transition-transform duration-300">
        <h1 className="neob-title neob-text-blue">
          BLOG.
        </h1>
        <p className="neob-text mt-4 neob-text-pink">
          粗犷 · 大胆 · 原创内容
        </p>
      </div>
      <div className="mt-8 md:mt-0 flex flex-col gap-4">
        <div className="neob-card neob-bg-yellow transform -rotate-2 hover:rotate-0 transition-transform duration-300 wiggle">
          <span className="text-black font-bold text-xl">Neo-Brutalist</span>
        </div>
        <div className="neob-card neob-bg-pink transform rotate-2 hover:rotate-0 transition-transform duration-300 wiggle">
          <span className="text-white font-bold text-xl">Design</span>
        </div>
      </div>
     </section>
  );
}
