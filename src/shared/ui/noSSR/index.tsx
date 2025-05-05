"use client";
import { memo, useEffect, useState } from "react";

const NoSSR = memo(({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <>{children}</>;
})
export default NoSSR