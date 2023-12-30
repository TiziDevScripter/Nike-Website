import { hamburger } from '../assets/icons'
import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'
const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-30 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="#">
                    <img src={headerLogo} width="130" height="30" alt="logo" />
                </a>
                <ul className="flex items-around justify-center gap-16 max-lg:hidden xl:mr-16">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className="font-montserrat leading-normal text-lg">{link.label}</a>
                        </li>
                    ))}
                </ul>
                <div className='hidden max-lg:block'>
                    <img src={hamburger} alt="hamburger" width="25" height="25" />
                </div>
            </nav>
        </header>
    )
}

export default Nav