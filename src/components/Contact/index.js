import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from "@emailjs/browser"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(idTimeOut);
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'contact_form',
                refForm.current,
                'alQp23Fu5TyHTRl_G',
            )
            .then(
                () => {
                alert('Message successfully sent!')
                window.location.reload(false)
                },
                () => {
                alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters  
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','M', 'e']}
                    idx={15}
                    />
                </h1>
                <p>I am interested in freelance opportunities, whether big or small. You can also contact me if you know of any job opportunities or want to pair-program sometime.</p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input 
                                type='text' 
                                name='name'
                                placeholder='Name'
                                required
                                />
                            </li>
                            <li className='half'>
                                <input 
                                type='email' 
                                name='email'
                                placeholder='Email'
                                required
                                />
                            </li>
                            <li>
                                <input 
                                type='text' 
                                name='subject'
                                placeholder='Subject' 
                                required
                                />
                            </li>
                            <li>
                                <textarea 
                                placeholder='Message'
                                name='message'
                                required
                                />
                            </li>
                            <li>
                                <input 
                                type='submit'
                                className='flat-button'
                                value="SEND"
                                />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Zachary Fowler, 
                <br />
                United States,
                <br />
                2200 K St <br />
                Sacramento, CA <br />
                <span>ZacharySamuel.Fowler@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[38.5816, -121.4944]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[38.5816, -121.4944]}>
                        <Popup>Zachary lives here, hit me up for a coffee sometime</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}


export default Contact 