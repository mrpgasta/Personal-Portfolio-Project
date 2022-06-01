import React from 'react';
import '../App.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {SocialMediaIconsReact} from 'social-media-icons-react';

import { useMediaQuery } from 'react-responsive'


export const Home = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })

    return (
        <div style={{
            color: "white",
            justifyContent: "left",
            display: "block",
            height:"1080px",
            alignItems: 'center'
        }}>
            <div id='header' style={{
                margin: "120px 20px 20px 20px",
                padding: "0.2rem calc((100vw - 1000px) / 2)",
            }}>
                <div style={{
                    lineHeight: "1.4",
                }}>
                    <h1 style={{fontSize : "25px"}}>Hello!</h1>
                    <h1 style={{fontSize : "65px", fontWeight: "bold",}}>I'm Mc Reagan P. Gasta</h1>
                    <p style={{fontSize : "25px",color : "#ff4400",}}>I'm a Computer Science Student
                        and a Rockstar multimedia artist.
                    </p>
                </div>
                <br/>
                <hr
                    style={{
                        color: "white",
                        backgroundColor: "white",
                        height: 2,
                        width:"100px",
                        float:'left',
                    }}
                />
                <br/>
                <div style={{lineHeight: "1.5"}}>
                    <p style={{fontSize : "22px",color : "white"}}>
                        Proficient in graphic designing, animating motion graphics
                        and designing stunning websites.
                        Knowledgeable in ReactJS, Flutter, Python and C.
                    </p>
                </div>
            </div>


            <div id='services-section' style={{
                backgroundColor: "white",
            }}>
                <div style={{
                    paddingTop: "10px",
                    lineHeight: "1.0",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                    padding: "0.2rem calc((100vw - 1000px) / 2)",
                }}>
                    <h1 style={{fontSize : "65px", fontWeight: "bold",alignItems: 'center', marginTop: "40px"}}>Services</h1>
                </div>
                <div style={isTabletOrMobile? {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: 'center',
                    padding: "0.2rem calc((100vw - 1000px) / 2)",
                }:{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    padding: "0.2rem calc((100vw - 1000px) / 2)",
                }}>
                    <div
                        style={{margin:"20px",marginBottom: '60px'}}
                        href="#"
                         className="block p-6 max-w-sm bg-black shadow-md hover:bg-black-100 dark:bg-black-800 dark:hover:bg-orange-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Website Design
                        </h5>
                        <hr
                            style={{
                                color: "white",
                                backgroundColor: "white",
                                height: 4,
                                width:"100px",
                                float:'left',
                            }}
                        />
                        <br/>
                        <p className="font-normal text-black-700 dark:text-white-400">I create sleek website designs for your business
                        and personal needs.</p>
                    </div>
                    <div
                        style={{margin:"20px",marginBottom: '60px'}}
                        href="#"
                        className="block p-6 max-w-sm bg-black shadow-md hover:bg-black-100 dark:bg-black-800 dark:hover:bg-orange-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Graphic Design
                        </h5>
                        <hr
                            style={{
                                color: "white",
                                backgroundColor: "white",
                                height: 4,
                                width:"100px",
                                float:'left',
                            }}
                        />
                        <br/>
                        <p className="font-normal text-black-700 dark:text-white-400">I create eye-catching graphics for you to boost your business!</p>
                    </div>
                    <div
                        style={{margin:"20px",marginBottom: '60px'}}
                        href="#"
                        className="block p-6 max-w-sm bg-black shadow-md hover:bg-black-100 dark:bg-black-800 dark:hover:bg-orange-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Video Editing
                        </h5>
                        <hr
                            style={{
                                color: "white",
                                backgroundColor: "white",
                                height: 4,
                                width:"100px",
                                float:'left',
                            }}
                        />
                        <br/>
                        <p className="font-normal text-black-700 dark:text-white-400">I visualize your ideas into
                            motion graphics and videos.</p>
                    </div>
                </div>
            </div>


            <div id="portfolio" style={{
                backgroundColor: "#e5e5e5",
                paddingTop: "50px",
                paddingBottom: "50px",
            }}>
                <div style={isTabletOrMobile?{
                    color: 'black',
                    width:"100%",
                    zIndex: -2,
                    top: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: "0.2rem calc((100vw - 1000px) / 2)",
                }:{
                    color: 'black',
                    width:"100%",
                    zIndex: -2,
                    top: 0,
                    display: 'flex',
                    flexDirection: "row",
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: "0.2rem calc((100vw - 1000px) / 2)",
                }}>
                    <div style={isTabletOrMobile?{
                        lineHeight: "1.0",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'black',
                    }:{
                        lineHeight: "1.0",
                        color: 'black',
                        transform: 'rotate(-90deg)',
                    }}>
                        <h1 style={{fontSize : "65px", fontWeight: "bold", paddingBottom: "30px",}}>Portfolio</h1>
                    </div>
                    <AwesomeSlider bullets={false} mobileTouch={true} style={{zIndex:0}}>
                        <div style={{
                            clipPath: 'circle(50% at 50% 50%)',
                            width:"42vh",
                            height:"42vh",
                            marginLeft: "15vh"
                        }}>
                            <img src={require('../images/image1.png')} alt="image1" width="100%" height="100%" />
                        </div>
                        <div style={{
                            clipPath: 'circle(50% at 50% 50%)',
                            width:"42vh",
                            height:"42vh",
                            marginLeft: "15vh"
                        }}>
                            <img src={require('../images/image2.jpg')} alt="image1" width="100%" height="100%"/>
                        </div>
                        <div style={{
                            clipPath: 'circle(50% at 50% 50%)',
                            width:"42vh",
                            height:"42vh",
                            marginLeft: "15vh"
                        }}>
                            <img src={require('../images/image3.jpg')} alt="image3" width="100%" height="100%"/>
                        </div>
                    </AwesomeSlider>
                </div>
            </div>

            <div id='contact-me' style={{
                backgroundColor: "white",
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                padding: "0.2rem calc((100vw - 1000px) / 2)",
            }}>
                <div style={{
                    paddingTop: "100px",
                    paddingBottom: "100px"
                }}>
                    <div style={{
                        color: "black",
                    }}>
                        <h1 style={{fontSize : "70px", fontWeight: "bold",textAlign: 'right',paddingBottom:"30px",}}>Contact Me @</h1>
                    </div>
                    <div style={{
                        color: "black",
                    }}>
                        <p style={{fontSize : "45px", fontWeight: "regular",textAlign: 'right',}}>09 271 478 829</p>
                    </div>
                    <div>
                        <br/>
                        <hr
                            style={{
                                color: "black",
                                backgroundColor: "black",
                                height: 8,
                                width:"150px",
                                float:'right',
                            }}
                        />
                        <br/>
                    </div>

                    <div style={{
                        color: "black",
                    }}>
                        <p style={{fontSize : "45px", fontWeight: "regular",textAlign: 'right',}}>mrpgasta@gmail.com</p>
                    </div>
                    <div>
                        <br/>
                        <hr
                            style={{
                                color: "black",
                                backgroundColor: "black",
                                height: 8,
                                width:"150px",
                                float:'right',
                            }}
                        />
                        <br/>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: "row",
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                        <div style={{padding: "10px"}}>
                            <SocialMediaIconsReact borderColor="black" borderWidth="5" borderStyle="solid"
                                                   icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="black" iconSize="3"
                                                   roundness="100%" url="https://www.facebook.com/mcreagan.gasta/"
                                                   size="100"
                            />
                        </div>
                        <div style={{padding: "10px"}}>
                            <SocialMediaIconsReact borderColor="black" borderWidth="5" borderStyle="solid"
                                                   icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="black" iconSize="3"
                                                   roundness="100%" url="https://twitter.com/writemctwice"
                                                   size="100"
                            />
                        </div>
                        <div style={{padding: "10px"}}>
                            <SocialMediaIconsReact borderColor="black" borderWidth="5" borderStyle="solid"
                                                   icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="black" iconSize="3"
                                                   roundness="100%" url="https://www.instagram.com/mckyyboi/"
                                                   size="100"
                            />
                        </div>
                        <div style={{padding: "10px"}}>
                            <SocialMediaIconsReact borderColor="black" borderWidth="5" borderStyle="solid"
                                                   icon="behance" iconColor="rgba(255,255,255,1)" backgroundColor="black" iconSize="3"
                                                   roundness="100%" url="https://www.behance.net/mrpgasta"
                                                   size="100"
                            />
                        </div>
                        <div style={{padding: "10px"}}>
                            <SocialMediaIconsReact borderColor="black" borderWidth="5" borderStyle="solid"
                                                   icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="black" iconSize="3"
                                                   roundness="100%" url="https://github.com/mrpgasta"
                                                   size="100"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                backgroundColor: "black",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: "0.2rem calc((100vw - 1000px) / 2)",
            }}>
                <div style={{}}>
                    <h1 style={{fontSize : "20px", fontWeight: "bold",padding:"10px",}}>mrpgasta © 2022</h1>
                </div>
            </div>

        </div>
    );
};

