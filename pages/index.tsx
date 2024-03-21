import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Guru</title>
        <meta
          name="description"
          content="Next Guru - The best place to learn Next.js!"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <h1>Welcome to our store</h1>
          <p>Check out our latest products:</p>
          <Link href="/product">Product Page</Link>
        </div>
      </main>
    </>
  );
}
