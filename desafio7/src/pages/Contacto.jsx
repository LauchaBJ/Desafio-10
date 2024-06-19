import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'

const Contacto = () => {
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        fetch('https://6666123ad122c2868e49003b.mockapi.io/contacto')
        .then(res => res.json())
        .then(res => 
            setData(res), 
            setLoading(false)
        )
    },[])
return (
    <main>
        <Navbar/>
        <h1 className='text-center'>Contactos</h1>
        {
            loading? <h1>Cargando...</h1> : (
                data?.map(contacto => (<div className='text-center' key={contacto.id}>
                        <h3>{contacto.name}</h3>
                        <p>{contacto.telefono}</p>
                    
                </div>))
            )
        }
    </main>
)
}

export default Contacto