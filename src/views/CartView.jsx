import Cart from "../components/Cart.jsx";
import Button from 'react-bootstrap/Button';

export default function CartView() {
  return (
    <div id="Cart" className="CartView">
      <h1>Detalle del pedido</h1>
      <Cart />
      <Button variant="success mx-5">Pagar</Button>
    </div>
  );
}