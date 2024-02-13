import React from 'react'

function Card({
    index,
    title ,
    description,
    image
}) {
  return (
   <div style={{width  : '350px'}}>
    <p>{index}</p>
    <img src={image} alt="" width='200' />
    <h2>{title}</h2>
    <p>{description}</p>
   </div>
  )
}

export default Card