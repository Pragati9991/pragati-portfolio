import { useEffect, useState } from 'react';
import './index.css';

import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { EducationGrid } from './components/sections/EducationGrid';
import { Projects } from './components/sections/Projects';
import { ExperienceTimeline} from './components/sections/ExperienceTimeline';
import { Contact } from './components/sections/Contact';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <EducationGrid />
      <Projects />
      <ExperienceTimeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
