import Head from 'next/head'
import IndexPage from "@/src/views/Index"

export default function Home() {
  return (
    <div>
        <Head>
            <title>Luis Ricardo</title>
        </Head>
        <IndexPage />
    </div>
  )
}
