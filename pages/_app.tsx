import "@/styles/utilities.css";
import "@/styles/homepage.css";
import "@/styles/detail.css";
import "@/styles/checkout.css";
import "@/styles/complete-checkout.css";
import "@/styles/sign-in.css";
import "@/styles/sign-up.css";
import "@/styles/sign-up-photo.css";
import "@/styles/sign-up-success.css";
import "@/styles/404-not-found.css";
import "@/styles/sidebar.css";
import "@/styles/overview.css";
import "@/styles/transactions.css";
import "@/styles/transactions-detail.css";
import "@/styles/edit-profile.css";
import "@/styles/navbar-log-in.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Store GG</title>
        <meta name="description" content="Top Up your games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
