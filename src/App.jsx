import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import PatientsHelpCards from "./components/patientsHelpCards/PatientsHelpCards"


function App() {
  return (
    <>
      <div className="w-[90%] mx-auto space-y-6 text-themeColor">
        <header>
          <Navbar />
          <Hero />
        </header>
        <main>
          <PatientsHelpCards />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
