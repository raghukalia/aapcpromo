import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./Header"
import Footer from "./Footer"
export default function Weblayout({children}){
    return(
    <>
    <Head>
        <title>Training Package</title>
    </Head>
        <div className='container-full'>
     <Header></Header>
            <div className='container'>
                {children}
            </div>
      <Footer></Footer>
        </div>
    </>      
    )
}