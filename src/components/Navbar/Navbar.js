import 'src/components/Navbar/navbar.scss'
import logo from 'src/assets/logoportfolio.png'
import { Link} from 'react-router-dom'
//import PropTypes from 'prop-types'

 
function Navbar() {
    return (
        <header className='navigation'>
            <div className='navLogo'>
            <Link href="/"><img src={logo} alt='portfolio' className='portfolio-logo' /></Link>
            </div>
            <nav className='navbar'>
                <ul>
                    <Link href='#About'  >A propos</Link>
                    <Link href='#Portfolio'  >Portfolio</Link>
                    <Link href='#Contact'  >Contact</Link>
                </ul>
            </nav>
        </header>
    )
}




export default Navbar

