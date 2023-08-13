import ProfileImage from "@/components/ProfileImage";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loic Verrall</title>
        <meta
          name="description"
          content="I am a full-stack software engineer working at Omaze UK."
          key="desc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.helloBanner}>
          <ProfileImage />

          <h1 className={styles.title}>
            Hello, I&apos;m Loic.
          </h1>

          <p>
            I am a full-stack software engineer working at {''}
            <a href="https://omaze.co.uk" target="_blank">
              Omaze UK
            </a>.
          </p>
        </div>
      </main>
    </div>
  );
}
