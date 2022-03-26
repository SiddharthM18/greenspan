import Head from 'next/Head';
import Link from 'next/Link';
import Image from 'next/Image';
import Layout, {siteTitle} from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';


export default function PythonTest() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <main className={utilStyles.main}>
                <h1 className={utilStyles.headingXL}>
                    Select a Service/Tool
                </h1>
                <div className={utilStyles.devopsgrid}>
                    <div className={utilStyles.devopscard}>
                        <Link href='https://coinsvt.atlassian.net/jira/software/projects/QDS22/boards/1'>
                            <a>
                                <Image
                                    priority
                                    src='/images/jira.png'
                                    className={utilStyles.jiraimage}
                                    height={200}
                                    width={200}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className={utilStyles.devopscard}>
                        <Link href='https://github.com/Commodity-Investing-by-Students'>
                            <a>
                                <Image
                                    priority
                                    src='/images/github.png'
                                    className={utilStyles.githubimage}
                                    height={200}
                                    width={200}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className={utilStyles.devopscard}>
                        <Link href='https://cloud.digitalocean.com/projects/20dad6be-71ea-43e3-af90-54bc5e0f0968/resources?i=a71cc0'>
                            <a>
                                <Image
                                    priority
                                    src='/images/digitalocean.png'
                                    className={utilStyles.jiraimage}
                                    height={200}
                                    width={200}
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </main>
        </Layout>
    )
}