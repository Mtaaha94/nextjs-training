import { useRouter } from 'next/router'


function BlogsPost() {
    const router = useRouter();
    console.log(router.query);
    return(
        <div>
            <h1>The Blog Post Page</h1>
        </div>
    )
}

export default BlogsPost