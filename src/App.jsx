import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import ProjectsPage from './pages/Projects';
import InvestorsPage from './pages/Investors';
import GovernmentPage from './pages/Government';
import PrivacyPage from './pages/Privacy';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-brandGreen selection:text-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:type" element={<ServiceDetail />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/investors" element={<InvestorsPage />} />
        <Route path="/government" element={<GovernmentPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
