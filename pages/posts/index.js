import Link from 'next/link'
function PostList({posts}) {

    return(
        <>
            <h1>List Of Posts</h1>
            {
                posts.map(post =>{
                    return(
                        <div key ={post.id}>
                            <Link href={`posts/${post.id}`} passHref>
                            <a>
                             <h2>{post.id} {post.title}</h2>   
                            </a>
                          
                            </Link>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )

}
export default PostList


export const getStaticProps = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()

        return{
            props:{
                posts:data.slice(0,3)
            }
        }
} 


