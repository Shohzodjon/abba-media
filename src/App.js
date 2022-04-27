import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Pattern from "./components/pattern/Pattern";
import Product from "./components/product/Product";
import Small from "./components/small/Small";
import Story from "./components/story/Story";
function App() {
  return (
    <div className="App">
      <Header />
      <Pattern />
      <Product />
      <Story />
      <Contact />
      <Footer />
      <Small />
    </div>
  );
}

export default App;
