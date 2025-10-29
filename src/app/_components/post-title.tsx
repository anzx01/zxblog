import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="neob-title text-center md:text-left neob-text-blue mb-4">
      {children}
    </h1>
  );
}
