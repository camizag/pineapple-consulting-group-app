import Navbar from './Navbar';
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

//Services' pages
import RealState from "./pages/RealState";
import Development from "./pages/Development";
import BusinessPlanning from "./pages/BusinessPlanning";
import ProfessionalDevelopment from "./pages/ProfessionalDevelopment";
import Nonprofit from "./pages/Nonprofit";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<LandingPage />} />

          <Route path='/real-state' element={<RealState />} />
          <Route path='/development' element={<Development />} />
          <Route path='/business-planning' element={<BusinessPlanning />} />
          <Route path='/professional-development' element={<ProfessionalDevelopment />} />
          <Route path='/non-profit' element={<Nonprofit />} />
          
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </>
    
  );
}

export default App;
