import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from '../constants';
import Button from "./Button";
import ShoeCard from "./ShoeCard";
const Hero = () => {
    const [bigShoe, setBigShoe] = useState(bigShoe1)

    return (
        <section id="home" className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container">
            <div className="relative flex flex-col xl:w-2/5 justify-center pt-28 padding-x font-montserrat">
                <p className="text-coral-red font-medium mb-10">Our summer collections</p>
                <h1 className="text-8xl max-lg:text-4xl font-bold font-palanquin leading-snug">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 mb-7">The News Arrival</span> <br />
                    <span className=" xl:whitespace-nowrap"><span className="text-coral-red">Nike</span> Shoes</span>
                </h1>
                <p className="text-gray-600 mt-7 mb-12 ms:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life</p>
                <Button label="Shop now" iconUrl={arrowRight} />
                <section className="flex flex-wrap gap-5 mt-10 w-full">
                    {statistics.map(stat => (
                        <article key={stat.label}>
                            <p className="text-[40px] font-palanquin font-bold">{stat.value}</p>
                            <p className="text-slate-gray font-montserrat">{stat.label}</p>
                        </article>
                    ))}
                </section>
            </div>

            <div className="relative flex flex-1 flex-col justify-center items-center xl:min-h-screen bg-primary bg-hero bg-cover bg-center">
                <img src={bigShoe} alt="shoe collection" width="610" height="500" className="object-contain relative z-10" />
                <section className="flex gap-4 sm:gap-6 xl:absolute xl:-bottom-[5%] max-sm:px-6">
                    {shoes.map((shoe, index) => (
                        <article key={index}>
                            <ShoeCard shoeUrl={shoe} bigShoeUrl={bigShoe} changeBigShoeImage={(shoe) => { setBigShoe(shoe) }} />
                        </article>
                    ))}
                </section>
            </div>
        </section>
    )
}

export default Hero