import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

import type { FC } from "react";

type RouteProtectionProps = {
  children: React.ReactNode;
};

export const RouteProtection: FC<RouteProtectionProps> = ({
  children,
}) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      const homePage = router.pathname === "/";
      if (homePage) return;

      router.push("/api/auth/signin");
    }
  }, [status, router]);

  return children;
};
