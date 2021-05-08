import React,{useEffect} from 'react';
import AOS from 'aos';
import imgabout from './images/compant-logo.png'
const Aboutus =()=>{
    useEffect(() => {
        AOS.init({duration:1700})
    }, []);
    return(<>
       <div className="container-fluid d-flex justify-content-center">
           <div className="row justify-content-md-center ">
            <div className="col-md-5 mt-5 mb-2 fs">
                <h1 className="fs" data-aos="zoom-in">Cubexo is the Leading Software Technology</h1> 
                <h1 className="fs" data-aos="zoom-in">"Power of Code always output Unique"</h1>
            </div>
            <div className="col-md-5 mt-5 mb-3">
                <img data-aos="zoom-out" className="logo-about" src={imgabout}alt="/"/>
            </div>
               
           </div>
           
        </div>
    
           <div className="container">
           <div className="row ">
               <div className="col-md-10 gr mb-5 rounded );">
                <p data-aos="zoom-out">:- Providing creative services through digital design is our sole purpose here at CubexO. We thrive to push our creative boundaries to help your business come out on top in the digital world.</p>
                <p data-aos="zoom-out">:- We want nothing more than to see our clients succeed online, and we’ve got the talent and expertise to make it happen. We are here to work with you to capture your vision and share it with the world. </p>
                <p data-aos="zoom-out">:- Our business domain knowledge, proven methodologies, and technology expertise of skilled software professionals yield high quality solutions that add value to businesses. From startups to enterprises, We cater to them all for their diverse technology requirements. </p>
                <p data-aos="zoom-out">:- We provide our resources on a monthly and hourly basis to other teams to enhance their business, as we believe in growing up together. </p>
                <p data-aos="zoom-out">:- We strive to exceed your expectations by breaking barriers and changing the game. If you need help with hiring and payroll contact us. We’re available to help you navigate even the most difficult human resources issues.</p>            
               </div>
               <div className="col-md-10">
                   
               </div>
           </div>
           </div>
       </>
    )
}
export default Aboutus;