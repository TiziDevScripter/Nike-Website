/* eslint-disable react/prop-types */
const Button = ({ label, iconUrl, backgroundColor, textColor, borderColor }) => {
    return (
        <button className={`${backgroundColor ? backgroundColor : 'bg-coral-red'} w-max flex flex-row items-center gap-4 py-2 px-4 ${textColor ? textColor : 'text-white'} rounded-full ${borderColor && 'border ' + borderColor}`}>{label} {iconUrl && <img src={iconUrl} alt="arrow-right" width="15" height="15" className="rounded-full" />}</button>
    )
}

export default Button