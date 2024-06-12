import React from 'react'
import BannerVideo from './Images/BannerVideo.mp4'
import Banner2 from './Images/Banner2.jpeg'
import './Banner.css'
export default function Banner() {
    return (

        <div className="video-container">
            <video
                src={BannerVideo}
                className="full-page-video"
                autoPlay
                muted
                loop
            />
            <img
                src={Banner2}
                className="banner2"
            />

            <div className='Banner2Details bannerDesktop tablet'>
                <div><p className='headerBanner2'>SOMEDAY IS NOW.</p></div>
                
                <div > <p className='subHeaderBanner2' >Living in a modern  home is no longer about someday, it’s accessible now. Connect Homes offers curated design options with the efficiency of modern prefab house manufacturing. If you’re seeking lots of natural light, open-concept floor plans and a stress-free build process, you’ve come to the right place.</p>
                </div>
            </div>

            <div className='Banner2DetailsMobile bannerMobile'>
                <div className='headerBanner2Container'><p className='headerBanner2'>SOMEDAY IS NOW.</p></div>
                <br />
                <div className='subHeaderBanner2'> <p className='subHeaderBanner2' >Living in a modern home is no longer about someday, it’s accessible now. Connect Homes offers curated design options with the efficiency of modern prefab house manufacturing. If you’re seeking lots of natural light, open-concept floor plans and a stress-free build process, you’ve come to the right place.</p>
                </div>
            </div>
        </div>

    )
}
