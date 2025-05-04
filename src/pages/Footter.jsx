import React from 'react'
import "./Fotter.css"
function Footter() {
  return (
   <>
     <div className='Fotter'>
      <div className='left'>
        <p>DromeKart is a modern e-commerce platform offering a wide range of quality products at competitive prices. With a user-friendly interface, secure checkout, responsive design, and reliable delivery, it ensures a seamless shopping experience. Customers enjoy personalized service, easy navigation, and excellent product variety—all in one convenient online destination.</p>
      </div>
      <div className='middle'>
        <p><i className="fa-solid fa-envelope-open-text"></i> : support@dromekart.com</p>
        <p><i className="fa-solid fa-phone"></i> : +91-1234567890</p>
        <p><i className="fa-brands fa-instagram"></i> : @DromeKart</p>
        <p><i className="fa-brands fa-facebook"></i> : DromeKart@facebook</p>
        
      </div>

      <div className='right'><p>© 2025 DromeKart. All rights reserved.
Designed with ❤️ by DromeKart Team.
Contact Us | Privacy Policy | Terms of Service</p></div>
     
    </div>
   
   </>
  )
}

export default Footter