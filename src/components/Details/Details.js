import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Hero1 from '../images/hero1.png';
import { Button } from '@material-ui/core';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import Typical from 'react-typical';
import '../Banner/Banner.css';
const Details = () => {
    return (
        <div>
            <div className="home" style={{
                padding: "10%", background: "rgb(191,222,230)",
                background: "linear-gradient(90deg, rgba(219,244,251,1) 0%, rgba(238,255,255,1) 50%, rgba(227,253,255,1) 100%)"
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="font">Hi There!</h2>
                            <h1 className="for-font">This is Nahid Hasan</h1>
                            <Typical
                                steps={['Programmer', 2000, 'Full Stack Developer!', 2000, 'Engineer!', 2000, 'Cricketer!', 2000]}
                                loop={Infinity}
                                wrapper="h3"
                            />
                            <p class="text-justify">Hi This is Nahid Hasan and studying Computer Science and Engineering.I am interested in Mobile
                                and Web projects and currently working as an individual Full Stack Developer. I have a total experience of more than one years
                                working in web development and Expert in Python with knowledge of Django Web Framework and Javascript , React.js .Familiarity
                                with some ORM libraries.Good understanding of Django templating and server-side templating language. Basic understanding of front-end
                                technologies such as HTML5,CSS,Bootstrap,Javascript,React.js,Ajax,Fetch Api and Proficient understanding of code version control tool Git
                                and Database system MySQL,Oracle,SQLite.</p>
                            <p>I wish i could be a great software engineer.Once Upon a time i wanted to be a Cricketer.Unfortunately i didn't be a Professional Cricketer.Basically I'm a bowling all-rounder.I have played in many large hall Tournament.And i love to play Cricket.</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1WvrGrgOV3J5ViFoyFhaRtixxhNR_CsZC/view?fbclid=IwAR0jHJdDghm5q_rVaxX9z4-WCF1FDnXoQwP-zarqUhUogypIStK61YPblHc" ><Button size="large" variant="contained" color="primary">
                                Download Resume <AssignmentReturnedIcon />
                            </Button></a>
                            <br />
                            <div className="row">
                                <div className="col pt-4 pb-3">
                                    <div className="circle-footer">
                                        <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/Nahid2194"> <FontAwesomeIcon icon={faFacebookF} /></a>

                                    </div>
                                    <div className="circle-footer">
                                        <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/nahid_jc/"> <FontAwesomeIcon icon={faInstagram} /></a>

                                    </div>
                                    <div className="circle-footer">
                                        <a target='_blank' rel="noopener noreferrer" href="https://github.com/Nahidjc"> <FontAwesomeIcon icon={faGithub} /></a>

                                    </div>
                                    <div className="circle-footer">
                                        <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/nahidjc/"><FontAwesomeIcon icon={faLinkedin} /></a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="extra-animation">
                                <img src={Hero1} className="img_cover" alt="Nahid Hasan" style={{ border: "3px solid #0caab0", borderRadius: "50%", width: "99%", paddingTop: "2%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;