import type { ReactNode } from "react";

interface SpaceLayoutProps {
  children: ReactNode;
}

export default function SpaceLayout({ children }: SpaceLayoutProps) {
  return (
    <div className="space-layout">
      <div className="space-layout-content">{children}</div>
    </div>
  );
}
