import React from "react";

const Card = (information)=>{
// const Card = ({name,email,id})=>{

    return(
        <div  className='tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-2'> 
            <img  alt='pending' src={`https://robohash.org/${information.id}?100x100`}/>      
          <div>
              <h2> { information.name} </h2>
              <p> {information.email} </p>
          </div>
        </div>
    )
}

export default Card;