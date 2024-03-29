import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearProducts, getFeaturedProducts } from '../../../store/product';
import { Container, Spinner } from 'react-bootstrap';
import classes from './FeaturedProducts.module.scss';
import catchErrors from '../../../services/catchErrors';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';

export default function FeaturedProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // API fetching featured products from database
    const fetchProducts = async () => {
      await dispatch(getFeaturedProducts());
    };

    fetchProducts();

    return () => {
      clearProducts();
    };
  }, [dispatch]);

  // Getting state from Redux store
  const { featuredProducts, errors, isLoading } = useSelector(
    (state) => state.product
  );

  return (
    <>
      <h1 className="d-flex align-items-center justify-content-center heading">
        Featured Products
      </h1>

      {isLoading && <Spinner variant="success" />}

      {!isLoading && errors.length > 0 && catchErrors(errors)}

      {!isLoading && errors.length === 0 && (
        <Container>
          <div className={classes.featured}>
            {/* Maps each element of array featuredProducts into an appropriate div  */}
            {featuredProducts?.map((product) => (
              <div
                className="card m-2 d-flex align-items-center justify-content-center position-relative"
                key={product.id}
              >
                <BsFillBookmarkCheckFill className={classes.featured__icon} />
                <img
                  className={classes.featured__image}
                  src={product.imageUrl}
                  alt={product.name}
                />
                <div className="d-flex flex-column align-items-center justify-content-between py-4 px-2">
                  <h4 className={classes.card__name}>{product.name}</h4>
                  <p className={classes.card__category}>{product.category}</p>
                  <p className={classes.card__description}>
                    {product.description}
                  </p>
                  <h4 className={classes.card__price}>
                    £&nbsp;{product.price}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex align-items-center justify-content-center mb-5">
            <button
              className="btn btn-success mb-4"
              onClick={() => navigate('/shop')}
            >
              Visit Shop &rarr;
            </button>
          </div>
        </Container>
      )}
    </>
  );
}
