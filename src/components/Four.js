import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Four.css';

const Four = () => {
  return (
    <div>
      <h2>Nam </h2>
      <p>Mock fake api</p>
      <Link to="/"> <h6 className='hometop'>Go back to Home</h6> </Link>
    </div>
  )
}

export default Four