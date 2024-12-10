// import React from 'react'


const Card = ({elm}) => {
    let {image,name,id,instructions} = elm
  return (
    <>
     <div className="card" style={{width: "18rem"}}>
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h6>{id}</h6>
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{instructions}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>

</div> 
    </>
  )
}

export default Card
