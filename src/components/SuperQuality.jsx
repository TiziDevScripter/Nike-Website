import { shoe8 } from '../assets/images/index';
import Button from "./Button";

const SuperQuality = () => {
    return (
        <section className="max-container w-full flex justify-between items-center max-lg:flex-col gap-8">
            <article className="flex flex-col flex-1">
                <h1 className="text-4xl max-lg:text-4xl font-bold font-palanquin leading-snug">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 mb-7">
                        The Best
                        <span className="text-coral-red"> Product</span>
                    </span>
                </h1>
                <p className="text-gray-600 mt-7 mb-12 ms:max-w-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, id. Enim consequatur earum labore provident quisquam ut atque cumque dolor soluta nobis dolores repellat animi, debitis numquam, ratione quo exercitationem?</p>
                <Button label="Know more" />
            </article>
            <article className="flex flex-1 justify-center items-center">
                <img src={shoe8} alt="Best shoe" width={570} height={522} />
            </article>
        </section>
    )
}

export default SuperQuality