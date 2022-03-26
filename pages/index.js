import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main className={utilStyles.main}>
        <h1 className={utilStyles.headingXL}>
          Welcome to the <a href="https://coins.aaec.vt.edu">COINS</a> Analyst Platform
        </h1>
        <p><i>Please note that this platform is still under development</i></p>

        <div className={utilStyles.grid}>
          <div className={utilStyles.card}>
            <Link href={'/tools/charting'}>
              <h2>Charting &rarr;</h2>
            </Link>
            <p>For trade slides, update slides, reports, etc; time-series multiformat</p>
          </div>

          <div className={utilStyles.card}>
            <Link href={'/tools/analysis'}>
              <h2>Analysis &rarr;</h2>
            </Link>
            <p>Various statistical and analytical tools for analyst utilization</p>
          </div>

          <div className={utilStyles.card}>
            <Link href={'/tools/requests'}>
              <h2>Risk &rarr;</h2>
            </Link>
            <p>Risk risk management and portfolio analysis tools and metrics</p>
          </div>

          <div className={utilStyles.card}>
            <Link href={'/tools/requests'}>
              <h2>Requests &rarr;</h2>
            </Link>
            <p>Request a tool/feature for approval and implementation</p>
          </div> 
          
          <div className={utilStyles.card}>
            <Link href={'/tools/devops'}>
              <h2>DevOps &rarr;</h2>
            </Link>
            <p>Quant Division analyst development tools and workflows</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}