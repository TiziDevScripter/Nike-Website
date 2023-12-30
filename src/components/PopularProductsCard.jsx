import { star } from "../assets/icons"

const PopularProductsCard = (product) => {
    return (
        <div>
            <img src={product.imgURL} alt="product collection" />
            <div>
                <img src={star} alt="rating star" />
                <span>(4.5)</span>
            </div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    )
}

export default PopularProductsCard