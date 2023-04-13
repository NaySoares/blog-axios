import { Navbar } from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-bg-default">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
