import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./source/home";
import Contact from "./source/contact";
import Privacy from "./source/privacy";

import Checkout from "./source/checkout";

import Paypal from "./controllers/paypal";
import PaypalRedirect from "./source/redirectPaypal";

import StripeCheckout from "./controllers/stripe";
import StripeCancel from "./source/StripeCancel";

import stripe from "./source/stripe";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <Route path="/stripe/cancel" component={StripeCancel} /> */}
        <Route path="/stripe" component={stripe} />
        <Route path="/checkout/stripe/:sid" component={StripeCheckout} />

        <Route path="/redirect/:id" component={PaypalRedirect} />
        <Route path="/checkout/paypal" component={Paypal} />
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
