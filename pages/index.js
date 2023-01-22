import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loic Verrall</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.helloBanner}>
          <h1 className={styles.title}>Hello, I&apos;m Loic.</h1>
          <p>
            I am a full-stack software engineer taking a short break to explore
            the world!
          </p>
        </div>
      </main>
    </div>
  );
}
