import React from 'react';
import { Link } from 'react-router-dom';





const Card =(props)=>{
    return(
        <>


            <div className="card" style={{width: "12rem;",cursor:'pointer'}}>
               <img className="card-img-top" src={props.img} alt="Card cap"/>
                  <div className="card-body">
                     <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.para}</p>
                          <Link to="#" class="btn btn-primary">{props.button}</Link>
                   </div>
            </div>


        </>
    );
}
export default Card;