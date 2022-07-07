import Link from 'next/link'
import { useRouter } from 'next/router'


function Post({post}) {
    const router = useRouter();

    if(router.isFallback) {
        return <h1>Loading....</h1>
    }
  return(
        <>
            <h1>List of Posts</h1>
            <h2>{post.id} {post.title}</h2>
        </>
  )
}


export default Post


export async function getStaticPaths(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    const data = await response.json()
    const paths = data.map(post =>{
        return{
            params:{
                postId:`${post.id}`        
            }
        }
    })
console.log(paths)
    return{
        paths:[
            {
            params:{postId:'1'}
            },
            {
                params:{postId:'2'}
                },
                {
                    params:{postId:'3'}
                    }
        ],
        // paths,
        fallback:true,
    }
}

export const getStaticProps = async (context) =>{
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)

    const data = await response.json()
    if(!data.id){
        return {
            notFound: true,
        }

    }
    console.log(`/posts/${params.postId}`)
    return{
        props:{
            post:data
        }
    }

}