import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from 'react-simple-animate';
import './style.scss';

const Home = () => {

    const navigate = useNavigate();
    console.log(navigate);


    const handleNavigateToContactMePage = () => {
        navigate('/contact')
    }


    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Zidan
                    <br />
                    A Software Developer
                </h1>
            </div>
            <Animate
                play
                duration={2}
                delay={0}
                start={{
                    transform: 'scale(50%)'
                }}
                end={{
                    transform: 'scale(100%)'
                }}>
                <div className="home__contact-me">
                    <button class="rocket-button" onClick={handleNavigateToContactMePage}>Hire me</button>
                </div>
            </Animate>
        </section >
    )
}



export default Home