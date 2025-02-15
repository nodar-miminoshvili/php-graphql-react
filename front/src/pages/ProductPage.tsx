import { useParams } from "react-router-dom"

export default function ProductPage() {
    const {productId} = useParams(); 
    return(
        <>
        <h1>Product Page</h1>
        <h2>Product ID: {productId} </h2>
        </>
    )
}