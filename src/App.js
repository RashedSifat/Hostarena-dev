import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./source/home";
import Contact from "./source/contact";
import Privacy from "./source/privacy";

import Checkout from "./source/checkout";

import StripeCheckout from "./controllers/stripe";
import Paypal from "./controllers/paypal";
import stripe from "./source/stripe";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/stripe" component={stripe} />
        <Route path="/checkout/paypal" component={Paypal} />
        <Route path="/checkout/stripe/:sid" component={StripeCheckout} />
        {/* <Route path="/checkout/:id" component={Checkout} /> */}
        <Route path="/privacy" component={Privacy} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
