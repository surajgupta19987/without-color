import React from 'react';
import done from './images/done.gif'
import img from './images/client.jpeg'
import Reviewcard from './Review-card';
const Review =()=>{
return(
    
    <div className="container-fluid text-center d-flex justify-content-center">
     
        <div className="row">
        <div> <img src={done} alt="/"/>
      <h1>Our Clients Testimonial and their Feedbacks- CUBEXO</h1>
      </div> 
           <Reviewcard imgsrcr={img} projectname="Manon"/>
           <Reviewcard imgsrcr={img} projectname="Swim instructor"/>
        </div>
    </div>
    
)

}
export default Review;