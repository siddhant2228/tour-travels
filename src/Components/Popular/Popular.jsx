import React  from 'react'
import './popular.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'

import img4 from '../../assets/pop1.jpg'
import img5 from '../../assets/pop2.jpg'
import img6 from '../../assets/pop3.jpg'
import img7 from '../../assets/pop4.jpg'
import img8 from '../../assets/pop5.jpg'
import img9 from '../../assets/pop6.jpg'




// So we are going to use high order array method to display all the destination using map
// so we need to list all the destination in one array " Data" and later we shall call each destination ny index/id


const Data = [
{
  id:1,
  imgSrc: img4,
  destTitle: 'Kedarnath',
  location: ' India',
  grade: 'Cultural Relax',
},

{
  id:2,
  imgSrc: img5,
  destTitle: 'London',
  location: ' United Kingdom',
  grade: 'Cultural Relax',
},

{
  id:3,
  imgSrc: img6,
  destTitle: 'Le Marais',
  location: ' Paris',
  grade: 'Cultural Relax',
},

{
  id:4,
  imgSrc: img7,
  destTitle: 'Florence',
  location: ' Italy',
  grade: 'Cultural Relax',
},
{
  id:5,
  imgSrc: img8,
  destTitle: 'Zürich',
  location: ' Switzerland',
  grade: 'Cultural Relax',
},

{
  id:6,
  imgSrc: img9,
  destTitle: 'Reykjavík',
  location: ' Iceland',
  grade: 'Cultural Relax',
}
]



const Popular = () => {

 // useEffect(()=>{
 //   Aos.init({duration:2000})
 // } , [])

  return (
    <section className=' popular section container '>
      <div className="secContainer">

      <div className="secHeader flex ">
        <div  className="textDiv">
          <h2 className='secTitle' > Popular Destination </h2>
          <p> From Historical Cities to Natural Specteculars , come see the best of the world!</p>
        </div>

        <div  className="iconsDiv flex">
          <BsArrowLeftShort className="icon leftIcon" />
          <BsArrowRightShort className="icon" />
        </div>

      </div>

      <div className="mainContent grid">
      {
        Data.map(({id , imgSrc , destTitle , location , grade })=>{
          return (
             
      <div   className="singleDestination">
      <div className="destImage">

        <img src={imgSrc} alt='img' />

        <div className="overlayInfo">
         <h3> {destTitle}</h3>
         <p> {location}</p> 
          
         <BsArrowRightShort className='icon' />

        </div>
      </div>

       <div className="destFooter">
        <div className="number">
          0{id}
        </div>
        
        <div className="destText flex">
        <h6>{ location}</h6>
        <span className='flex'>
        <span className='dot'>
        <BsDot className='icon' />

        </span>
        Dot

        </span>

        </div>

       </div>

    </div>

          )

        })
      }

      </div>
      
    </div>
      
    </section>
  )
}

export default Popular
