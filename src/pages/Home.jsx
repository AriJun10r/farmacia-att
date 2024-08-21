import Header from "../components/Header"
import Footer from "../pages/Footer"
import "./Home.css"
import "./Footer.css"

function Home() {
  return (
    <div className="Home-container">
      <Header />
      <div className="home-subcontainer">
        <img className="imgprincipal" src="./images/farmarcia.png" alt="nova direcao" />
        <p className="home-paragrafo">Convidamos toda a comunidade a prestigiar nossa inauguração dia 01/10/2024, traga sua família e aproveite nossas promoções de inauguração.
        </p>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>

  )
}

export default Home
