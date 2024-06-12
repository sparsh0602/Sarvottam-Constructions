import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-scroll';
export default function Footer() {
  return (
    <div className='MainFooterOutterDiv'>

      <div className='HorizontalLineContainer'>
        <div className='FooterHorizontalLine'></div>
      </div>
      <div className='MainFooterInnerDivDesktop'>

        <div className='FooterItemDiv1'>
          <Link to="home"
           spy={true}
           smooth={true}
           offset={-50}
           duration={200}
           >
          SARVOTTAM<br />CONSTRUCTIONS
          </Link>
        </div>
        <div className='FooterItemDiv'>
          <Link className='FooterBr'
           to="home"
           spy={true}
           smooth={true}
           offset={-50}
           duration={200}>
            HOME
            </Link>

          <Link className='FooterBr'
          to="ourCollection"
          spy={true}
          smooth={true}
          offset={-135}
          duration={200}>
            OUR COLLECTION
            </Link>

          <Link className='FooterBr'
          to="realEstates"
          spy={true}
          smooth={true}
          offset={-120}
          duration={200}>
            REAL ESTATES
            </Link>

          <Link className='FooterBr'
          to="whyUs"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}>
            WHY US?
            </Link>
        </div>
        <div className='FooterItemDiv'>
          <button className='FooterBr'>ABOUT</button>
          <button className='FooterBr'>GALLERY</button>
          <button className='FooterBr'>CONTACT US</button>
          <button className='FooterBr'>CAREERS</button>
        </div>
        <div className='FooterItemDiv FooterItemDivRight'>
          <div className='FooterRightDiv'>sarvottam@gmail.com</div>
          <div className='FooterRightDiv'>
            <button className='SocialHandlesButton'>
              <FaInstagram className='SocialHandlesIcon' />
            </button>
            <button className='SocialHandlesButton'>
              <FaFacebook className='SocialHandlesIcon' />
            </button>
            <button className='SocialHandlesButton'>
              <FaLinkedin className='SocialHandlesIcon' />
            </button>
          </div>
        </div>
      </div>




      <div className='MainFooterInnerDivMobile'>

        <div className='HorizontalLineContainer'>
          <div className='FooterHorizontalLine'></div>
        </div>

        <div className='FooterItemDiv1'>
          SARVOTTAM<br />CONSTRUCTIONS
        </div>

        <div className='FooterMobileDiv'>
          <div className='FooterItemDiv'>
            <Link className='FooterBr'
             to="home"
             spy={true}
             smooth={true}
             offset={-50}
             duration={200}>
              HOME</Link>

            <Link className='FooterBr'
            to="ourCollection"
            spy={true}
            smooth={true}
            offset={-135}
            duration={200}>
              OUR COLLECTION
              </Link>


            <Link className='FooterBr'
            to="realEstates"
            spy={true}
            smooth={true}
            offset={-120}
            duration={200}>
              REAL ESTATES
              </Link>

            <Link className='FooterBr'
             to="whyUs"
             spy={true}
             smooth={true}
             offset={-100}
             duration={200}>
              WHY US?
              </Link>

          </div>
          <div className='FooterItemDiv'>
            <button className='FooterBr'>ABOUT</button>
            <button className='FooterBr'>GALLERY</button>
            <button className='FooterBr'>CONTACT US</button>
            <button className='FooterBr'>CAREERS</button>
          </div>
        </div>
        <div className='FooterItemDiv FooterItemDivRight'>
          <div className='FooterRightDiv FooterRightDivAbove'>sarvottam@gmail.com</div>
          <div className='FooterRightDiv FooterRightDivSocial'>
            <button className='SocialHandlesButton'>
              <FaInstagram className='SocialHandlesIcon' />
            </button>
            <button className='SocialHandlesButton'>
              <FaFacebook className='SocialHandlesIcon' />
            </button>
            <button className='SocialHandlesButton'>
              <FaLinkedin className='SocialHandlesIcon' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
