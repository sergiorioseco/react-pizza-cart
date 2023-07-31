import { useContext } from "react";
import Context from "../contexts/Context.js";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cart() {
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
        <div className="Cart">
        {data
        .filter((pizza) => pizza.cart)
        .map((pizza) => (
        <div className="pizzaCard" key={pizza.id}>
                      <Card.Img variant="top" src={pizza.img} />
                      <Card.Body>
                          <Card.Title>{pizza.name}</Card.Title>
                          <Card.Text>
                              {pizza.ingredients.join(", ")}
                          </Card.Text>
                      </Card.Body>
                      <Card.Body>
                          <Card.Text>
                              {pizza.price}
                          </Card.Text>
                          <Button variant="danger" onClick={() => handleLike(pizza.id)} >Eliminar del carro</Button>
                      </Card.Body>
        </div>
        ))}
      </div>
    );
  }