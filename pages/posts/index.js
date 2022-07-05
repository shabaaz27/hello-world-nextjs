function PostList({posts}) {

    return(
        <>
            <h1>List Of Posts</h1>
            {
                posts.map(post =>{
                    return(
                        <div key ={post.id}>
                            <h2>{post.id} {post.title}</h2>
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


