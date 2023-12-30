/* eslint-disable react/prop-types */
const ShoeCard = ({ shoeUrl, bigShoeUrl, changeBigShoeImage }) => {
    function handleClick() {
        if (shoeUrl.bigShoe !== bigShoeUrl) {
            changeBigShoeImage(shoeUrl.bigShoe)
        }
    }
    return (
        <div className={`rounded-xl border-2 ${shoeUrl.bigShoe == bigShoeUrl ? 'border-coral-red' : 'border-transparent'} cursor-pointer overflow-hidden`} onClick={handleClick}>
            <div className="bg-white bg-card bg-contain bg-center max-sm:bg-cover flex max-sm:flex-1 justify-center items-center sm:w-40 sm:h-40">
                <img src={shoeUrl.thumbnail} alt="shoe" width="130" height="120" className="object-contain" />
            </div>
        </div>
    )
}

export default ShoeCard