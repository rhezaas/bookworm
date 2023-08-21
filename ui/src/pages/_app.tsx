import type { AppProps } from 'next/app';
import "../styles/index.sass"

export default function app({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}