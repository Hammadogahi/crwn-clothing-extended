import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Value,
  Name,
  Price,
  Arrow,
  Quantity,
  RemoveBtn,
} from "./checkout-item.styles";

const CheckOutItem = ({
  cartItem,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
}) => {
  const { imageUrl, price, name, quantity } = cartItem;
  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveBtn onClick={clearItemHandler}>&#10005;</RemoveBtn>
    </CheckoutItemContainer>
  );
};

export default CheckOutItem;
