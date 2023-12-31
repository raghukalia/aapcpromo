import { createClient } from "contentful"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from "next/link";
import Image from "next/image"
import BlankPage from "../../component/Blankpage";
const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })
  export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type:'product'
    })

    const paths = res.items.map(item =>{
        return{
            params:{slug: item.fields.slug}
        }
    })
    return {
        paths,
        fallback:false
    };
  }
  export async function getStaticProps({params}) {
    const {items} = await client.getEntries({
        content_type:'product',
        'fields.slug':params.slug
    })
    if(!items.length){
        return{
            redirect:{
                destination:'/',
                permanent: false
            }
        }
    }
    return{
        props:{product:items[0]},
        revalidate:1
    }
  }
const ProductDetails = ({product}) => {
    if(!product) return <BlankPage />;
    const { productTitle, productDescription, thumbnail } = product.fields;
    console.log(product)
    return (
    <>
       <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <Image
                            src={'https:' + thumbnail.fields.file.url}
                            width={thumbnail.fields.file.details.image.width}
                            height={thumbnail.fields.file.details.image.height}
                            style={{ maxWidth: '100%' }}
                            alt={productTitle}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{productTitle}</h5>
                            <div className="card-text">{documentToReactComponents(productDescription)}</div>
                            <Link href="/" className="btn btn-primary">Back to Promo</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
export default ProductDetails;