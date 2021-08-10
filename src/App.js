import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./source/home";
import Contact from "./source/contact";
import Privacy from "./source/privacy";

import StripeCheckout from "./controllers/stripe";
import Paypal from "./controllers/paypal";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/checkout/paypal" component={Paypal} />
        <Route path="/checkout/stripe/:sid" component={StripeCheckout} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
