import React  from 'react'
import './offer.css'
import { MdKingBed } from 'react-icons/md'
import { MdBathtub } from 'react-icons/md'
import { AiOutlineWifi } from 'react-icons/ai'
import { MdAirportShuttle } from 'react-icons/md'
import { MdLocationOn } from 'react-icons/md'
import { BsArrowRightShort } from 'react-icons/bs'


import img from '../../assets/offerbg.jpg'
import img2 from '../../assets/off1.jpg'
import img3 from '../../assets/off4.jpg'
import img4 from '../../assets/off3.jpg'
import img5 from '../../assets/offe5.jpg'
import img6 from '../../assets/off6.jpg'




// Here we use the same  high order array methods(MAP) to list our offers

const Offers= [
   
  {
    id:1,
    imgSrc:img,
    destTitle: 'Jharkhand',
    location:'India',
    price: ' 5000'
  },

    
  {
    id:2,
    imgSrc:img2,
    destTitle: 'Jharkhand',
    location:'India',
    price: ' 5000'
  },

  {
    id:3,
    imgSrc:img3,
    destTitle: 'Jharkhand',
    location:'India',
    price: ' 5000'
  },

  {
    id:4,
    imgSrc:img4,
    destTitle: 'Jharkhand',
    location:'India',
    price: ' 5000'
  },

  {
    id:5,
    imgSrc:img5,
    destTitle: 'Jharkhand',
    location:'India',
    price: ' 5000'
  },
  {
    id:6,
    imgSrc:img6,
    destTitle: 'Jharkhand',
    location:'India',
    price: ' 5000'
  }
]

const Offer = () => {

//  useEffect(()=>{
  //  Aos.init({duration:2000})
  //} , [])

  return (
    <section className='offer container section'>

    <div className="secContainer">
      <div  className="secIntro">
        
          <h2 className="secTitle"> Special Offers </h2>
          <p> From Historical cities to natural spectuculars , comes see the best of the world!</p>
        </div>

        <div className="mainContent grid">

         {
          Offers.map(({id,imgSrc,destTitle,location,price})=>{
            return(
              <div  className="singleOffer">
                <div className="destImage">
                 <img src={imgSrc} alt={destTitle} />

                  <span className="discount">
                    40% Off

                  </span>

                </div>

              <div className="offerBody">
            <div className="price flex">
              <h4> Rs {price}</h4>
              <span className='status'>
                 For Rent
              </span>
            </div>
             
             <div className="amenities flex">

              <div className="singleAmenity flex">
              <MdKingBed className="icon" />
              <small> 2 Beds </small>
              </div>


              <div className="singleAmenity flex">
              <MdBathtub className="icon" />
              <small> 1 Bath </small>
              </div>


              <div className="singleAmenity flex">
              <AiOutlineWifi className="icon" />
              <small> Wi-Fi </small>
              </div>


              <div className="singleAmenity flex">
              <MdAirportShuttle className="icon" />
              <small> Cab </small>
              </div>

             </div>

             <div className="location flex">
              <MdLocationOn className='icon' />
              <small> 450 vine #350 , {location}</small>
             </div>

             <button className='btn flex'>
               View Details
               <BsArrowRightShort className="icon" />

             </button>

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

export default Offer
