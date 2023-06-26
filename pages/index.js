import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link'
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });
  const res = await client.getEntries({ content_type: 'product' });
  return {
    props: { products: res.items },
    revalidate: false
  }
}
const inter = Inter({ subsets: ['latin'] })
export default function Home({ products }) {
  // console.log(products)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className='row'>
          <div className='col-md-12'>
          <h1>35% off everything you need to get certified</h1>
          </div>
        </div>
        <div className='row'>
        {
          products.map(product => {
            const { productTitle,productSubTitle,thumbnail,slug} = product.fields;
             return (
              <div className='col-md-4 mt-3' key={product.sys.id}>
              <div className="card">
              {/* <img src="..." className="card-img-top" alt="..."></img> */}
              <Image 
                src={'https:'+thumbnail.fields.file.url}
                width={thumbnail.fields.file.details.image.width}
                height="286"
                style={{ maxWidth: '100%' }}
                alt={productTitle}
              />
              <div className="card-body">
                <h5 className="card-title">{productTitle}</h5>
                <p className="card-text">{productSubTitle}</p>
                <Link href={'/promofiles/'+slug} className="btn btn-primary">Learn More</Link>
              </div>
            </div>
            </div>)

          })
        }

</div>
      </main>
    </>
  )
}
