import './style/global-style.scss'
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/home/index"
import DonatedBooks from "./pages/donated-books/index"
import Donation from "./pages/donation/index"
import * as R from "react-router-dom"

function App() {
  return (
    <R.BrowserRouter>
      <Header/>
      <R.Routes>
          <R.Route path="/" element={<Home/>}/>
          <R.Route path="/donated-books" element={<DonatedBooks/>}/>
          <R.Route path="/donation" element={<Donation/>}/>
        </R.Routes>
      <Footer/>
    </R.BrowserRouter>
  )
}

export default App
