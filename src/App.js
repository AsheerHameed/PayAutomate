import React from "react";
import "./App.css";

import {
  Navbar,
  Home,
  Partners,
  Features,
  Services,
  Deal,
  Testimonials,
  Newsletter,
  Footer,
} from './components/index'

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Home />
      <Partners />
      <Features />
      <Services />
      {/*<Deal />
      <Testimonials />
      <Newsletter />
      <Footer /> */}
    </div>
  );
};

export default App;
