import Gallery from "../components/Gallery.jsx";

export default function Home() {
  return (
    <div id="Home" className="Home">
      <div className="Header">
        <h1>¡Pizzería Mamma Mia!</h1>
        <h3>¡Teemos las mejores pizzas que podrás encontrar!</h3>
      </div>
      <Gallery />
    </div>
  );
}