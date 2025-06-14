import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PillarsSection from './components/PillarsSection';
import './styles/App.scss';

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <div className="top-right-gradient"></div>
      <main>
        <HeroSection />
        <PillarsSection />
      </main>
    </div>
  );
}

export default App;
