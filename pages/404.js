import Link from "next/link";
const NotFound = () => {
    return (
        <div className="page-not-found">
            <div className='nopage' style={{height:'400px', overflow:'hidden'}}>
                <h1>404</h1>
                <h2>Oooops! This page is not found :(</h2>
                <p>Click to <Link href="/">Homepage</Link> for more recipe....</p>
            </div>
        </div>
    );
}
export default NotFound;