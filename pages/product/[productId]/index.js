import {useRouter} from 'next/router'


function ProductDetails(){
    const router = useRouter();
    const productId = router.query.productId
    console.log(productId)

    return <h1>Details about Product {productId}</h1>
}

export default ProductDetails

