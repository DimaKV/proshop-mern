import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    setProducts(data);
  };
  useEffect(() => {
    getProducts("/api/products");
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((item) => (
          <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
