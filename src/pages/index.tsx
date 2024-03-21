import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@src/styles/Home.module.css";

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
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <h1>Welcome to Next Guru</h1>
          <h3>
            Please checkout to branch lesson for each of the lesson
          </h3>
        </div>
      </main>
    </>
  );
}
