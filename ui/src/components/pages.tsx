import Head from 'next/head';
import { PropsWithChildren } from 'react';

// props
type Props = {
    title: string,
};

// functions

// component
export default function Page({title, children}: PropsWithChildren<Props>) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon.png" />
                <link rel='preload' href='/fonts/Oswald-Regular.ttf' as='font' type='font/ttf' crossOrigin='anonymous'/>
            </Head>
            <div id='page'>
                {children}
            </div>
        </div>
    );
}