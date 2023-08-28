import './index.scss'
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(idTimeOut);
    }, [])



    return (
        <>
        <div className="container about-page"> 
        <div className="text-zone">
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ','m', 'e']}
                idx={15}
                />
            </h1>
            <p> I'm a very ambitious full-stack developer looking for a role in an
            established tech company with the opportunity to work with the latest
            technologies on challenging and diverse projects.</p>
            <p>In the meantime I love to pass my time by building fun coding projects and pair-programming with friends.</p>
            <p> If I need to describe myself in a couple sentences I would say that my life is centered around my friends and family. 
            I love making deep meaningful connections with people and helping people better themselves. I would not be where I am with the support of 
            all of those around me. My hobbies include watching anime, working out, eating good food, and findng cool cofee shops. 
            </p>
        </div>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faPython} color="#F06529" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
            </div>

        </div>
        </div>
        <Loader type="pacman" />
        </>
        
    )
}

export default About