import React,{useEffect} from 'react';
import AOS from 'aos';
const Contactus =()=>{
    useEffect(() => {
        AOS.init({duration:1700})
    }, []);
    return(
        <>
        <div className="container mt-5 ">
            <div className="row text-center gr rounded mb-5 ">
                <h1 data-aos="slide-left">Contact us</h1>
                <div className="col-md-6 mb-5">
                <form data-aos="zoom-out" id="contact-form" onSubmit method="POST">
    <div className="form-group">
     
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <button className="btn btn-primary mt-3">Submit</button>
</form>
                </div>
                <div className="col-md-6 ">
                    <h3>Address</h3>
                    <div className=" d-flex flex-column">
                    <h5 data-aos="zoom-out"><i class="fa fa-map-marker" aria-hidden="true"></i>2nd Floor,MR Business Park ,Beside HDFC Bank Khandwa Road Indore</h5>
                    <h5 data-aos="zoom-out"><i class="fa fa-envelope-square"></i> E-mail: inbox@cubexo.io</h5>
                    <h5 data-aos="zoom-out"><i class="fa fa-envelope-square"></i> E-mail: hr@cubexo.io</h5>
                    <h5 data-aos="zoom-out"><i class="fa fa-whatsapp-square"></i>+91-9111620002</h5>
                    </div>
                    
                </div>
            </div>
        </div>
        
        </>
    )
}
export default Contactus;