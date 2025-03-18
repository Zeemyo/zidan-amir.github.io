import React from "react";
import { BsMailbox2, BsPhoneFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import "./style.scss";

const Contact = () => {
    return (
        <section id="contact" className="contact">
            {/* <PageHeaderContent headerText="My Contact" icon={<BsPhone size={40} />} /> */}
            <div className="contact__contact-me">
                <h3>My Contact</h3>
            </div>
            <div className="contact__content">
                <Animate
                    play
                    duration={0.5}
                    delay={0}
                    start={{
                        transform: "translateY(200px)",
                    }}
                    end={{
                        transform: "translateY(0px)",
                    }}
                >
                    <div className="contact__content__form">
                        <div className="contact__content__form__controlswrapper">
                            <div className="contact__social-icons">
                                <div className="top-icons">

                                    <a
                                        href="https://wa.link/5fcmh7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <BsPhoneFill size={100} className="phone-icon" />
                                        <h3>  +6285157113317</h3>
                                    </a>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <a
                                        href="https://www.linkedin.com/in/zidan-alamsyah-amir/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin size={100} className="linkedin-icon" />
                                        <h3>  Zidan Alamsyah Amir</h3>
                                    </a>
                                </div>

                                <div>
                                    <a
                                        href="https://mail.google.com/mail/u/zidanalam96@gmail.com/#inbox?compose=new"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <BsMailbox2 size={100} className="mail-icon" />
                                        <h3>  zidanalam96@gmail.com</h3>
                                    </a>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <a
                                        href="https://github.com/Zeemyo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub size={100} className="github-icon" />
                                        <h3>  Zeemyo</h3>
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>
                </Animate>
            </div>
        </section>
    );
};

export default Contact;
