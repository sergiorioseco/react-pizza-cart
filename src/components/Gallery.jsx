import "../assets/css/galeria.css";
import { useContext } from "react";
import Context from "../contexts/Context.js";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const navigate = useNavigate();
  const goToPizza = (selectedPizza) => {
    navigate(`/pizza/${selectedPizza}`);
    };

  const { data, setData } = useContext(Context);
  const handleLike = (id) => {
    const updatedData = data.map((pizza) => {
      if (pizza.id === id) {
        return {
          ...pizza,
          cart: pizza.cart === false ? true : false,
        };
      }
      return pizza;
    });
    setData(updatedData);
  };
    return (
      <div className="gallery grid-columns-4 p-3">
      {data.map((pizza) => (
        <Card key={pizza.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pizza.img} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>
          {pizza.ingredients.join(", ")}
          </Card.Text>
          <Card.Text>
          {pizza.price}
          </Card.Text>
          {pizza.cart ? (
              <Button variant="success mt-1" onClick={() => handleLike(pizza.id)}>
                Quitar
              </Button>
            ) : (
              <Button variant="primary mt-1" onClick={() => handleLike(pizza.id)}>
                Agregar al carrito
              </Button>
            )}
          <Button variant="secondary mt-1 mx-1" onClick={() => goToPizza(pizza.id)} >Detalles</Button>
        </Card.Body>
      </Card>
      ))}
    </div>
    );
  }