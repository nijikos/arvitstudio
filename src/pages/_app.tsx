import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/rootVariables.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      id='arvit'
      className={`${poppins.variable} font-[family-name:var(--font-poppins)]`}
    >
      <Component {...pageProps} />
    </main>
  );
}
