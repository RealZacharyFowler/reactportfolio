import './index.scss'
import LogoZ from '../../assets/images/logo-z.png'
import LogoSubtitle from '../../assets/images/logo_sub3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {Link, NavLink} from 'react-router-dom'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoZ} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target='_blank' 
                rel='noreferrer'
                href='https://www.linkedin.com/in/fowlerzachary/'
                >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                target='_blank' 
                rel='noreferrer'
                href='https://github.com/RealZacharyFowler'
                >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                target='_blank' 
                rel='noreferrer'
                href='https://www.instagram.com/realzacfowler/'
                >
                <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
            
        </ul>
    </div>
)

export default Sidebar