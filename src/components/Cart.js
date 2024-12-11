import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import { useSelector, useDispatch } from "react-redux";
import {
  clearAll,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../rtk/slices/cart-slice";

export default function Cart() {
  const cartStore = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartStore.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <Container className="mt-5 pt-5 position-relative">
      {/* <Row className=" mt-5 pt-5 ">
        {cartStore.map((product) => (
          <Col className=" mb-3" key={product.id}>
            <Card style={{ width: "18rem" }} className="mb-3">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Text style={{ fontWeight: "bold" }}>
                  {product.price} $
                </Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}
      <h3>Total Price: {totalPrice.toFixed(2)} $</h3>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartStore.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <Image
                  style={{ width: "100px", height: "100px" }}
                  src={product.image}
                />
              </td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <Button
                  className="btn-light me-2"
                  onClick={() => dispatch(increaseQuantity(product))}
                >
                  +
                </Button>
                <Button
                  className="btn-light me-2"
                  onClick={() => dispatch(decreaseQuantity(product))}
                >
                  -
                </Button>
                <Button
                  className="btn-danger "
                  onClick={() => dispatch(removeFromCart(product))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
        className=" btn btn-danger mt-3 position-absolute "
        onClick={() => dispatch(clearAll())}
      >
        Clear All
      </Button>
    </Container>
  );
}
