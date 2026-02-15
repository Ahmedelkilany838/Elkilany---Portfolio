import type { ReactNode } from "react";

interface SpaceLayoutProps {
  children: ReactNode;
}

export default function SpaceLayout({ children }: SpaceLayoutProps) {
  return (
    <div className="bg-black min-h-screen w-full text-white">
      {children}
    </div>
  );
}
