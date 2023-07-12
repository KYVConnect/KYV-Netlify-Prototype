import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>KYVConnect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to KYVConnect!" />
        <p className="description">
          
        </p>
      </main>

      <Footer />
    </div>
  )
}
