import { VideoBG } from "@/components/Layouts/VideoBG";
import { Navbar } from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <VideoBG>
      <Navbar />
      <Component {...pageProps} />
    </VideoBG>
  );
}
