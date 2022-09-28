import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddIcon from '@mui/icons-material/Add';

export default function RadialNav() {

    const [menuActive, setMenuActive] = useState(false)
    const rotateBefore = {
        transform: "rotate(0deg)",
    }

    const rotateAfter = {
        transform: "rotate(315deg)",
    }
    const toggleMenu = () => {
        setMenuActive(prev => !prev)
    }

    const liRotate = "rotate(calc(360deg / 8 * var(--i))) translateX(0px)";

    const style = [
        {
            "--i": 0,
            "--clr": "#ff2972",
            transition: "0.5s",
            transitionDelay: "calc(0.1s * var(--i)",
            transform: menuActive && liRotate
        },
        {
            "--i": 1,
            "--clr": "#fee800",
            transition: "0.5s",
            transitionDelay: "calc(0.1s * var(--i)",
            transform: menuActive && liRotate
        },
        {
            "--i": 2,
            "--clr": "#04fc43",
            transition: "0.5s",
            transitionDelay: "calc(0.1s * var(--i)",
            transform: menuActive && liRotate
        },
        {
            "--i": 3,
            "--clr": "#fe00f1",
            transition: "0.5s",
            transitionDelay: "calc(0.1s * var(--i)",
            transform: menuActive && liRotate
        },
        {
            "--i": 4,
            "--clr": "#00b0fe",         
            transition: "0.5s",
            transitionDelay: "calc(0.1s * var(--i)",
            transform: menuActive && liRotate
        },
        {
            "--i": 5,
            "--clr": "#fea600",
            transition: "0.5s",
            transitionDelay: "calc(0.1s * var(--i)",
            transform: menuActive && liRotate
        },
        {
            "--i": 6,
            "--clr": "#a529ff",
            transition: "0.5s",
            transitionDelay: "calc(0.1s * var(--i)",
            transform: menuActive && liRotate
        },
        {
            "--i": 7,
            "--clr": "#01bdab",
            transition: "0.5s",
            transitionDelay: "calc(0.1s * var(--i)",
            transform: menuActive && liRotate
        },
    ]

    return (
        <div className='radial-nav'>
            <nav className="navbar">
                <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
                    <div className='nav-toggle' onClick={toggleMenu} style={menuActive ? rotateBefore : rotateAfter}>
                        <AddIcon className="control-icon icon" />
                    </div>
                    <li style={style[0]}>
                        <a href="/"><HomeIcon className="icon"/></a>
                    </li>
                    <li style={style[1]}>
                        <a href="/bio"><Person2Icon className="icon"/></a>
                    </li>
                    <li style={style[2]}>
                        <a href="/setting"><SettingsIcon className="icon"/></a>
                    </li>
                    <li style={style[3]}>
                        <a href="/email"><EmailIcon className="icon"/></a>
                    </li>
                    <li style={style[4]}>
                    <a href="/key"><KeyIcon className="icon"/></a>
                    </li>
                    <li style={style[5]}>
                        <a href="/video"><VideocamIcon className="icon"/></a>
                    </li>
                    <li style={style[6]}>
                        <a href="/game"><VideogameAssetIcon className="icon"/></a>
                    </li>
                    <li style={style[7]}>
                        <a href='/camera'><CameraAltIcon className="icon"/></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}