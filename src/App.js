import React from "react";
import Header from "./containers/Header";
import Necropolis from "./containers/Necropolis";
import Artwork from "./containers/Artwork";
import Blog from "./containers/Blog";
import About from "./containers/About";
import Contact from "./containers/Contact.js";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./containers/Footer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
        </div>
        <div>
          <Route exact path="/" component={Necropolis} />
          <Route exact path="/necropolis" component={Necropolis} />
          <Route path="/artwork" component={Artwork} />

          <Route path="/blog" component={Blog} />

          <Route path="/about" component={About} />

          <Route path="/contact" component={Contact} />
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
