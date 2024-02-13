import React from 'react'
import App from '../../App'
import Post from '../Post/Post'
import { memo } from 'react'
function Card({title,key,body}) {
  return (
    <div key={key} style={{
        border:"2px solid black",
        width:'280px',
        display:'flex',
        flexDirection:'column',
        textAlign:"center",
        textWrap:"wrap"
    }} >
        <h2>{key}</h2>
        <h5>{title}</h5>
        <p>{body}</p>
    </div>
  )
}

export default memo(Card)