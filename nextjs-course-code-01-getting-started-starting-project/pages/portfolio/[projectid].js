import { useRouter } from 'next/router'


function PortfolioProjectPage() {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query)
    //send a request to backend server
    // to fetch the piece of id with an router of query router.query.projectid
    return (
        <div>
            <h1>The portfolio project page</h1>
        </div>
    )
}

export default PortfolioProjectPage;