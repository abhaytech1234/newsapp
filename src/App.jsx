import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
// import Categories from './pages/Categories';
import Footer from './components/footer';
import FetchData from './components/FetchData';

const App = () => {
  return (

      <>
      {/* <Home /> */}
      <Router>
      <Navbar />
      <Home />  
          <Routes>
              {/* <Home/> */}
              <Route exact path="" element={ <Home /> } />
              <Route exact path="/general" element={<FetchData cat="general" />} />
              <Route  path="/business" element={<FetchData cat="business" />} />
              <Route  path="/entertainment" element={<FetchData cat="entertainment" />} />
              <Route  path="/health" element={<FetchData cat="health" />} />
              <Route  path="/science" element={<FetchData cat="science" />} />
              <Route  path="/sports" element={<FetchData cat="sports" />} />
              <Route  path="/technology" element={<FetchData cat="technology" />} />
              </Routes>
      </Router>
        <Footer />
      </>
  )
}

export default App;

