import type { AppProps } from "next/app";
import "../styles/global.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
