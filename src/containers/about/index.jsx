import React from "react";
import { BsFillInfoSquareFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate';
import { FaPython, FaReact, FaNodeJs, FaPhp } from 'react-icons/fa';
import './style.scss';

const summary = `I have been working as a freelancer on fiverr as a game designer with 1 month and 8 months of experience, and I know clearly how to behave as a worker and how to deal with clients on fiverr. the award I have received on fiverr is rank level 1 by completing the tasks given on fiverr itself. \n

Then in terms of skills I am more inclined to design, so I am trying to become a Front-end programmer, and designing games I am also still active for things like hobbies or freelance. \n

For the future, I am trying to find a company that can accept me based on my abilities, as a front-end developer.`;

const personalDetails = [
    {
        label: "Name",
        value: "Zidan Alamsyah Amir"
    },
    {
        label: "Age",
        value: "21"
    },
    {
        label: "Address",
        value: "Jakarta Utara"
    },
    {
        label: "Email",
        value: "zidanalam96@gmail.com"
    },
    {
        label: "Phone Number",
        value: "085157113317"
    },
    {
        label: "Hobby",
        value: "Gaming, Learn New things, 3D modelling"
    },
]

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About me"
                icon={<BsFillInfoSquareFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1}
                        delay={0}
                        start={{
                            transform: 'translateX(-100%)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}>
                        <h3>Undergraduate Students of Informatics Engineering | Front-end Developer | Freelancer Game Designer at Fiverr</h3>
                        <p>{summary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1}
                        delay={0}
                        start={{
                            transform: 'translateX(80%)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}>
                        <h3 className="personalInfo"> Personal information</h3>
                        <ul>{personalDetails.map((item, i) => (
                            <li key={i}>
                                <span className="title">{item.label}:</span>
                                <span className="value">{item.value}</span>
                            </li>
                        ))
                        } </ul>
                    </Animate>
                </div>

                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: 'translateX(110%) translateY(13%)'
                    }}
                    end={{
                        transform: 'translateX(170px) translateY(50px)',
                    }}>
                    <div className="about__content__servicesWrapper">
                        <div className="about__content__servicesWrapper__innerContent">
                            <div className="about__content__servicesWrapper__innerContent__borderPlanet">
                                <div className="about__content__servicesWrapper__innerContent__borderPlanet__logo_service1">
                                    <FaPython size={60} color="#0D4C92" />
                                </div>
                                <div className="about__content__servicesWrapper__innerContent__borderPlanet__logo_service2">
                                    <FaPhp size={60} color="#8D72E1" />
                                </div>
                                <div className="about__content__servicesWrapper__innerContent__borderPlanet__logo_service3">
                                    <FaReact size={60} color="#05BFDB" />
                                </div>
                                <div className="about__content__servicesWrapper__innerContent__borderPlanet__logo_service4">
                                    <FaNodeJs size={60} color="#7CBD1E" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Animate>
            </div>
        </section >
    )
}

export default About