import React , {useEffect} from 'react'
import './blog.css'
import {BsArrowRightShort} from 'react-icons/bs'

// import Image 

import img1 from '../../assets/blog4.jpg'
import img2 from '../../assets/blog3.jpg'
import img3 from '../../assets/blog2.jpg'
import img4 from '../../assets/blog1.jpg'


// Using Map Method to dissplay all images

const Posts =[
  {
    id: 1,
    PostImage:img1,
    title: 'Masoori',
    desc: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, nihil repellat! Odio, quo autem dolorum iusto sapiente '
  },

  {
    id: 2,
    PostImage:img2,
    title: 'Masoori',
    desc: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, nihil repellat! Odio, quo autem dolorum iusto sapiente '
  },

  {
    id: 3,
    PostImage:img3,
    title: 'Masoori',
    desc: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, nihil repellat! Odio, quo autem dolorum iusto sapiente '
  },

  {
    id: 4,
    PostImage:img4,
    title: 'Masoori',
    desc: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, nihil repellat! Odio, quo autem dolorum iusto sapiente '
  }
]



const Blog = () => {

//  useEffect(()=>{
//    Aos.init({duration:2000})
//  } , [])

  return (
    <section className='blog container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2  className='secTitle' >Our Best Blog?</h2>
          <p >
            An insight to the incredible experience in the World!
          </p>
        </div>

        <div className="mainContainer grid">
          {
            Posts.map(({id ,  PostImage , title , desc})=>{
              return (
                 
            <div  className="singlePost grid">
             <div className="imgDiv">
              <img src={PostImage} alt={title} />
            </div>

            <div className="postDetails">
              <h3 >{title}</h3>
              <p >
                {desc}
              </p>
            </div>

            <a href="#" className="flex" data-aos="fade-up" data-aos-duration="4500">
             
            Read More...

            <BsArrowRightShort className="icon"/>
            
            </a>


          </div>
              )
            })
          }
        </div>

      </div>

    </section>
  )
}

export default Blog
