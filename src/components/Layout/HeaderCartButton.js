import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const [btnlight, setbtnlight] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItem = cartCtx.totalAmount;
  const btnClasses = `${classes.button} ${btnlight ? classes.bump : ""}`;
  useEffect(() => {
    if (items.items.length === 0) {
      return;
    }
    setbtnlight(true);
    const timer = setTimeout(() => {
      setbtnlight(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};
export default HeaderCartButton;
