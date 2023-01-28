import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import Button from "./../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartDropDownContainer, CartItems } from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  let navigate = useNavigate();
  const checkOutRoute = () => {
    let path = "/checkout";
    navigate(path);
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <Button onClick={checkOutRoute}> GO TO CHECKOUT </Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
