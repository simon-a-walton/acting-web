import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Head from 'next/head'

const name = 'Simon Walton'
export const siteTitle = 'Simon Walton: Performer'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <a href="https://akagents.co.uk" target="_blank">
        <img
          src="/images/AK.png"
          alt="AK Agents"
          className={styles.AKLogo}
        />
      </a>
      <a href="https://app.spotlight.com/2212-9057-3356" target="_blank" className="d-block">
        <img
          src="/images/spotlight.png"
          alt="Spotlight"
          className={styles.spotlightLogo}
        />
      </a>
      <header className={`${utilStyles.heading2Xl} text-center py-3`}>
        Simon Walton
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}


