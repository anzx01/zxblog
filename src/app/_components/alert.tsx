import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div className={cn("border-b-4 border-black", {
      "bg-neob-purple border-black": preview,
      "bg-neob-yellow border-black": !preview,
    })}>
      <Container>
        <div className="py-4 text-center">
          {preview ? (
            <div className="neob-card neob-bg-pink transform rotate-1 inline-block">
              <span className="text-white font-bold">
                这是一个预览页面。{" "}
                <a
                  href="/api/exit-preview"
                  className="neob-link text-white hover:text-neob-yellow"
                >
                  点击这里
                </a>{" "}
                退出预览模式。
              </span>
            </div>
          ) : (
            <div className="neob-card neob-bg-blue transform -rotate-1 inline-block">
              <span className="text-white font-bold">
                Neo-Brutalist 博客 - 粗犷 · 大胆 · 原创设计
              </span>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
