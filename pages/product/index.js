import Link from "next/link"
function ProductList(){
    return <>
       
       <Link href="/">
      <a>Home</a>
    </Link>
       
    <Link href="/product/1">
    <a>Product 1</a>
    </Link>
    <Link href="/product/2" replace>
    <a>Product 2</a>
    </Link>
    <Link href="/product/3">
    <a>Product 3</a>
    </Link>
    </>
}

export default ProductList