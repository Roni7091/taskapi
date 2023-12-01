// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import First from './components/First';
import Second from './components/Second';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';
import Six from './components/Six';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/one" element={<First />} />
          <Route path="/two" element={<Second />} />
          <Route path="/three" element={<Three />} />
          <Route path="/four" element={<Four />} />
          <Route path="/five" element={<Five />} />
          <Route path="/six" element={<Six />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import First from './components/First';
// import Second from './components/Second';
// import Three from './components/Three';
// import Four from './components/Four';
// import Five from './components/Five';
// import Six from './components/Six';

// function App() {
//   return (
//     <Router>
//       <div>
//        <Home/>
//         <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/one" component={<First />} />
//         <Route path="/two" component={<Second />} />
//         <Route path="/three" component={<Three />} />
//         <Route path="/four" component={<Four />} />
//         <Route path="/five" component={<Five />} />
//         <Route path="/six" component={<Six />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
