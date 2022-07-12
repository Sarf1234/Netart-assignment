import React from 'react'
import "./App.css"
import logo from "./img/logo.png"
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import img3 from "./img/3.png"
import call from "./img/phone-call.png"
import facebook from "./img/facebook.png"
import globe from "./img/globe.png"

function App() {
  return (
    <div>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='container'>
            <div className='left_container'>
                <img src={img1} alt='prize_logo' />
            </div>
            <div className='right_container'>
                <h4>
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
                </h4>
                <ul>
                    <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                </ul>
                <div className='img2'>
                    <img src={img2} alt='award_prize2' />
                </div>
                <p>
                Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                </p>
            </div>
        </div>
        <div className='textimg3'>
            <h5>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
            </h5>
            <div className='project_pic'>
                <div className='img3'>
                <img src={img3} alt="Project-pic" />
                </div>
                <h4 className='bottompictext'>
                Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
                </h4> 
            </div>
           <div className='hr'>
           <hr></hr>
           </div>
           <div className='diverse_segment'>
               <h3>
               C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
               </h3>
             
             <p>CHEMICALS & PROCESS <span></span> POWER <span></span> WATER & WASTE WATER <span></span> OILS & GAS <span></span> PHARMA <span></span> SUGARS & DISTILLERIES <span></span> PAPER & PULP <span></span> MARINE & DEFENCE <span></span> METAL & MINING <span></span> FOO <span></span> SOLAR <span></span> BUILDING HVAC <span></span> FIRE FIGHTING <span></span>  AGRICULTURE & RESIDENTIAL</p>
             
           </div>
           <footer className='footer'>
                <div className='colorback'>
                    <img src={call} alt='call-pic'  width={30} height={30}/>Toll free 1800 200 1234
                </div>
                <div className='colorback'>
                    <img src={facebook} alt='call-pic'  width={30} height={30}/>www.facebook.com/cripumps
                </div>
                <div className='colorback'>
                <img src={globe} alt='call-pic'  width={30} height={30}/>www.crigroups.com
                </div>

           </footer>
             
        </div>
    </div>
  )
}

export default App