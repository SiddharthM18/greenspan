import Head from 'next/Head';
import Link from 'next/Link';
import Layout, {siteTitle} from '../../components/layout';
import utilStyles from '../../styles/utils.module.css'


export default function Charting() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <header>
                <h1>Welcome to Charting</h1>
            </header>
            <body>
                <form action="{spawn('python', '../../scripts/python/volE.py')}">
                    <label for='volE'>Enter a Command</label>
                    <br></br>
                    <input type='text' id='volE' name="volE"></input>
                    <br></br>
                    <input type='submit'></input>
                </form>
            </body>
        </Layout>
    )
}