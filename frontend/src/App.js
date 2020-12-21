import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Fotter from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route } from "react-router-dom";
import ProductScreen from "./screens/ProducScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container className='py-3'>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} exact />
        </Container>
      </main>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
