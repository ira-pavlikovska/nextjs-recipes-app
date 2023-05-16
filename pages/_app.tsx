// import 'raf/polyfill'
import 'setimmediate'

import Head from 'next/head'
import React from 'react'

import { AppProps } from 'next/app'
import Layout from "../app/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
