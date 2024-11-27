import Head from "next/head";
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
      <Head>
        <title>
          Arvit Studio - Desain Interior & Pembuatan Furnitur Murah di Jakarta,
          Bandung, Depok, Tangerang, Bekasi
        </title>
        <meta
          name='description'
          content='Arvit Studio menyediakan jasa desain interior, pembuatan furnitur, dan kontraktor murah di Jakarta, Bandung, Depok, Tangerang, dan Bekasi. Wujudkan ruang impian Anda dengan solusi modern dan hemat biaya.'
        />
        <meta
          name='keywords'
          content='desain interior Jakarta, kontraktor interior Jakarta, jasa desain interior murah, pembuatan furnitur Bandung, furnitur custom Bekasi, desain interior hemat Tangerang, kontraktor Depok, Arvit Studio, desain interior modern, interior rumah Jakarta, desain kantor Jakarta, desain rumah minimalis'
        />
        <meta name='author' content='Arvit Studio' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          property='og:title'
          content='Arvit Studio - Desain Interior & Pembuatan Furnitur Murah'
        />
        <meta
          property='og:description'
          content='Jasa desain interior, pembuatan furnitur, dan kontraktor murah di Jakarta, Bandung, Depok, Tangerang, dan Bekasi. Hubungi kami untuk wujudkan ruang impian Anda!'
        />
        <meta property='og:url' content='https://www.arvitstudio.com/' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://www.arvitstudio.com/images/home/ogimage.png'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Arvit Studio - Desain Interior & Pembuatan Furnitur Murah'
        />
        <meta
          name='twitter:description'
          content='Jasa desain interior dan pembuatan furnitur custom di Jakarta, Bandung, Depok, Tangerang, dan Bekasi. Solusi berkualitas dengan harga terjangkau!'
        />
        <meta
          name='twitter:image'
          content='https://www.arvitstudio.com/images/home/ogimage.png'
        />
        <link rel='canonical' href='https://www.arvitstudio.com/' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
