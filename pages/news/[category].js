import React from 'react'

const ArticleListByCategory = ({articles,category}) => {
  return (
    <div>
        <h2>Showing news for category <i>{category}</i></h2>
        {
            articles.map(article=>{
                return(
                    <div key={article.id}>
                        <h2>{article.id} {article.title}</h2> 
                        <p>{article.description} </p>   
                    </div>
                )                
            })
        }
    </div>
  )
}

export default ArticleListByCategory 


export async function getServerSideProps(context){
    const {params,req,res,query} = context;
    console.log(query)
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie',['name=Shabaaz'])
    const {category} = params;
    const response = await fetch(`http://localhost:4000/news?category=${category}`)

    const data = await response.json();

    return{
        props:{
            articles:data,
            category
        }
    }
}

