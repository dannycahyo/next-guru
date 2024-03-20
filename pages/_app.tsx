import { RouteProtection } from "@/components/RouteProtection";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <RouteProtection>
        <Component {...pageProps} />
      </RouteProtection>
    </SessionProvider>
  );
};

export default App;
