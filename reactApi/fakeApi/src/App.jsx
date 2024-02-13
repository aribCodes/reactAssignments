import { useEffect, useState } from 'react'
import './App.css'
import PostCard from './components/PostCard.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    (async() => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json();
      console.log(data);
      setPosts(data);
    })()
  },[])

  return (
    <>
      <Outlet />
      <body>
        <h1>Working</h1>
        <br />
        <div id='postsContainer'>
          {
            posts.map((post,index)=> {
              return (
                <PostCard post={post}/> 
              )
            })
          }
        </div>  
      </body>
    </>
  )
} 
export default App