import {useRouter} from 'next/router'


function ReviewId(){
    const router = useRouter();
    const {productId,reviewId} = router.query
    console.log(reviewId)

    return <h1>Details about product {productId} and review {reviewId}</h1>
}

export default ReviewId

