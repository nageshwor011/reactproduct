import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./ecom/Home";
import ProductDescription from "./ecom/ProductDescription";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/productdescription/:id" component={ProductDescription} />
        <Redirect push to="/" />
      </Switch>
    </>
  );
}

export default App;
