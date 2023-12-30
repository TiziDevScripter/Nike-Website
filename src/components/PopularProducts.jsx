import { star } from "../assets/icons"
import { products } from "../constants"

const PopularProducts = () => {
    return (
        <section className="max-container">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-sm:gap-10 justify-center">
                {products.map(product => (
                    <div key={product.name}>
                        <img className="w-full" src={product.imgURL} alt="product collection" />
                        <div className="flex gap-1 mt-4">
                            <img src={star} alt="rating star" width="24" height="24" />
                            <span className="text-gray-600 text-lg">4.5</span>
                        </div>
                        <h3 className="my-2 text-xl">{product.name}</h3>
                        <p className="font-bold text-coral-red">{product.price}</p>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default PopularProducts