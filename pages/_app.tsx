import { RouteProtection } from "@/components/RouteProtection";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { trpc } from "@/utils/trpc";

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <RouteProtection>
        <Component {...pageProps} />
      </RouteProtection>
    </SessionProvider>
  );
};

export default trpc.withTRPC(App);
