import React from 'react'
import lady from "../assets/lady.png";
import gens from "../assets/gens.png";
import lady1 from "../assets/lady1.png";
import gens2 from "../assets/gens2.png";
import "./Testimonials.css"
// import Footter from './Footter';


function Testimonials() {
    const Testimonials = [
      { name: "Ayesha Khan", image: lady, title:"Mobile-friendly and easy to use. Found discounts easily. Search and filters worked well. Checkout was secure. One of the better e-commerce sites I’ve used." },
      { name:"Rohan Mehta", image: gens, title:"Great selection with detailed listings. Easy to navigate and trustworthy. Order arrived on time and well-packaged. Will definitely be shopping here again soon."  },
      { name:"Sneha Verma", image: lady1, title:"Customer service was responsive and helpful. Product variety is solid. Delivery was prompt . Highly recommend for a dependable shopping experience."},
      { name:"Aditya Rao", image: gens2, title: "Fast-loading site with smooth checkout. Products matched descriptions perfectly. Shipping was quick, . Definitely a reliable platform for hassle-free online shopping." },
    ];
  return (
  <>
      <div className='Testimonials'>
      {
        Testimonials.map((v,i)=>(
          <div  className='Testimonials-card' key={i}>
           <div className='upper'> <img src={v.image}></img></div>
          <div className='lower'>
          <h6>{v.name}</h6>
          <p>{v.title}</p>
          <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
          </div>
          </div>

        )

        )
      }
    </div>
    
  </>
  )
}

export default Testimonials