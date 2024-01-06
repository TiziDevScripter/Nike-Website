import { star } from "../assets/icons"

/* eslint-disable react/prop-types */
const ReviewCard = ({ imgURL, rating, customerName, feedback }) => {
    return (
        <div className="flex justify-center items-center flex-col gap-4">
            <img src={imgURL}
                alt="customer"
                className="rounded-full obejct-cover w-[120px] h-[120px]"
            />
            <p className="text-xl font-thin text-center max-w-lg text-gray-600">{feedback}</p>
            <div className="flex gap-2">
                <img src={star}
                    alt="rating-icon"
                    width={24}
                    height={24}
                />
                <p className="text-lg text-gray-600">{rating}</p>
            </div>
            <p className="text-lg">{customerName}</p>
        </div>
    )
}

export default ReviewCard