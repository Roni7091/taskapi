import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Three.css';


const Three = () => {
  return (
    <div>
      <h2>Name </h2>
      <p>Mock Api</p>
      <Link to="/"> <h6 className='hometop'>Go back to Home</h6> </Link>
    </div>
  )
}

export default Three