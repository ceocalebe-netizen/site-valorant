import AnimatedBackground from './components/layout/AnimatedBackground';
import Header from './components/layout/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <Home />

        <footer className="py-8 text-center text-gray-600 text-sm relative z-10 glass-panel border-t border-white/5 mt-auto">
          <p>&copy; 2024 VALOSTORE. Not affiliated with Riot Games.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
