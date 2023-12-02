import React  from 'react'
import './home.css'

const Home = () => {

 // useEffect(()=>{
  //  Aos.init({duration:2000})
 // } , [])
  return (
    <section className='home' >
      
      <div className="secContainer container ">
        <div className="homeText">
        <h1  className='title'> Plan Your Trip with Travel Roamify </h1>
      
        <p  className='subTitle'> Travel to your favorite city with respectful of the environment </p>  

      <button  className='btn'> 
         <a href='#'> Explore Now </a>
      </button>

        </div>

        <div className="homeCard grid">

         <div  className="locationDiv">
          <label htmlFor="location"> Location </label>
          <input type="text" placeholder='Dream Destination' />
         </div>

         <div  className="disDiv">
          <label htmlFor="distance"> Distance </label>
          <input type="text" placeholder='11/Meters' />
         </div>
          

         <div  className="priceDiv">
          <label htmlFor="price"> Price </label>
          <input type="text" placeholder='10k-50k'/>
         </div>

         <button  className='btn'>
            Search
         </button>


        </div>
      </div>

    </section>
  )
}

export default Home
