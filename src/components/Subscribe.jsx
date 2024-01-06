import Button from "./Button"

const Subscribe = () => {
    return (
        <section className="max-container flex flex-col gap-10">
            <h3 className="text-4xl font-bold text-center">
                Subscribe For
                <span className="text-coral-red"> New Releases </span>
                & Newsletter
            </h3>
            <form className="flex border border-gray-400 p-2 rounded-full gap-4">
                <input type="email"
                    name="email"
                    placeholder="email, e.g. example@example.com"
                    className="w-full rounded-full pl-4 outline-none"
                />
                <Button label="Subscribe" />
            </form>
        </section>
    )
}

export default Subscribe