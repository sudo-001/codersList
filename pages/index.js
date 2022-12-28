import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Coders List | Home</title>
        <meta name="keywords" content="coders" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          lorem, ipsum dolor sit amet consectetur adippisicing elit. Provide
          lorem, ipsum dolor sit amet consectetur adippisicing elit. Provide
          lorem, ipsum dolor sit amet consectetur adippisicing elit. Provide
          lorem, ipsum dolor sit amet consectetur adippisicing elit. Provide
          lorem, ipsum dolor sit amet consectetur adippisicing elit. Provide
        </p>

        <p className={styles.text}>
          lorem, ipsum dolor sit amet consectetur adippisicing elit. Provide
          lorem, ipsum dolor sit amet consectetur adippisicing elit. Provide
          lorem, ipsum dolor sit amet consectetur adippisicing elit. Provide
          lorem, ipsum dolor sit amet consectetur adippisicing elit. Provide
          lorem, ipsum dolor sit amet consectetur adippisicing elit. Provide
        </p>

        <Link href="/coders" className={styles.btn}>
          See coders Listing
        </Link>
      </div>
    </>
  );
}
