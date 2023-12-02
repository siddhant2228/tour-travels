import React from 'react'
import './footer.css'
import {SiYourtraveldottv} from 'react-icons/si'
import {BsFacebook} from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillMail } from 'react-icons/ai'



const Footer = () => {

//  useEffect(()=>{
 //   Aos.init({duration:2000})
 // } , [])

  return (

    <div className='footer'>
     <div className="secContainer container grid">
      <div  className="logoDiv">

       <div  className="footerLogo">
        <a href="#" className="logo flex" >
          <h1 className='flex'>
          <SiYourtraveldottv className="icon" />
            Roamify
          </h1>
        </a>
       </div>
       <div  className="socials flex">
       <BsFacebook className='icon' />
       <BsInstagram className='icon' />
       <BsLinkedin className='icon' />
       <AiFillTwitterCircle className='icon' />
       <AiFillMail className='icon' />

       </div>

      </div>

      <div className="footerLinks">
        <span className='linkTitle'>
           Information
        </span>

        <li>
          <a href = "#"> Home</a>
        </li>

        
        <li>
          <a href = "#">Explore</a>
        </li>

        
        <li>
          <a href = "#"> Travel</a>
        </li>

        
        <li>
          <a href = "#">Blog</a>
        </li>

      </div>


      <div  className="footerLinks">
        <span className='linkTitle'>
           HelpFul Links
        </span>

        <li>
          <a href = "#"> Destination</a>
        </li>

        
        <li>
          <a href = "#">Support</a>
        </li>

        
        <li>
          <a href = "#"> Travel & Condition</a>
        </li>

        
        <li>
          <a href = "#">Privacy</a>
        </li>

      </div>



      <div   className="footerLinks">
        <span className='linkTitle'>
          Contact Us
        </span>

        <span className='phone'> 8287230795 </span>
        <span className='email'> Siddhant6979593@gmail.com </span>
        
        


        

      </div>



    </div>
  </div>
  )
}

export default Footer
