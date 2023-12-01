import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Second.css';




const Second = () => {
  return (
    <div>
      <h2>Name</h2>
      <p>Free Test api</p>
      <Link to="/"> <h6 className='hometop'>Go back to Home</h6> </Link>
    </div>
  )
}

export default Second;