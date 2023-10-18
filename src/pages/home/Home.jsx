import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <div className='Home container'>
      <Link className='about_btn' to='/about'>Know More</Link>
    </div>
  )
}

export default Home