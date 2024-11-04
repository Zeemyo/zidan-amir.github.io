import React from "react";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { skillPercentage } from './percentage'
import './style.scss'
import { skillsData } from "./utils";

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <PageHeaderContent
                headerText="My Skills"
                icon={<BsFillPersonLinesFill size={40} />}
            />
            <div className="skills__content-wrapper">
                {
                    skillPercentage.map((item, i) => (
                        <div key={i} className="skills__content-wrapper__inner-content">
                            <Animate
                                play
                                duration={1}
                                delay={0.3}
                                start={{
                                    transform: 'translateX(-200px)'
                                }}
                                end={{
                                    transform: 'translateX(0)'
                                }}
                            >
                                <h3 className="skills__content-wrapper__inner-content__category">{item.label}</h3>
                                <div className="skills__content-wrapper__inner-content__category__progressbar-container">
                                    {
                                        item.data.map((skillPercentage, j) =>
                                            <AnimateKeyframes
                                                play
                                                duration={1}
                                                keyframes={["opacity : 1", "opacity : 1"]}
                                                iterationCount="1"
                                            >
                                                <div className="progressbar-wrapper" key={j}>
                                                    <p>
                                                        {skillPercentage.skillName}
                                                    </p>
                                                </div>
                                            </AnimateKeyframes>
                                        )
                                    }
                                </div>
                            </Animate>
                        </div>
                    ))
                }
            </div >


            <div className="skills__content-wrapper__text">
                {
                    skillsData.map((item, i) => (
                        <div key={i} className="skills__content-wrapper__text__inner-content">
                            <Animate
                                play
                                duration={1}
                                delay={0.3}
                                start={{
                                    transform: 'translateX(100%)'
                                }}
                                end={{
                                    transform: 'translateX(0)'
                                }}
                            >
                                <div className="skills__content-wrapper__text__inner-content__category-text">
                                    {
                                        item.data.map((skillsData, i) =>
                                            <div className="label-wrapper" key={i}>
                                                <h3>
                                                    {skillsData.label}
                                                </h3>
                                                <p>
                                                    {skillsData.value}
                                                </p>
                                            </div>
                                        )
                                    }

                                </div>
                            </Animate>
                        </div>
                    ))
                }
            </div >

        </section >
    )
}

export default Skills;
