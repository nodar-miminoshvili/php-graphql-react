import { useParams } from "react-router-dom"

export default function CategoryPage() {
    const {category} = useParams();

    return(
        <>
        <h1>Category Page</h1>
        <h2>Selected Category: {category}</h2>
        </>
    )
}