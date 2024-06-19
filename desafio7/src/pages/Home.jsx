import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'

const Home = () => {
    return (
        <main>
            <Navbar/>
            <h1 className='text-center'>Bienvenido a Home</h1> 
        </main>
    )
}

export default Home