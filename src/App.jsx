import Hero from "./Components/Hero/Hero.jsx";
import Services from "./Components/Services/Services.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import Contact from "./Components/Contact/Contact.jsx";

const App = () => {
  return (
    <div className="container">
      <Hero className="section"></Hero>
      <Services className="section"></Services>
      <Portfolio className="section"></Portfolio>
      <Contact className="section"></Contact>
    </div>
  )
}
export default App