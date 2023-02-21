import React from "react";
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Github from '../../img/github.png'
import Instagran from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Biz1 from '../../img/biz1.png'
import Biz from '../../img/biz.jpg'
import Crown from '../../img/crown.png'
import Heartemoji from '../../img/heartemoji.png'
import Glassesimoji1 from '../../img/glassesimoji.png'
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion';

const Intro = () => {

    const transition = {duration : 2, type: 'spiring'}

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white': ''}}>I'am Biz24</span>
                    <span>Tetap semangat kawan <br />Episode kita masih panjang</span>
                    <span>Frontend Developer and Backend Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum quae quasi!</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="">
                    <img src={Github} alt="" />
                    </a>
                    <a href="">
                    <img src={Instagran} alt="" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Biz1} alt="" />
                <motion.img
                initial={{left: '-36%'}}
                whileInView={{left: ''}}
                transition={transition}

                src={Glassesimoji1} alt="" />
                <motion.div
                initial={{top: '-4%', left: '4%'}}
                whileInView={{left: '68%'}}
                transition={transition}

                style={{top: '-4%', left: '68%'}}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
                </motion.div>
                <motion.div
                initial={{left: '9rem', top: '18rem'}}
                whileInView={{left: '0rem'}}
                transition={transition}

                style={{top: '18rem', left: '0rem'}}>
                    <FloatingDiv image={Heartemoji} txt1='Best Design' txt2='In The Universe' />
                </motion.div>
                
                <div className="blur"
                
                style={{
                    background: "#C1F5FF",
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}
                
                ></div>
            </div>
        </div>
    )
}

export default Intro