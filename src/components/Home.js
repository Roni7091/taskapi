// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div>
//       <h1 style={{textAlign:'center', color:'brown'}}>Welcome to the Home Page</h1>
//       <ul>
//         <li>
//           <Link to="/one">Json Placeholder</Link>
//         </li>
//         <li>
//           <Link to="/two">Free Test Api</Link>
//         </li>
//         <li>
//           <Link to="/three">Mock Api</Link>
//         </li>
//         <li>
//           <Link to="/four">Mock fake json api</Link>
//         </li>
//         <li>
//           <Link to="/five">Dummy api</Link>
//         </li>
//         <li>
//           <Link to="/six">Designer Mock Api</Link>
//         </li>
//       </ul>
//     </div>
//   )
// }

// export default Home;

// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to the Home Page</h1>
      <ul className="home-list">
        <li>
          <Link to="/one">Json Placeholder</Link>
        </li>
        <li>
          <Link to="/two">Free Test Api</Link>
        </li>
        <li>
          <Link to="/three">Mock Api</Link>
        </li>
        <li>
          <Link to="/four">Mock fake json api</Link>
        </li>
        <li>
          <Link to="/five">Dummy api</Link>
        </li>
        <li>
          <Link to="/six">Designer Mock Api</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
