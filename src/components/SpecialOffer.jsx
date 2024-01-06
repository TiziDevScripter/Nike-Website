import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "./Button"

const SpecialOffer = () => {

    return (
        <section className="max-container w-full flex flex-col xl:flex-row justify-center gap-10">
            <article className="relative flex flex-1 flex-col justify-center padding-x font-montserrat">
                <h1 className="text-4xl max-lg:text-4xl font-bold font-palanquin leading-snug">
                    <span className="text-coral-red">Spetial </span>
                    <span >Offer</span>
                </h1>
                <p className="text-gray-600 mt-7 mb-6 ms:max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus soluta saepe laboriosam ducimus minima.</p>
                <p className="text-gray-600 mb-6 ms:max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus soluta saepe laboriosam ducimus minima.</p>
                <div className="flex gap-2">
                    <Button label="Shop now" iconUrl={arrowRight} />
                    <Button label="Learn more" backgroundColor="bg-white" textColor="text-slate-gray" borderColor="border-slate-gray" />
                </div>
            </article>
            <article className="flex flex-1 justify-center items-center">
                <img src={offer} alt="special offer image" />
            </article>
        </section>
    )
}

export default SpecialOffer