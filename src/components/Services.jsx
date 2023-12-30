import { services } from "../constants"
import { ServiceCard } from "./ServiceCard"
const Services = () => {
    return (
        <section className="max-container flex justify-center items-center gap-6 flex-wrap">
            {
                services.map(service => {
                    return (
                        <ServiceCard key={service.label} {...service} />
                    )
                })
            }
        </section>
    )
}

export default Services