import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head>
                {/*<link rel="icon" href="" />*/}
                <link rel="preconnect" href="https://fonts.googleapis.com" ></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}