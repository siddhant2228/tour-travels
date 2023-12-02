import React  from 'react'
import './about.css'

// Import Images

import img13 from '../../assets/cartoon_mountain-removebg-preview.png'
import img14 from '../../assets/cartoon_hiking-removebg-preview.png'
import img15 from '../../assets/cartoon_customer-removebg-preview.png'



// import Video
import video from '../../assets/video.mp4'




const About = () => {

 // useEffect(()=>{
 //   Aos.init({duration:2000})
// } , [])
  

  return (
    <section className='about section'>
      <div className="secContainer">
        <h2 className="title"> Why Hiking</h2>

        <div className="mainContent container grid">
          <div  className="singleItem">
            <img src={img13} alt =" si" />

            <h3> 100+ Mountains</h3>
           
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis beatae corporis consequuntur nulla deleniti ducimus eius? Vero, temporibus dolores beatae molestias iure error quidem. Deserunt explicabo placeat mollitia eveniet expedita.</p>
          
         </div>
        

         <div  className="singleItem">
            <img src={img14} alt ="dd " />

            <h3> 1000+ Hikings</h3>
           
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis beatae corporis consequuntur nulla deleniti ducimus eius? Vero, temporibus dolores beatae molestias iure error quidem. Deserunt explicabo placeat mollitia eveniet expedita.</p>
          
         </div>

        

         <div  className="singleItem">
            <img src={img15} alt =" ha" />

            <h3> 2000+ Customers</h3>
           
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis beatae corporis consequuntur nulla deleniti ducimus eius? Vero, temporibus dolores beatae molestias iure error quidem. Deserunt explicabo placeat mollitia eveniet expedita.</p>
          
         </div>


        </div>

        <div className="videoCard Container">
          <div className="cardContent grid">
            <div  className="cardText">
              <h2> Wonderful House Expirence in there!</h2>
              <p> The Adventure Subranking is based on an equally weighted average of scores from five country</p>
            </div>
            
            <div  className="cardVideo">
              <video src={video} autoPlay loop muted type ="video/mp4" >

              </video>
            </div>

          </div>
        </div>

        </div>

</section>
     
    
      
   
  )
}

export default About
