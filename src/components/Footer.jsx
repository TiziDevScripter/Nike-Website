import { copyrightSign, facebook, instagram, twitter } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks } from "../constants"

const Footer = () => {
    return (
        <section className="max-container text-white flex flex-col gap-7">
            <img src={footerLogo}
                alt="Nike logo"
                width="130"
            />
            <p className="max-w-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit maxime, voluptates voluptas consequuntur totam error.</p>
            <article className="flex gap-4">
                <section className="bg-white p-2 rounded-full flex justify-center items-center">
                    <img src={facebook} alt="Facebook" />
                </section>
                <section className="bg-white p-2 rounded-full flex justify-center items-center">
                    <img src={twitter} alt="Twitter" />
                </section>
                <section className="bg-white p-2 rounded-full flex justify-center items-center">
                    <img src={instagram} alt="Instagram" />
                </section>
            </article>

            <article className="flex gap-14 mt-7 max-sm:flex-col">
                {
                    footerLinks.map((link) => (
                        <section key={link.title}>
                            <p className="text-2xl font-bold mb-3">{link.title}</p>
                            <div className="flex flex-col gap-1">
                                {
                                    link.links.map(link => (
                                        <a key={link.name}
                                            href={link.link}
                                            className="text-gray-300 hover:text-gray-400"
                                        >{link.name}</a>
                                    ))
                                }
                            </div>
                        </section>
                    ))
                }
            </article>

            <article className="mt-16 w-full flex justify-between items-center max-sm:flex-col gap-2">
                <div className="flex gap-2">
                    <img src={copyrightSign}
                        alt="Copyright icon"
                        width="17"
                        height="17"
                    />
                    <p>All Rights Reserved</p>
                </div>
                <p>Terms & Conditions</p>
            </article>
        </section>
    )
}

export default Footer