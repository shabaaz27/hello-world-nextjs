import Link from "next/link"
import { useRouter  } from "next/router"

const Home = () => {
  const router = useRouter()

  const handleClick = () =>{
  
   console.log('placingOrde')
    router.push('/product')
    // router.replace('/product')
  
  }

  return (
    <>
     <h1>Home</h1>
   
    <Link  href="/blog">
      <a>Blog</a>
    </Link>
    <Link href="/product">
      <a >Products</a>
    </Link>
    <button onClick={handleClick}>Place Order</button>
    </>
   
  )
}

export default Home