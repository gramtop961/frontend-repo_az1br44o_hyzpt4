import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Studios from './components/Studios'
import Capabilities from './components/Capabilities'
import Research from './components/Research'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Studios />
        <Capabilities />
        <Research />
      </main>
      <Footer />
    </div>
  )
}

export default App
