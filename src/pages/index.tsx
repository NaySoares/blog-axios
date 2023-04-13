import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
import { HomePage } from "@/components/Layouts/HomePage";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <HomePage />
          <section className="bg-red-500">
            <h1 className="text-5xl font-extrabold text-white p-5">
              section for test
            </h1>
          </section>
      </main>
    </>
  );
}
