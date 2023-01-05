import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './Cart.module.scss';

export default function Cart() {
  const navigate = useNavigate();

  // Getting cart content from Redux global store
  const cart = useSelector((state) => state.cart);
  // The large green ribbon displayed at the bottom of the shop page when the user is logged in
  return (
    // Only displays the green ribbon if the user has at least 1 item in their cart
    cart.total > 0 && (
      <div className={classes.cart}>
        <h4 className={classes.amount}>
          {cart.cart.length} Items&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;£&nbsp;
          {cart.total}
        </h4>
        <button
          className="btn btn-lg text-white"
          onClick={() => navigate('/checkout')}
        >
          View Cart &rarr;
        </button>
      </div>
    )
  );
}
