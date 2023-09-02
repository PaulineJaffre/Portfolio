import 'src/components/Navbar/navbar.scss'
import logo from 'src/assets/logoportfolio.png'
import { Link } from 'react-router-dom'

 
function NavBar() {
    return (
        <header className='navigation'>
            <div className='navLogo'>
            <Link to="/"><img src={logo} alt='portfolio' className='portfolio-logo' /></Link>
            </div>
            <nav className='navbar'>
                <ul>
                    <li><Link to="About" className="navLink">A propos</Link></li>
                    <li><Link to="Cards" className="navLink">Portfolio</Link></li>
                    <li><Link to="Contact" className="navLink">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar