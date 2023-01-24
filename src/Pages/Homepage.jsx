import React from 'react'
import Header from '../Components/Homepage/Header'
import NaviButton from '../Components/Homepage/NaviButton'
import Beatcard from '../Components/Other/Beatcard'

const Homepage = () => {
  return (
    <div>
    <Header/>
     <div className='my-1'>
      <Beatcard coverimg="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/173040402/original/9618f6ae94a056e54e87c5dd06aa3da47a2fcea6/create-your-type-beats-artwork-and-music-visualizer.png"/>
      <Beatcard coverimg="https://i.pinimg.com/474x/0a/d9/9e/0ad99e00e1cf450d8d43bf9338bc3b1f.jpg"/>
      <Beatcard coverimg="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cassette-beats-album-song-cover-art-design-template-e39892dbe4f3d75f921fcbc5a3ffaf8d_screen.jpg?ts=1635274918"/>
      <Beatcard coverimg="https://i.pinimg.com/originals/e7/1f/b8/e71fb816a3d1a7d89ad847269c4d8cb2.jpg"/>
      <Beatcard coverimg="https://images.squarespace-cdn.com/content/v1/5befb3b84611a081dd003798/1542447456369-C6IDY1DIB1A4GQ0JLZ2T/Ibrahim-final.jpg"/>
      <Beatcard coverimg="https://i1.sndcdn.com/artworks-NcNyfPKiyShtRHyH-Oz3vCA-t500x500.jpg"/>    
     </div>
    </div>
  )
}

export default Homepage