import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neob-black border-t-4 border-neob-yellow transform rotate-1">
      <Container>
        <div className="py-16 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <div className="neob-card neob-bg-yellow transform -rotate-2 hover:rotate-0 transition-all duration-300 wiggle">
              <span className="text-black font-black text-2xl">Neo-Brutalist Blog</span>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="neob-card neob-bg-pink transform rotate-2 hover:rotate-0 transition-all duration-300">
              <span className="text-white font-bold text-lg">粗犷 · 大胆 · 不拘一格</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
