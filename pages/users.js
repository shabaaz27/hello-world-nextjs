import User from "../components/User"

function UserList({users}){
   return <>
     <h1>List Of users</h1>
    {
        users?.map(user=>{
            return (
                <div key={user.id}>
                   <User user={user}/>
                </div>
            )
        })
    }
    </>
}


export default UserList

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
       users : data
      }
    }
  }
  



