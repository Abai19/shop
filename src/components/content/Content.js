import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { FetchProduct } from "../../api"

const Content = () => {
    const {token} = useAuth();
    const [product, setProduct] = useState({});

    useEffect(() => {
       const fetchProductLocal = async()=>{
            const data = await FetchProduct(token);
            setProduct(data)
       }
       fetchProductLocal()
    },[])

    return (
        <div>
            content
            {
               product.results!==undefined && product.results.map(p=> (
                    <div>
                        {p.name}
                    </div>
                ))
            }
        </div>
    )
}
export default Content