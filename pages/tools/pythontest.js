import Head from 'next/Head';
import Link from 'next/Link';
import Image from 'next/Image';
import Layout, {siteTitle} from '../../components/layout';
import utilStyles from '../../styles/utils.module.css'


export default function PythonTest() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
        </Layout>
    )
}