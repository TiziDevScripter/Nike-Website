import { reviews } from "../constants"
import ReviewCard from "./ReviewCard"
const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="text-4xl font-bold text-center">
                What Our <span className="text-coral-red">Coustomers</span> Say
            </h3>
            <p className="info-text mt-6 max-w-lg text-center mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, nam.</p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {
                    reviews.map(review => (
                        <ReviewCard
                            key={review.customerName}
                            imgURL={review.imgURL}
                            rating={review.rating}
                            customerName={review.customerName}
                            feedback={review.feedback}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default CustomerReviews