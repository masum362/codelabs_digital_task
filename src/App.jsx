import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"


function App() {
  return (
    <>
     <div className="w-[90%] mx-auto">
      <header>
      <Navbar />
      </header>
     </div>
     <Footer />
    </>
  )
}

export default App