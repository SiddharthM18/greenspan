import Link from 'next/Link';
import Head from 'next/Head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

export const siteTitle = 'COINS Analyst Platform'

export default function Layout({children, home}) {
    return(
        <div>
            <div className={styles.navbar}>
                <Link href={'/'}><h1 className={styles.navtitle}>COINS</h1></Link>
                <ul className={styles.navlinks}>
                    <li className={styles.navitem}><Link href={'../tools/charting'}>Charting</Link></li>
                    <li className={styles.navitem}><Link href={'../tools/analysis'}>Analysis</Link></li>
                    <li className={styles.navitem}><Link href={'../tools/risk'}>Risk</Link></li>
                    <li className={styles.navitem}><Link href={'../tools/requests'}>Requests</Link></li>
                    <li className={styles.navitem}><Link href={'../tools/devops'}>DevOps</Link></li>
                </ul>
            </div>
            <div className={styles.container}>
                <Head>
                    <meta name="og:title" content={siteTitle} />
                </Head>
                <header>
                    {home ? (
                        <>

                        </>
                    ) : (
                        <>
                        
                        </>
                    )}
                </header>
                <main>{children}</main>
                    {!home && (
                        <>

                        </>
                    )}
                <footer className={utilStyles.footer}>
                    <h3>Max De Leon | Siddharth Mehta</h3>
                </footer>
            </div>
        </div>
    );
}