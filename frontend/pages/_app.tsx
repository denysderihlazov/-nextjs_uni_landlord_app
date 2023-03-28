// pages/_app.tsx
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import './styles/pages.css';
import '../styles/globals.css';
import { UserContextProvider } from "../context/userContext"; // Импортируйте UserContextProvider

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300&display=swap" rel="stylesheet" />
            </Head>
            <UserContextProvider>
                <Component {...pageProps} />
            </UserContextProvider>
        </>
    );
}

export default MyApp;