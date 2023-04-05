import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";

import type { AppProps } from "next/app";

import { OpenAIKeyProvider } from 'ui';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <OpenAIKeyProvider>
      <Component {...pageProps} />
    </OpenAIKeyProvider>
  );
}