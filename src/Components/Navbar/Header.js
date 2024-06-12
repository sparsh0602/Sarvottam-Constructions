import React, { useState } from 'react'
import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-scroll';

export default function Header({ scrollToSection }) {
    const [hamburger, sethamburger] = useState(false)
    const [changeColor, setchangeColor] = useState(false)

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 90)
            setchangeColor(true)
        else
            setchangeColor(false)
    })
    return (
        <div className={changeColor == false ? 'mainOutterContainer' : 'mainOutterContainer darkBackground'}>
            <div className='logoContainer'>
                <div className={hamburger == false ? 'FirstName' : 'hamburgerNone'}>Sarvottam</div>
                <div className={hamburger == false ? 'SecondName' : 'hamburgerNone'}>Construction</div>
            </div>

            <div className='desktop tablet optionsOutterContainer'>
                <div className='optionsAboveContainer'>
                    <Link className='optionContainer optionContainer1'
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={200}>
                        Home
                    </Link>
                    <Link className='optionContainer optionContainer2' onClick={scrollToSection}
                        to="ourCollection"
                        spy={true}
                        smooth={true}
                        offset={-135}
                        duration={200} >
                        Our Collection
                    </Link>
                    <Link className='optionContainer optionContainer3'
                        to="realEstates"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={200}>
                        Real Estates
                    </Link>
                    <Link className='optionContainer optionContainer4'
                        to="whyUs"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={200}>
                        Why us ?
                    </Link>
                </div>


                <div className='optionsDownContainer'>
                    <Link className='optionItem optionItem1'
                    >
                        About
                    </Link>

                    <Link className='optionItem optionItem2'
                    >
                        Gallery
                    </Link>

                    <Link className='optionItem optionItem3'
                    >
                        Contact Us
                    </Link>

                    <Link className='optionItem optionItem4'
                    >
                        Careers
                    </Link>
                </div>
            </div>

            <div className='mobile hamburger'>
                <button className='hamburgerIconContainer' onClick={() => { sethamburger(!hamburger) }}>
                    <GiHamburgerMenu className='hamburgerIcon' />
                </button>
                <div className={hamburger == true ? 'hamburgerMobileMenu' : 'hamburgerNone'}>
                    <div className='optionsAboveContainer'>
                        <Link className='optionContainerMobile'
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={200}>
                            Home
                        </Link>
                        <Link className='optionContainerMobile' onClick={scrollToSection}
                            to="ourCollection"
                            spy={true}
                            smooth={true}
                            offset={-135}
                            duration={200}>
                            Our Collection
                        </Link>
                        <Link className='optionContainerMobile'
                            to="realEstates"
                            spy={true}
                            smooth={true}
                            offset={-127}
                            duration={200}>
                            Real Estates
                        </Link>
                        <Link className='optionContainerMobile'
                            to="whyUs"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={200}>
                            Why us ?
                        </Link>

                    </div>

                    <div className='optionsDownContainer'>
                        <button className='optionItemMobile'> About</button>
                        <button className='optionItemMobile'> Gallery</button>
                        <button className='optionItemMobile'>  Contact </button>
                        <button className='optionItemMobile'>  Careers</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
