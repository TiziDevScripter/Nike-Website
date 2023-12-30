/* eslint-disable react/prop-types */
const Button = ({ label, iconUrl }) => {
    return (
        <button className="bg-coral-red w-max flex flex-row items-center gap-4 py-2 px-4 text-white rounded-full">{label} {iconUrl && <img src={iconUrl} alt="arrow-right" width="15" height="15" className="rounded-full" />}</button>
    )
}

export default Button