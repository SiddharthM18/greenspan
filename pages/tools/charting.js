//import { useRouter } from 'next/router';
import Head from 'next/Head';
import Layout, {siteTitle} from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Image from 'next/Image';


//export async function getServerSideProps({ params }) {
//    const req = await fetch('http://localhost:3000/${params.id}.json');
//    const data = await req.json();
//    return {
//        props: 
//    }
//}

export default function Charting() {
    //const router = useRouter();
    //const 

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <header>
                <h1>Welcome to Charting</h1>
            </header>
            <body>
                <div class={utilStyles.chart_container}>
                    <input type="button" id='script' name="scriptbutton" value=" Run Script " onclick="exec('python calltest.py');" />
                    <Image
                        priority
                        src='/images/calltest.png'
                        className={utilStyles.chartimage}
                        height={300}
                        width={400}
                    />
                </div>
            </body>
        </Layout>
    )
}