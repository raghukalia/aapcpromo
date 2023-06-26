import Image from 'next/image'
import aapclogo from '../public/aapclogo.jpg'
import Link from 'next/link'
export default function Header(){
    return(
    <>
   <div className="container">
    <div className="row">
        <div className="col-md-12 text-center m-4">
        <Link href="/"><Image
      src={aapclogo}
      width={148}
      height={50}
      alt="AAPC"
    /></Link>
        </div>
    </div>
   </div>
    </>      
    )
}