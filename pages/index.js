import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coder's blog</title>
        <meta name="description" content="This is a blog of a coder." />
        <meta name="keywords" content='blog' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex'>

      <Image className='relative '
      src="/coder.jpg" alt='' width={600} height={600} />

      <main className='max-w-6xl mx-auto text-center p-10' >
        <h1  className='text-3xl'>
          Coder's blog
        </h1>

        <p className='text-red-600 text-4xl p-5 '>
          Yess.. coders do blog.
         
        </p>
        <code className={styles.code}>console.log("hello world ! ")</code>
        <div >
          <div >
            <h1 className='text-6xl p-4 mt-20'>Latest blogs</h1>
            <div >

            <Link href={"/blogpost/learn-javascript"}>
              <h3 className="flex justify-start font-bold text-5xl p-4	">
              Java script</h3></Link>
            <p className='flex justify-start'> ramrai ho js.. ramailo,</p>
            </div>
          </div>
          {/* <div >
            <Link href={"/blogpost/learn-javafx"}> <h3>Javafx</h3></Link>
            <p>Complicated yet strong</p>
            </div>
            <div >
            <Link href={"/blogpost/learn-css"}>  <h3 >css</h3></Link>
            <p>tailwind is king</p>
          </div>*/}
           </div> 

      </main>

          </div>
    </div>
  )
}
