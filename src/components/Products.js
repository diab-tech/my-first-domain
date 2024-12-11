import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/product-slice";
import { addToCart } from "../rtk/slices/cart-slice";
export default function Products() {
  const dispatch = useDispatch();
  const productsStore = useSelector((state) => state.products);
  const cartStore = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container>
      <Row className=" pt-5 mt-5 ">
        {productsStore.map((product) => (
          <Col key={product.id} className=" mb-3">
            <Card style={{ width: "18rem", height: "550px" }}>
              <Card.Img
                style={{ height: "300px" }}
                variant="top"
                src={product.image}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={(e) => {
                    dispatch(addToCart(product));
                  }}
                >
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
