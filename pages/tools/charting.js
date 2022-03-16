//import { useRouter } from 'next/router';
import Head from 'next/Head';
import Layout, {siteTitle} from '../../components/layout';
import utilStyles from '../../styles/utils.module.css'


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
            </body>
        </Layout>
    )
}