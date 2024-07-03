import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"


function App() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <header>
          <Navbar />
          <Hero />
        </header>
      </div>
      <Footer />
    </>
  )
}

export default App
