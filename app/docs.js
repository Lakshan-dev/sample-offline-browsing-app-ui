import Head from 'next/head';
import Image from 'next/image';
import styles from './home.module.css';

export default function Docs() {
    return (
        <>
            <Head>
                <title>Next.js Service Workers Docs</title>
                <meta name='description' content='Generated by create next app' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <div className={styles.description}>
                    <p>Service Worker Docs</p>
                    <div>
                        <a
                            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            By not{' '}
                            <Image
                                src='/vercel.svg'
                                alt='Vercel Logo'
                                className={styles.vercelLogo}
                                width={100}
                                height={24}
                                priority
                            />
                        </a>
                    </div>
                </div>

                <div className={styles.center}>
                    <Image
                        className={styles.logo}
                        src='/next.svg'
                        alt='Next.js Logo'
                        width={180}
                        height={37}
                        priority
                    />
                </div>
            </main>
        </>
    );
}