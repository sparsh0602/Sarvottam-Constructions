import React, { useState } from 'react'
import './RealEstates.css'
import buy from './Images/Buy.png'

export default function RealEstates() {
  const words = ["buy", "rent", "invest in", "renovate", "sell"];
  let index = 0;

  function changeWord() {
    const changingWordElement = document.getElementById('changing-word');
    changingWordElement.textContent = words[index];
    index = (index + 1) % words.length;
  }
  setInterval(changeWord, 2000);


  const words2 = ["buy", "rent", "invest in", "renovate", "sell"];
  let index2 = 0;

  function changeWord2() {
    const changingWordElement2 = document.getElementById('changing-word2');
    changingWordElement2.textContent = words2[index2];
    index2 = (index2 + 1) % words2.length;
  }
  setInterval(changeWord2, 2000);

  return (
    <div className='MainReasEstatesDiv' id='realEstates'>
      <div className='RealStateDiv RealEstateDesktop'>
        <div className='RealEstateHeaderContainer'>
          REAL ESTATE
        </div>

        <div className='RealEstateSubHeaderContainer'>
          WE <span className='RealStateTypeHighligter' id='changing-word'>sell</span> PROPERTIES IN DELHI NCR
        </div>

        <div className='RealEstateCardContainer'>
          <div className='RealEstateCard RealEstateCard1'><img src={buy} className='buyImage'></img></div>
          <div className='RealEstateContactUs'><button className='RealEstateButton'>Get in Touch</button></div>

        </div>
      </div>

      <div className='RealStateDiv RealEstateMobile'>
        <div className='RealEstateHeaderContainer'>
          REAL ESTATE
        </div>

        <div className='RealEstateSubHeaderContainer'>
          WE <span className='RealStateTypeHighligter' id='changing-word2'>sell</span> PROPERTIES IN DELHI NCR
        </div>

        <div className='RealEstateCardContainer'>
          <div className='RealEstateCardMobile RealEstateCard1'>
            <img src={buy} className='buyImage'></img>
          </div>
          <div className='RealEstateContactUs'><button className='RealEstateButton'>Get in Touch</button></div>

        </div>
      </div>
    </div>
  )
}
