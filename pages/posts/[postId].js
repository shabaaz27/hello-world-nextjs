function Post({post}) {
  return(
        <>
            <h2>{post.id}</h2>
        </>
  )
}


export default Post

export const getStaticProps = async (context) =>{
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

    const data = await response.json()
    return{
        props:{
            post:data
        }
    }

}