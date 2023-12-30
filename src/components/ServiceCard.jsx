// eslint-disable-next-line react/prop-types
export const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
        <div className="shadow-3xl p-7 rounded-lg w-full sm:min-w-[350px] sm:w-[350px]">
            <img src={imgURL} alt={`An icon of ${label}`} className="bg-coral-red p-2 rounded-full" />
            <h2 className="text-xl font-bold mt-5">{label}</h2>
            <p className="text-gray-600 mt-4">{subtext}</p>
        </div>
    )
}
