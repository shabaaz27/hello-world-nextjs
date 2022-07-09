const News = (props) => {
    const {articles} =props
  return (
    <div>List Of News Articles
        {
            articles?.map(item=>{
                return(
                    <div key={item.id}>
                        <h2>
                            {item.id} {item.title} | {item.category}
                        </h2>                   
                    </div>
                )
            })
        }

    </div>
  )
}

export default News


export async function getServerSideProps(){
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()

    return {
        props:{
            articles:data
        }
    }
}