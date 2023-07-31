import { useContext } from "react";
import Context from "../contexts/Context.js";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams,useNavigate } from "react-router-dom";

export default function PizzaDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const goHome = () => {
        navigate(`/`);
        };

    const { data} = useContext(Context);
      const pizza = data.find((pizza) => pizza.id === id);

      if (!pizza) {
          return <div>Pizza not found</div>;
      }
      return (
        <>
        <Button variant="secondary mt-5" onClick={() => goHome()}>volver</Button>
              <div className="pizzaCard">
                  <Card.Img variant="top" src={pizza.img} />
                  <Card.Body>
                      <Card.Title>{pizza.name}</Card.Title>
                      <Card.Text>
                          {pizza.ingredients.join(", ")}
                      </Card.Text>
                      <Card.Text>
                          {pizza.desc}
                      </Card.Text>
                  </Card.Body>
              </div>
          </>
      );
  }