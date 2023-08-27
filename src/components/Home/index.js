import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-z.png'
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a','c','h','a','r','y']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.',]

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(idTimeOut);
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span> 
                    <span className={`${letterClass} _12`}>i,</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>Full Stack Developer / JavaScript / Python / JAVA</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home