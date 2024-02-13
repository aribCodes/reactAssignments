import { useState,useCallback, useEffect } from 'react'
import Products from './components/Product/ProductListing/Products'
import Card from './components/Card/Card'
import './App.css'
import getAllPost from './service/post'
import Post from './components/Post/Post'

function App() {
  const [post,setPost]=useState([])
  useEffect(()=>{
    (async()=>{
      let response=await getAllPost()
      console.log( "response aya",response);
      if(response){
        setPost([...response])
      }
    })()
  },[])
  console.log("Post",post)
  return (
    <>
    <Post post={post} />
    </>
  )
}

export default App
